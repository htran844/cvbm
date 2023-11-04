import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import MenuLoginRegister from "./MenuLoginRegister";

export default function Header() {
  return (
    <nav className="top-navbar is-active">
      <div className="container is-navbar">
        <Logo />
        <Menu />
        <MenuLoginRegister />
      </div>
    </nav>
  );
}
