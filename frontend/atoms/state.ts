// atoms/state.ts
import { atom } from 'jotai';

// Atom to store the currently selected image URL
export const selectedImageAtom = atom<string>('/profile.jpg');

// Atom to manage the zoom state (true for zoomed in, false for normal)
export const zoomAtom = atom<boolean>(false);
