import React from 'react';

// Components
import MarvelDialog from '../../atoms/Dialog';

// Images
import { ReactComponent as Logo } from '../../../images/logo.svg';

// Definitions
type Props = {
  open?: boolean;
  onClose?: () => void;
};

const MarvelDialogAbout = (props: Props) => {
  const { open = false, onClose = () => {} } = props;

  return (
    <MarvelDialog
      id="marvel-dialog-about"
      title="About"
      open={open}
      onClose={onClose}
      actions={[{ id: 'marvel-about-button-close', label: 'OK', onClick: (id) => onClose() }]}>
      <div style={{ textAlign: 'center' }}>
        <Logo />
        <h2 style={{ margin: '0 0 1rem' }}>CHARACTERS</h2>
        <p>
          By Victor Mansilla
          <br/> Powered by Marvel
        </p>
      </div>

    </MarvelDialog>
  );
};

export default MarvelDialogAbout;
