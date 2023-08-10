import BasicMenu from "./BasicMenu";

import "./Menu.style.css";

export default function Menu() {
  return (
    <header className="logo-fundo">
      <div className="header-container">
        <img
          className="logo"
          src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <BasicMenu />
      </div>
    </header>
  );
}
