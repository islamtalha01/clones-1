import React from "react";

const Success = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 85px)" }}
      className="w-full flex justify-center items-center p-2 flex-col"
    >
      <h1 className="text-4xl">Thanks for choosing Us!</h1>

      <h2 className="text-2xl">Your order is confirmed.</h2>
    </div>
  );
};

export default Success;
