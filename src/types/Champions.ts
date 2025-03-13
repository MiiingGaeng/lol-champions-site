export type Champion = {
  id: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  tags: string[];
};

export type ChampionDetail = {
  id: string;
  name: string;
  lore: string;
  tags: string[];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  spells: ChampionSpell[];
};

export type ChampionSpell = {
  name: string;
  description: string;
  image: {
    full: string;
  };
};
