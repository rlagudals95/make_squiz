import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  width: 100%;
  max-width: 30rem;

  button {
    width: 100%;
  }
`;

interface PhotoUploadProps {
  onUpload: (file: File) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (file) {
      onUpload(file);
    }
  };

  return (
    <Container>
      <h1>사진을 업로드해주세요</h1>
      <div style={{ width: '100%', maxHeight: '40rem', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {file && <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }} />}
      </div>
      <Upload accept='image/*' beforeUpload={(file) => { setFile(file); return false; }} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button type="primary" size='large' style={{ height: '3rem', fontWeight: 'bold' }} onClick={handleUpload} disabled={!file}>외모 분석하기</Button>
    </Container>
  );
}

export default PhotoUpload; 