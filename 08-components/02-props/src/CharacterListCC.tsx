import React, { Component, ReactElement } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';
import { Character } from './CharacterList';

type Props = {
  school: string;
  characters: Character[];
};

class CharacterListCC extends Component<Props> {
  render(): ReactElement {
    const { school, characters } = this.props;

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map((character) => (
            <Item>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{character.name}</Item.Header>
                <Item.Meta>{character.grade}th</Item.Meta>
                <Item.Meta>{character.height ?? '???'}cm</Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
}
