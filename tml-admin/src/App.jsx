import styles from "./App.module.css";
import { Login } from "./components/Login/Login";

function App() {
  

  return (
    <>
      <div className={styles.App} id="root">
        <Login />
      </div>
    </>
  )
}

export default App;
