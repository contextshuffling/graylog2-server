// eslint-disable-next-line no-restricted-imports
import { Jumbotron as BootstrapJumbotron } from 'react-bootstrap';
import styled from 'styled-components';

import { color } from 'theme';

const Jumbotron = styled(BootstrapJumbotron)`
  color: ${color.global.textDefault};
  background-color: ${color.gray[100]};
`;

export default Jumbotron;
