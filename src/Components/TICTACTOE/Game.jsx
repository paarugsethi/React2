import { useState } from "react";
import GameUI from "./GameUi";
import calculateWinner from "./calculateWinner";
import styles from "./Game.module.css"

function TicTacToe() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xTurn, setXTurn] = useState(true);

    const gameState = calculateWinner(history[stepNumber]);

    const turn = xTurn ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const boxes = [...current];

        // RETURN IF WINNER OR OCCUPIED
        if (gameState || boxes[i]){
            return;
        }

        // SELECT SQUARE
        boxes[i] = turn;
        setHistory([...history, boxes]);
        setStepNumber(historyPoint.length);
        setXTurn(!xTurn);    
    };

    const goTo = (step) => {
        
        if (step === 0){
            setStepNumber(step);
            setXTurn(true);
            setHistory([Array(9).fill(null)])
            // console.log(history[step])
            // setStepNumber(historyPoint.length);
        }
        else{
            setStepNumber(step);
            setXTurn(step % 2 === 0);

        }
        
    }

    
    return (
        <div>
            <div>
            <GameUI boxes={history[stepNumber]} onClick={handleClick}/>
            </div>
            
            <div className={styles.uiDiv}>
                <div className={styles.bodyDiv}>
                    <h3 className={styles.textHead}>History</h3>
                    {history.map((_step, move) => {
                    const destination = move ? `Go to ${move}` : `Go to Start`;
                    return (
                        <>
                            <li className={styles.list} key={move}>
                                <button className={styles.button} onClick={() => goTo(move)}><h3 className={styles.text}>{destination}</h3></button>
                            </li>
                        </>
                    );
                })}
                </div>
                <div className={styles.bodyDiv}>
                    <h3>
                        {gameState ? `${gameState} won!` : `Up next: ${turn}`}
                    </h3>
                </div>
            </div>
        </div>
        
    )
}

export default TicTacToe