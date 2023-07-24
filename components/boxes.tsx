"use client";

const Boxes = () => {
  return (
    <div className="flex h-[600px] w-full space-x-4">
      <div className="w-full space-y-4">
        <div className="flex justify-center bg-[#E9C0E9] h-[292px] rounded-3xl">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/6 h-1/2 self-center rounded-3xl mr-3"></div>
          <div className="bg-blue-400 w-1/6 h-1/2 self-center rounded-3xl mr-3"></div>
          <div className="bg-white w-1/3 h-1/2 self-center rounded-3xl"></div>
        </div>
        <div className="bg-[#D2E823] h-[292px] rounded-3xl"></div>
      </div>
      <div className="bg-[#780016] w-full h-full rounded-3xl"></div>
    </div>
  );
};

export default Boxes;
