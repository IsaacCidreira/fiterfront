import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 18px;
    margin-bottom: 12px;
  }

  input {
    background-color: ${({ theme }) => theme.colors.backgroundForms};
    border: none;
    border-radius: 3px;
    height: 50px;
    padding: 12px;
    padding-left: 40px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textPrimary};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textFormsPlaceHolder};
      font-size: 18px;
    }

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blueColorContraste};
    }
  }

  svg {
    width: 20px;
    height: auto;
    position: absolute;
    top: 50px;
    left: 10px;
    fill: ${({ theme }) => theme.colors.textFormsPlaceHolder};
  }
`;
