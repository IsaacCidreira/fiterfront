import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
  small {
    margin-top: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.errorColor};
  }
`;
