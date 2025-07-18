export type Member = {
  id: number;
  name: string;
};

export type Todo = {
  id: number;
  text: string;
  memberId: number;
  done: boolean;
};
