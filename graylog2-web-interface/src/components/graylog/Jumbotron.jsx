// eslint-disable-next-line no-restricted-imports
import { Jumbotron as BootstrapJumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const Jumbotron = styled(BootstrapJumbotron)(({ theme }) => `
  color: ${theme.color.global.textDefault};
  background-color: ${theme.color.gray[100]};
`);

export default Jumbotron;
