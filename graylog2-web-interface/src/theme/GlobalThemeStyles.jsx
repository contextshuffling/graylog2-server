import React from 'react';

import FormControlValidationStyles from './styles/FormControlValidationStyles';
import GlobalStyles from './styles/GlobalStyles';

const GlobalThemeStyles = () => {
  return (
    <>
      <GlobalStyles />
      <FormControlValidationStyles />
    </>
  );
};

export default GlobalThemeStyles;
export {
  GlobalStyles,
  FormControlValidationStyles,
};
