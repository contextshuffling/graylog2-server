// eslint-disable-next-line no-restricted-imports
import { Tabs as BootstrapTabs } from 'react-bootstrap';
import styled from 'styled-components';

import navTabsStyles from './styles/nav-tabs';

const Tabs = styled(BootstrapTabs)(({ theme }) => `
  ${navTabsStyles(theme.color)};
`);

export default Tabs;
