import styles from "./TodoApp.module.css"




export const TodoApp = () => {
  return (
    <div className= {styles.app}>
      <div>
        <input type= "text"/>
        <button>追加</button>
      </div>
    </div>
  );
};