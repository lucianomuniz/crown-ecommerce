import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  align-items: center;
  display: flex;
  height: 60vh;
  justify-content: center;
  width: 100%;
`;

export const SpinnerContainer = styled.div`
  animation: spin 1s ease-in-out infinite;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  display: inline-block;
  height: 50px;
  width: 50px;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
