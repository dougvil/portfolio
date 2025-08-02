export type User = {
  name: string;
};

export interface InitialState {
  user: User | null;
}
