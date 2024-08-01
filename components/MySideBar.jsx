"use client";

import React, { useState } from "react";
import SideBarItem from "./SideBarItem";
import ChatItem from "./ChatItem";
// import { Link } from "next/link";

const MySideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
        ></div>
      )}

      <div
        style={{ minHeight: "calc(100vh - 85px)" }}
        className={` fixed p-4 inset-y-0 left-0 z-30 w-[250px] border border-[#292932] overflow-y-auto transition duration-300 transform bg-[#1C1C24] lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        <nav className="mt-9">
          <SideBarItem label="Discover" route="/" />
          <SideBarItem label="Pricing" status="pricing" route="/pricing" />
          <div className="mx-5 my-9 text-sm text-gray-400">YOUR CHATS</div>
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </nav>
      </div>
    </>
  );
};

export default MySideBar;
