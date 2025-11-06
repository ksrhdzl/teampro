'use server';

export const getBackendURL = async () => {
  return process.env.BACKEND_URL;
};

export const getStorageURL = async () => {
  return `${process.env.STORAGE_URL}`;
};
