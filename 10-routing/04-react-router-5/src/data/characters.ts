export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type SchoolPlayers = {
  school: string;
  players: Character[];
};

export type CharactersData = {
  [schoolCode: string]: SchoolPlayers;
};

export const charactersData: CharactersData = {
  shohoku: {
    school: 'Shohoku High School',
    players: [
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
        height: 184,
      },
      {
        id: 5,
        name: 'Gouken Akagi',
        grade: 3,
        height: 197,
      },
    ],
  },
  ryonan: {
    school: 'Ryonan High School',
    players: [
      {
        id: 6,
        name: 'Akira Sendou',
        grade: 2,
        height: 190,
      },
      {
        id: 7,
        name: 'Jun Uosumi',
        grade: 3,
        height: 202,
      },
      {
        id: 8,
        name: 'Kitcho Fukuda',
        grade: 2,
        height: 188,
      },
      {
        id: 9,
        name: 'Ryoji Ikegami',
        grade: 3,
        height: 183,
      },
      {
        id: 10,
        name: 'Hiroaki Koshino',
        grade: 2,
        height: 174,
      },
    ],
  },
  kainan: {
    school: 'Kainan University High School',
    players: [
      {
        id: 11,
        name: 'Shinichi Maki',
        grade: 3,
        height: 184,
      },
      {
        id: 12,
        name: 'Nobunaga Kiyota',
        grade: 3,
        height: 178,
      },
      {
        id: 13,
        name: 'Souichirou Jin',
        grade: 2,
        height: 189,
      },
      {
        id: 14,
        name: 'Kazuma Takasago',
        grade: 3,
        height: 191,
      },
      {
        id: 15,
        name: 'Tadashi Mutou',
        grade: 3,
        height: 184,
      },
    ],
  },
};
