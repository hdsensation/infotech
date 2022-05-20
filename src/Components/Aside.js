import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SidebarFooter
} from "react-pro-sidebar";
import { FaGithub,FaGem,FaAlignJustify,FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Aside() {
    const [collapse, setcollapse] = useState(true)
  

  return (
    <ProSidebar collapsed={collapse}>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaAlignJustify/>} onClick={()=>setcollapse(!collapse)}></MenuItem>
          <MenuItem icon={<FaHome />}>
            dashbord
            <Link to='/dashbord'/>
            </MenuItem>
          <MenuItem icon={<FaGem />}>Services
          <Link to='/service'/>
          </MenuItem>
          <MenuItem> <Link to='/'/>
          Homepage</MenuItem>
       </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper">
          <a
            href="https://github.com/hdsensation/infotech"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>Github</span>
          </a>
        </div>
      </SidebarFooter>
      </ProSidebar>

   
      );
    }