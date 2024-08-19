import { NavLink } from "react-router-dom"
import style from "./GameHomePage.module.css"
import { GameHomePageType } from "../../Types/ComponentType";

export const GameHomePage: React.FC<GameHomePageType> = ({levels }) => {  
    return (
      <div className={style.GamePage} >
        <div className={style.BoardProportions}>
          {levels.map((el, index) => (
            <NavLink to={`/level/${el.level}`} key={index} className={style.LevelBox}>
              <div className={style.GameLevel}>Game Level {el.level}</div>
              <div className={style.Pairs}>Pairs {el.pairs}</div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }