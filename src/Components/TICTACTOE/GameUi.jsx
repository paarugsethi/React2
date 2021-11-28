import Boxes from "./GameBoxes";
import styles from "./GameUi.module.css"

function GameUI({boxes, onClick}) {

    return (
        <div className={styles.tictacUi}>
        {boxes.map((boxes, i) => {
            return(

                <Boxes key={i} value={boxes} onClick={() => onClick(i)}/>
            )
        })}
        </div>
    )
    
}

export default GameUI