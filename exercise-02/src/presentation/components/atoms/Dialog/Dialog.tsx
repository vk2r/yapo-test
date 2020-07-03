import React from 'react';

// Components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core';

// Definitions
export type Action = {
  id: string;
  label: string;
  onClick: (id: string) => void;
};

type Props = {
  id: string;
  open?: boolean;
  title?: string;
  text?: any;
  children?: any;
  onClose?: () => void;
  actions?: Action[];
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
};

const MarvelDialog = (props: Props) => {
  const {
    id,
    open = false,
    title,
    text,
    children,
    actions,
    maxWidth,
    fullWidth,
    onClose = () => {},
  } = props;
  return (
    <Dialog
      id={id}
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      aria-labelledby="marvel-dialog">
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {text && <DialogContentText>{text}</DialogContentText>}
        {children}
      </DialogContent>
      {actions && (
        <DialogActions>
          {actions.map((action, key) => {
            const { id, label, onClick } = action;
            return (
              <Button
                key={`${key}-${id}`}
                id={id}
                onClick={() => onClick(id)}
                color="primary">
                {label}
              </Button>
            );
          })}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default MarvelDialog;
