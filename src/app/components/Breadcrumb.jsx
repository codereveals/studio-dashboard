import Link from "next/link";
import React from "react";

const Breadcrumb = ({ name }) => {
  return (
    <div className="p-3 rounded-md mb-5 bg-purple-100">
      <h2 className="text-lg font-bold">{name}</h2>
      <ul className="breadcrumb relative">
        <li className="item-list relative">
          <Link href="">Home</Link>
        </li>
        <li className="item-list relative">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
