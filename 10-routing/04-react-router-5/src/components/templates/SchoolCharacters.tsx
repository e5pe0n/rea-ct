import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import CharactersList from 'components/organisms/CharactersList';
import { Character } from 'data/characters';

type Props = {
  school: string;
  characters: Character[];
  isLoading?: boolean;
};

const SchoolCharacteres: FC<Props> = ({
  school,
  characters,
  isLoading = false,
}) => (
  <>
    <Helmet>
      <title> All Characters | {school}</title>
    </Helmet>
    <Header as="h2">{school}</Header>
    <CharactersList characters={characters} isLoading={isLoading} />
  </>
);

export default SchoolCharacteres;
