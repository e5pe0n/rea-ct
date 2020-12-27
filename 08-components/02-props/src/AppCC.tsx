import React, { Component, ReactElement } from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

class App2 extends Component {
  characters: Character[] = [
    {
      id: 1,
      name: 'Hanamichi Sakuragi',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: 'Kaede Rukawa',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: 'Ryota Miyagi',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: 'Kotobuki Mitsui',
      grade: 3,
    },
    {
      id: 5,
      name: 'Gouken Akagi',
      grade: 3,
      height: 197,
    },
  ];

  render(): ReactElement {
    return (
      <div className="container">
        <header>
          <h1>SLAM DUNK Characters</h1>
        </header>
        <CharacterList school="shouhoku" characters={this.characters} />
      </div>
    );
  }
}
