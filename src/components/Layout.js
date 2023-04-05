import styled from 'styled-components';

const LayoutMain = styled.main`
  max-width: 1170px;
  margin: 0 auto;
  padding: 16px;
`;

export const Layout = ({ children }) => {
  return <LayoutMain>{children}</LayoutMain>;
};
