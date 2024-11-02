import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import html2canvas from 'html2canvas';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 40rem;
`;

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  width: 100%;
  max-width: 40rem;
  max-height: 40rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;

interface PhotoGridProps {
  uploadedPhoto: string;
  otherPhotos: string[];
  onReset: () => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ uploadedPhoto, otherPhotos, onReset }) => {
  const photos = [...otherPhotos];
  photos.splice(4, 0, uploadedPhoto);

  const photoContainerRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (photoContainerRef.current) {
      const canvas = await html2canvas(photoContainerRef.current, { useCORS: true });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'photo-grid.png';
      link.click();
    }
  };

  return (
    <Container>
      <h2>결과입니다!</h2>
      <PhotoContainer ref={photoContainerRef}>
        {photos.map((photo, index) => (
          <Image key={index} src={photo} alt={`Photo ${index + 1}`} crossOrigin="anonymous"/>
        ))}
      </PhotoContainer>
      <Button type="primary" size='large' onClick={onReset} style={{ marginTop: '20px', width: '100%' }}>
        처음으로 돌아가기
      </Button>
      <Button type="default" size='large' onClick={handleDownload} style={{ marginTop: '10px', width: '100%' }}>
        다운로드
      </Button>
    </Container>
  );
}

export default PhotoGrid; 