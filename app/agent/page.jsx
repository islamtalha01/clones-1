"use clinet";

import InteractiveAvatar from "../../components/InteractiveAvatar";
import MySideBar from "../../components/MySideBar";
export default function agent() {
  return (
    <main className="relative flex flex-col  w-screen">
      <div className="flex flex-row ">
        <div className="w-[250px]  flex flex-col">
          <MySideBar />
        </div>
        <div className="flex  justify-center items-center w-screen ">
          <div className="flex flex-col justify-center items-center  w-full">
            <InteractiveAvatar />
          </div>
        </div>
      </div>
    </main>

    // <div className='flex flex-col my-[159px] mx-[365px] w-full'>
  );
}
