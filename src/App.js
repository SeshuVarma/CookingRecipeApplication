import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Recipe from "./components/Recipe/Recipe";
import x from './App.module.css'
function App() {
  
  return (
    <Fragment>
      <Header /> 
      <p className={x.recipe}>
      <Recipe /> 
      </p>  
    </Fragment>
  );
}

export default App;
