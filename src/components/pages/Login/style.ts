import styled from 'styled-components';

export const LoginContainer = styled.section`
  /* DESKTOP */
  width: 100%;
  img {
    margin-left: 62px;
    margin-top: 62px;
    width: 120px;
    height: 41px;
  }

  /* TABLET */
  @media (max-width: 860px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      margin-left: 0px;
    }
  }

  /* CELULAR */

  @media (max-width: 480px) {
    img {
      margin-top: 32px;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
