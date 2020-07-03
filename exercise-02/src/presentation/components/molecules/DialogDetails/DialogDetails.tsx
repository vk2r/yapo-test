import React from 'react';

// Components
import { Grid } from "@material-ui/core";
import MarvelTitle from '../../atoms/Title';
import MarvelDialog from '../../atoms/Dialog';

// Definitions
import { Character } from '../../organisms/GridList';

type Props = {
  open: boolean;
  details?: Character;
  onClose?: () => void;
};

const MarvelDialogDetails = (props: Props) => {
  const { open = false, details, onClose = () => {} } = props;

  return (
    <MarvelDialog
      id="marvel-dialog-details"
      title="Details"
      open={open}
      maxWidth="md"
      fullWidth
      onClose={onClose}
      actions={[
        { id: 'marvel-dialog-details-button', label: 'OK', onClick: onClose },
      ]}>
      <MarvelTitle
        name={details?.name}
        avatar={details?.avatar}
        style={{ padding: 0 }}
      />
      <Grid container style={{ width: '100%' }}>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 auto' }}>STORIES</h4>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{details?.stories}</p>
        </Grid>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 auto' }}>SERIES</h4>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{details?.series}</p>
        </Grid>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 auto' }}>COMICS</h4>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{details?.comics}</p>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '0 auto' }}>DETAILS</h4>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{details?.description}</p>
        </Grid>
      </Grid>
    </MarvelDialog>
  );
};

export default MarvelDialogDetails;
