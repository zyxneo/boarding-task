import header from "./header.css";

import React from "react";
import NavLink from './NavLink'

export default class Header extends React.Component {

  render() {
    return (
      <header class="header">
        <div class="container header__container">
          <nav class="header__nav nav">
            <ul role="nav" class="nav__list nav__list--site">
              <NavLink to="/home" className="site" >Home</NavLink>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
