import React from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';

interface IntroductionProps {
  onNext: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 40rem;
`;


const Introduction: React.FC<IntroductionProps> = ({ onNext }) => {
  return (
    <Container>
      <h1>얼굴분석 서비스</h1>
      <Button size='large' type="primary" style={{ fontWeight: 'bold', height: '3rem' }} onClick={onNext}>
        시작해볼까요!
      </Button>
    </Container>
  );
};

export default Introduction; 