import React from "react";
import styles from "./Boxes.module.css";

function Boxes({value, onClick}) {
    let textColor = ""
    if (value === "X"){
        textColor = "black"
    }
    else{
        textColor = "red"
    }
    return (
        <button className={styles.box} onClick={onClick}><h1 style={{color:`${textColor}`}} className={styles.boxHead}>{value}</h1></button>
    )
    
}

export default Boxes