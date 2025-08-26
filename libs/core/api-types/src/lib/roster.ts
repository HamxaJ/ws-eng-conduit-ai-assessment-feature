export interface RosterUser {
  id: number;
  username: string;
  image: string;
  articleCount: number;
  favoritesCount: number;
  firstArticleDate: Date | null;
}

export interface RosterResponse {
  roster: RosterUser[];
}