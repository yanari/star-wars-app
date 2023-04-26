export interface CharacterName {
  name: string;
}

export interface Results {
  results: Array<CharacterName>;
}

export interface Side {
  display: string;
  value: string;
}

export interface Character {
  name: string;
  side: string;
}