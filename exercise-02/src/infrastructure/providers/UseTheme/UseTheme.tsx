import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';

type Props = {
  children?: any;
};

const MyTheme = (props: Props) => {
  const { children } = props;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ED1D24',
        contrastText: 'white',
      },
    },
    typography: {
      fontFamily: 'Bebas Neue, cursive',
      allVariants: {
        fontFamily: 'Bebas Neue, cursive',
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyTheme;
