import { Question } from "../components/dados/dados";

export function ramdonNumbers(): number {
  const min: number = Math.ceil(1);
  const max: number = Math.floor(7);
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
}

export function ramdonNumber(questions:Question[]): number {
  const random = Math.floor(Math.random() * questions.length) + 0;
  return random
}
