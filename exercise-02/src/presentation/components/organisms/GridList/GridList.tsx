import React, { CSSProperties } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

// Components
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';

// Icons
import InfoIcon from '@material-ui/icons/Info';

// Definitions
export type Character = {
  name: string;
  description: string;
  avatar: string;
  comics: number;
  series: number;
  stories: number;
};

type Props = {
  characters?: Character[];
  onClick?: (details: Character) => void;
  style?: CSSProperties;
};

const MarvelGridList = (props: Props) => {
  const { characters, style, onClick = (details: Character) => {} } = props;
  const classes = useStyles();
  return (
    <div id="marvel-grid-list" style={style}>
      {characters && (
        <GridList cellHeight={300} className={classes.gridList}>
          {characters.map((character, key) => (
            <GridListTile key={key}>
              <img src={character.avatar} alt={character.name} />
              <GridListTileBar
                title={character.name}
                subtitle={<span>Description: {character.description}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`Information of ${character.name}`}
                    onClick={() => onClick(character)}
                    className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      )}
    </div>
  );
};

// Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 'calc(100vh - 4.5rem)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

export default MarvelGridList;
