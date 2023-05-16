import { useAppSelector } from "../store/hooks";



export function ramdonNumbers(): number {
  const min: number = Math.ceil(1);
  const max: number = Math.floor(7);
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
}

export function ramdonNumber(questions: []): number {
  const random = Math.floor(Math.random() * questions.length) + 0;
  return random
}

interface Player {
  x: number;
  y: number;
}

export const generar_pregunta_aleatoria = (questions: [], utilizados: any, setUtilizados: any, setQuestion: any, players: Player ) => {
  
  let questionse: string | any[] = []

  if(players.x % 2 === 0){
    questionse = questions.filter(ques => ques.category === 'easy')
  }
  let indice = Math.floor(Math.random() * questionse.length);
  while (utilizados.includes(indice)) {
    indice = Math.floor(Math.random() * questionse.length);
  }
  setUtilizados([...utilizados, indice]);

  setQuestion(questionse[indice]);
};