import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { FaUsersGear } from "react-icons/fa6";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb name="Dashboard" />
      {/* Card Design  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-purple-100 p-10 rounded-md overflow-hidden relative flex justify-center items-center flex-col">
          <h2 className="font-bold text-4xl">20</h2>
          <p className="text-xl">Total Users</p>
          <span className="flex justify-center items-center h-20 w-20 rounded-full bg-purple-400 absolute -top-2 -right-3">
            <FaUsersGear fontSize={40} fill="#fff" />
          </span>
        </div>
        <div className="bg-pink-100 p-10 rounded-md overflow-hidden relative flex justify-center items-center flex-col">
          <h2 className="font-bold text-4xl">20</h2>
          <p className="text-xl">Total Pages</p>
          <span className="flex justify-center items-center h-20 w-20 rounded-full bg-pink-400 absolute -top-2 -right-3">
            <FaUsersGear fontSize={40} fill="#fff" />
          </span>
        </div>
        <div className="bg-teal-100 p-10 rounded-md overflow-hidden relative flex justify-center items-center flex-col">
          <h2 className="font-bold text-4xl">20</h2>
          <p className="text-xl">Total Posts</p>
          <span className="flex justify-center items-center h-20 w-20 rounded-full bg-teal-400 absolute -top-2 -right-3">
            <FaUsersGear fontSize={40} fill="#fff" />
          </span>
        </div>
        <div className="bg-orange-100 p-10 rounded-md overflow-hidden relative flex justify-center items-center flex-col">
          <h2 className="font-bold text-4xl">20</h2>
          <p className="text-xl">Total Users</p>
          <span className="flex justify-center items-center h-20 w-20 rounded-full bg-orange-400 absolute -top-2 -right-3">
            <FaUsersGear fontSize={40} fill="#fff" />
          </span>
        </div>
      </div>
      {/* table */}

      <div className="mt-8 mb-5">
        <div className="flex justify-between my-3 items-center">
          <h2 className="font-bold text-lg">New Users</h2>
          <a
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            href="/docs/installation"
          >
            View All Users
          </a>
        </div>

        <div className="overflow-hidden mt-5">
          <table className="font-inter w-full table-auto border-separate border-spacing-y-1 overflow-scroll text-left md:overflow-auto">
            <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
              <tr className="">
                <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-sm font-normal text-[#212B36]">
                  S. No.
                </th>
                <th className="whitespace-nowrap py-3 pl-1 text-sm font-normal text-[#212B36]">
                  Profile Image
                </th>
                <th className="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                  Full Name
                </th>
                <th className="whitespace-nowrap py-3 text-sm font-normal text-[#212B36]">
                  Email
                </th>
                <th className="whitespace-nowrap px-2.5 py-3 text-sm font-normal text-[#212B36]">
                  Roles
                </th>
                <th className="whitespace-nowrap rounded-r-lg py-3 pl-1 text-sm font-normal text-[#212B36]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  1
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  <Image
                    width={32}
                    height={32}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  Ram
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  ram@ram.com
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                  Admin
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    Omar Griffith
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  2
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  <Image
                    width={32}
                    height={32}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  Radha
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  radha@gmail.com
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                  admin
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    Omar Griffith
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  3
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  <Image
                    width={32}
                    height={32}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  Seeta
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  seeta@gmail.com
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                  User
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    Omar Griffith
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  4
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  <Image
                    width={32}
                    height={32}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  Pradeep
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  pradeep@gmail.com
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                  user
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    Omar Griffith
                  </div>
                </td>
              </tr>
              <tr className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:shadow-2xl">
                <td className="rounded-l-lg py-4 pl-3 text-sm font-normal text-[#637381]">
                  5
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  <Image
                    width={32}
                    height={32}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="/man.png"
                    alt="Avatar Image"
                  />
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  tara
                </td>
                <td className="px-1 py-4 text-sm font-normal text-[#637381]">
                  tara@gmail.com
                </td>
                <td className="px-2.5 py-4 text-sm font-normal text-[#637381]">
                  User
                </td>

                <td className="rounded-r-[8px] px-1 py-4 text-sm font-normal text-[#637381]">
                  <div className="relative flex items-center gap-1">
                    <div className="h-[22px] w-[22px]"></div>
                    Omar Griffith
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
