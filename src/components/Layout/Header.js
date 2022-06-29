
import { Fragment, useEffect } from "react";
import classes from "./Header.module.css";

function Header(props) {



useEffect(()=>{},[])

  return (
    <Fragment>
      <header className={classes.header}>
        <h1><em>Cooking Recipe Application</em></h1>
      </header>
    </Fragment>
  );
}

export default Header;
