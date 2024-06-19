import React from 'react';
import styles from './HeaderMenu.module.css';
import menu from './menu.json';

export default function Menu() {
  const menuItems = menu.filter(item => item.type === "menu");

  return (
    <ul className={styles.menu}>
      {menuItems.map((item) => (
        <li key={item.id} className={`${styles.menuItem} ${styles['menuitem' + item.id]}`}>
          <a href={item.path}>{item.name}</a>
          {item.submenu && (
            <ul className={styles.menusub}>
              {item.submenu.map((subItem) => (
                <li key={subItem.id} className={`${styles[subItem.dis]}`}>
                  <a href={subItem.path}>{subItem.name}</a>
                  {subItem.submenu && (
                    <ul className={styles.submenu}>
                      {subItem.submenu.map((subSubItem) => (
                        <li key={subSubItem.id} className={`${styles[subSubItem.dis]}`}>
                          <a href={subSubItem.path}>{subSubItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
