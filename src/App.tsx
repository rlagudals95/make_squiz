import React, { useState } from 'react';
import GenderSelection from './components/GenderSelection';
import PhotoUpload from './components/PhotoUpload';
import PhotoGrid from './components/PhotoGrid';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { femalePhotos, malePhotos } from './config/photos';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BodyContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
`;

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);

  const handleSelectGender = (selectedGender: 'male' | 'female') => {
    setGender(selectedGender);
    setStep(2);
  };

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedPhoto(e.target?.result as string);
      setStep(3);
    };
    reader.readAsDataURL(file);
  };

  const getOtherPhotos = () => {
    const basePhotos = gender === 'male' ? malePhotos : femalePhotos;
    const shuffledPhotos = basePhotos.sort(() => 0.5 - Math.random());
    return shuffledPhotos.slice(0, 8);
  };


  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setGender(null);
    setUploadedPhoto(null);
  };

  return (
    
    <Layout>
      <Header>
        <Button style={{marginLeft: '0.5rem'}}  disabled={step === 1} onClick={handleBack}>Back</Button>
      </Header>
      <BodyContainer>
      {step === 1 && <GenderSelection onSelectGender={handleSelectGender} />}
      {step === 2 && <PhotoUpload onUpload={handleUpload} />}
      {step === 3 && uploadedPhoto && (
        <PhotoGrid
          uploadedPhoto={uploadedPhoto}
          otherPhotos={getOtherPhotos()}
          onReset={handleReset}
        />
      )}
      </BodyContainer>
    </Layout>
  );
}

export default App;