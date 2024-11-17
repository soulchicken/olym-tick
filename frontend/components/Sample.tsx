'use client';

import { useAtom } from 'jotai';
import { motion, AnimatePresence } from 'framer-motion';
import { selectedImageAtom, zoomAtom } from '@/atoms/state';

const ZoomableImage = () => {
  const [selectedImage, ] = useAtom(selectedImageAtom);
  const [zoom, setZoom] = useAtom(zoomAtom);

  return (
    <AnimatePresence>
      {!zoom && (
        <motion.img
          src={selectedImage}
          onClick={() => setZoom(true)}
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
      {zoom && (
        <motion.img
          src="/profile.jpg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </AnimatePresence>
  );
};

export default ZoomableImage;
