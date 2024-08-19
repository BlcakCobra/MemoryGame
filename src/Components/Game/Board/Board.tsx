import { useCallback, useEffect, useState } from "react";
import { BoardType } from "../../../Types/ComponentType";
import style from "./Board.module.css"

export const Board: React.FC<BoardType> = ({ pairs }) => {
  const totalCards = pairs * 2
  const [flippedIndices, setFlippedIndices] = useState<boolean[]>(Array(totalCards).fill(false));
  const [flippedCardIndices, setFlippedCardIndices] = useState<number[]>([]);
  const [cards] = useState(() => {


    const generatedCards = [];
    for (let i = 0; i < pairs; i++) {
      generatedCards.push(i + 1);
      generatedCards.push(i + 1); 

    }
    return generatedCards.sort(() => Math.random() - 0.5);
  });


  const handleCardClick = useCallback(
    (index: number) => {
    if(flippedCardIndices.length === 2 || flippedIndices[index])return 
      const newFlippedIndices = [...flippedIndices];
      newFlippedIndices[index] = !newFlippedIndices[index];

      setFlippedIndices(newFlippedIndices,);
      setFlippedCardIndices(prev => [...prev, index]);
      
    },
    [flippedIndices,flippedCardIndices]
  );
  
    useEffect(() =>{
      if(flippedCardIndices.length === 2){
        const [firstIndex,secondIndex] =flippedCardIndices
        const firstCard = cards[firstIndex]
        const secondCard = cards[secondIndex]
        if(firstCard === secondCard){
          setFlippedCardIndices([]);
        }
        else{
          setTimeout(() => {
            const newFlippedIndices = [...flippedIndices];
            newFlippedIndices[firstIndex] = false;
            newFlippedIndices[secondIndex] = false;
            setFlippedIndices(newFlippedIndices);
            setFlippedCardIndices([]);
          }, 750);
        }
      }
    },[flippedCardIndices, cards, flippedIndices])
  

  return (
    <div className={style.grid} style={{ 
      gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(totalCards))}, 1fr)`, 
      gridTemplateRows: `repeat(${Math.ceil(totalCards / Math.ceil(Math.sqrt(totalCards)))}, 1fr)` 
    }}>
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`${style.cell} ${flippedIndices[index] ? style.flipped : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <div className={style.inner}>
            <div className={style.front}></div> 
            <div className={style.back}>{card}</div> 
          </div>
        </div>
      ))}
    </div>
  );
};
