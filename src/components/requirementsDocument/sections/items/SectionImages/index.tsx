import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import styles from './SectionImages.module.css';

interface IProps {
  images: string[];
}

const SectionImages = ({ images }: IProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <ImageList cols={8} gap={8}>
        {images.map((src, index) => (
          <ImageListItem
            className={styles.thumbnail}
            key={index}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Image ${index}`}
              className={styles.thumbnail}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal open={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <Box className={styles.modal}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className={styles.fullImage}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default SectionImages;
