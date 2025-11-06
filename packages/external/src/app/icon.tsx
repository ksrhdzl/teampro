import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 21,
          background: '#ca8a04',
          width: '100%',
          height: '100%',
          fontWeight: 900,
          display: 'flex',
          borderRadius: '30%',
          fontStyle: 'normal',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        T
      </div>
    ),
    {
      ...size,
    },
  );
}
