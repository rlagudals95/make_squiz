import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  width: 100%;
  max-width: 40rem;

  button {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

interface GenderSelectionProps {
  onSelectGender: (gender: 'male' | 'female') => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ onSelectGender }) => {
  return (
    <Container>
      <h2>성별을 선택해주세요</h2>
      <ButtonContainer>
        <Button type="primary" size='large' style={{ backgroundColor: 'blue', height: '3rem', borderColor: 'blue', fontWeight: 'bold' }} onClick={() => onSelectGender('male')}>남성</Button>
        <Button type="primary" size='large' style={{ backgroundColor: 'pink', height: '3rem', borderColor: 'pink', color: 'black', fontWeight: 'bold' }} onClick={() => onSelectGender('female')}>여성</Button>
      </ButtonContainer>
    </Container>
  );
}

export default GenderSelection; 