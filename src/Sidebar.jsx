import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, Icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                <Icon />
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((socialIcon) => {
          const { id, url, Icon } = socialIcon;
          return (
            <li key={id}>
              <a href={url}>
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
