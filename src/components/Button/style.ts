import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 6px;
  height: 50px;
  border: none;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.blueColorContraste};

  &[disabled] {
    background-color: rgba(29, 109, 227, 0.31);
    color: rgba(255, 255, 255, 0.34);
  }
  /* CELULAR */
  @media (max-width: 480px) {
    height: 40px;
    font-size: 18px;
  }
`;
