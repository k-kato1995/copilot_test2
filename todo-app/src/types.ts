export type Member = {
  id: number;
  name: string;
};

export enum Status {
  TODO = 'TODO',
  PROGRESS = 'PROGRESS',
  DONE = 'DONE',
}

export type Todo = {
  id: number;
  text: string;
  memberIds: number[];
  status: Status;
};
