import React from 'react';
import './SideMenu.scss';

const SideMenu = () => {
  return (
    <div className="sidemenu-master">
      <div className="sidemenu-items">
        <div className="sidemenu-maisvendidos">Mais Vendidos</div>
        <div className="sidemenu-maisbaratos">Mais Baratos</div>
      </div>
    </div>
  );
};

export default SideMenu;
