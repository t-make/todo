import { useState } from "react";
import styles from "./TodoApp.module.css"

export const TodoApp = () => {
   const [text, settext] =useState("");


  return (
    <div className= {styles.app}>
      <div>
        <input type= "text"/>
        <button className={styles.todoButton}>追加</button>
      </div>
    </div>
  );
};