import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { headerNavRoutes } from 'src/routes';
import style from "./style.module.scss";

import closeImg from "/public/images/close.svg"
import menu from "/public/images/menu.svg"

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>{open
      ? <img src={closeImg} alt="close" />
      : <img src={menu} alt="menu" />
      }</Button>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer}
        BackdropProps={{ style: { backgroundColor: 'transparent' } }}
      >
        <div className={style.burger__content} style={{ height: '90vh', background: 'white' }}>
          <ul className={style.burger__content_list}>
            {headerNavRoutes.map(route => (
              <li onClick={toggleDrawer} key={route.path} className={style.burger__content_li}>
                <Link to={route.path} className={style.burger__content_link}>
                  {route.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;