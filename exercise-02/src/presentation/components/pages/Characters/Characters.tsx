import React, { useEffect, useState } from 'react';

// Services
import Marvel from '../../../../infrastructure/services/marvel';

// Components
import MarvelDialogDetails from '../../molecules/DialogDetails';
import MarvelGridList, { Character } from '../../organisms/GridList';
import MarvelDialogAbout from '../../molecules/DialogAbout';
import MarvelAppBar from '../../organisms/AppBar';

const Characters = () => {
  // Services
  const { charactersService } = Marvel;

  // Status
  const [characters, setCharacters] = useState<Character[]>();
  const [details, setDetails] = useState<Character>();
  const [showAbout, setShowAbout] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Methods
  const methods = {
    setDetails: (character: Character) => {
      setDetails(character);
      setShowDetails(true);
    },
    getCharacters: async () => {
      const {
        data: {
          data: { results },
        },
      } = await charactersService.get(30, 0);

      const response = results.map(character => {
        const {
          name,
          description,
          thumbnail: { path, extension },
          comics: { available: comics },
          series: { available: series },
          stories: { available: stories },
        } = character;
        return {
          name,
          description: description ? description : 'Unknown',
          avatar: `${path}.${extension}`,
          comics,
          series,
          stories,
        };
      }) as Character[];

      setCharacters(response);
    },
  };

  useEffect(() => {
    methods.getCharacters();
    return () => charactersService.cancel();
  }, []);

  return (
    <div id="marvel-characters-view">
      <MarvelGridList characters={characters} onClick={methods.setDetails} />
      <MarvelAppBar onClickFab={() => setShowAbout(true)} />
      <MarvelDialogAbout open={showAbout} onClose={() => setShowAbout(false)} />
      <MarvelDialogDetails
        open={showDetails}
        details={details}
        onClose={() => setShowDetails(false)}
      />
    </div>
  );
};

export default Characters;
