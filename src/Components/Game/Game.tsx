import { useParams } from 'react-router-dom'
import style from "./Game.module.css"
import { recognizeLevelType } from '../../Types/ContentType';
import { Board } from './Board/Board';


export default function Game() {
  const { level } = useParams<{ level?: string }>(); 

  const levelPairs: Record<number, number> = {
    1: 8,
    2: 12,
    3: 16,
    4: 20,
    5: 24,
    6: 30,
    7: 36
  };

  const recognizeLevel: recognizeLevelType = (level) => {
    const levelNum = parseInt(level || '0', 10); 
    return levelPairs[levelNum] || 0;
  };

  const pairs = recognizeLevel(level || '0');

  return (
    <div className={style.GamePage}>
      <div className={style.Board}>
       <Board pairs={pairs}/>
      </div>
    </div>
  );
}