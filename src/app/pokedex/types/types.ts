export interface Pokemon {
  id: number;
  name: string;
  damage: number;
  isCaught?: boolean;
  catchDate?: Date;
}