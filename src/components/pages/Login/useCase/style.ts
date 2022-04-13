import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 150px;
  width: 600px;
  max-width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecundary};
  border-radius: 10px;
  padding: 32px;
  box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.3);

  /* TABLET */
  @media (max-width: 860px) {
    margin-top: 120px;
    height: 100%;
    width: 95%;
    padding: 32px;
  }

  /* CELULAR */
  @media (max-width: 480px) {
    margin-top: 62px;
    height: 100%;
    width: 95%;
    padding: 12px;
  }
`;

export const Title = styled.h1`
  /* DESKTOP */
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 32px;

  /* TABLET */
  @media (max-width: 860px) {
    font-size: 48px;
    text-align: center;
  }

  /* CELULAR */
  @media (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 0 auto;
    width: 50%;
    margin-top: 32px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }
`;
export const Forms = styled.div``;
