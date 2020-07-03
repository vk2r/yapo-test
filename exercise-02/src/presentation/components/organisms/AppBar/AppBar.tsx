import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

// Components
import { AppBar, Typography, Toolbar, Fab, SvgIcon } from '@material-ui/core';

// Images
import { ReactComponent as MarvelIcon } from '../../../images/logo2.svg';

// Definitions
type Props = {
  onClickFab?: () => void;
};

const MarvelAppBar = (props: Props) => {
  const { onClickFab = () => {} } = props;
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Fab
          color="inherit"
          aria-label="Marvel Fab Button"
          className={classes.fabButton}
          onClick={onClickFab}>
          <SvgIcon>
            <MarvelIcon />
          </SvgIcon>
        </Fab>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

// Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
      backgroundColor: '#F5F5F5',
    },
  }),
);

export default MarvelAppBar;
