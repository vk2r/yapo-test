import React, { CSSProperties } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Components
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core/';

// Definitions
type Props = {
  name?: string;
  avatar?: string;
  style?: CSSProperties;
};

const MarvelTitle = (props: Props) => {
  // Props
  const { name, avatar, style } = props;
  const classes = useStyles();
  return (
    <List style={style}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={name} src={avatar} className={classes.large} />
        </ListItemAvatar>
        <ListItemText primary={<h2 style={{ marginLeft: '.5rem' }}>{name}</h2>} />
      </ListItem>
    </List>
  );
};

// Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    }
  }),
);

export default MarvelTitle;
