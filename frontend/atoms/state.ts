import { atom } from 'jotai';

export const selectedImageAtom = atom<string>('/profile.jpg');

export const zoomAtom = atom<boolean>(false);
