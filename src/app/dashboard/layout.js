import React from "react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div>
      <ul className="flex gap-2 items-center justify-center bg-blue-200 text-black p-2">
        <li className="p-2 hover:bg-pink-200 rounded-md cursor-pointer">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="p-2 hover:bg-pink-200 rounded-md cursor-pointer">
          <Link href={"/dashboard/profile"}>Profile</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
