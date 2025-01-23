import React from "react";
import "../globals.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">Home</li>
        <li className="sidebar-item">Over Ons</li>
        <li className="sidebar-item">Contact</li>
        <li className="sidebar-item">Projecten</li>
      </ul>
    </div>
  );
};

export default Sidebar;
