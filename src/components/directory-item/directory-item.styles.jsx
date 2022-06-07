import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const Body = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;

  h2 {
    color: #4a4a4a;
    font-size: 22px;
    font-weight: bold;
    margin: 0 6px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    font-weight: lighter;
  }
`;

export const DirectoryItemContainer = styled.div`
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex: 1 1 auto;
  height: 240px;
  justify-content: center;
  margin: 0 7.5px 15px;
  min-width: 30%;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      transform: scale(1.1);
    }
    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
