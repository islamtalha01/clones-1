"use client";

import Discover from "./discover/page";
import MySideBar from "../components/MySideBar";

function Home() {
  return (
    <>
      <div className="flex flex-col my-[159px] mx-[365px] w-full">
        <div className="flex flex-col justify-center items-center  w-full">
          <Discover />
        </div>
      </div>
    </>
  );
}

export default Home;
