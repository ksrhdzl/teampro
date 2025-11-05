'use server';

import 'server-only';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { cache } from 'react';

// TODO ENV VALUE WHEN IS NOT EXIST
const secretKey = process.env.SESSION;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(
  payload: { auth: string },
  expiresAt: Date,
): Promise<string | null> {
  try {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(expiresAt)
      .sign(encodedKey);
  } catch (error) {
    console.log('Failed to encrypt session', error);
    return null;
  }
}

export async function decrypt(
  session: string | undefined = '',
): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload['auth'] as string;
  } catch (error) {
    console.log('Failed to decrypt session', error);
    return null;
  }
}

// ----------------------------------

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  // TODO : we can insert session to server or database
  const session = await encrypt({ auth: token }, expiresAt);

  (await cookies()).set('session', session!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    // maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
    path: '/',
  });
}

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value ?? null;
  if (!cookie) return null;
  const session = await decrypt(cookie);
  if (!session) return null;

  return session;
});

export async function deleteSession() {
  (await cookies()).delete('session');
}
