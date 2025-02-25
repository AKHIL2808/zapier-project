"use client"
import { useState } from "react";
import Appbar from "../components/Appbar";
import SideButton from "../components/dashboard/SideButton";

export default function () {
  const [showCreate, setShowCreate] = useState(false)
  return <div>
    <div><Appbar /></div>
    <div className="grid grid-cols-8">
      <div className="col-span-1">
        <button className="w-full h-10 m-2 bg-orange-500 text-white rounded" value={"create"}> Create</button>
        <SideButton />
      </div>
      <div className="col-span-7 grid grid-cols-2 ">
        <div className="m-4 font-extrabold text-2xl">Zaps</div>
        <div className="flex flex-row-reverse">
          <div className="flex flex-col justify-start items-end m-2">
            <button className="p-2 bg-blue-400 w-24 text-white hover:bg-blue-500" onFocus={() => {
              setShowCreate(true)
            }}
              onBlur={() => {
                setShowCreate(false)
              }}
            >Create</button>
            <div className={`border border-slate-200 shadow-md rounded-sm p-2 hover:bg-slate-200 ${showCreate ? "block" : "hidden"}`}>
              <button>New Zap</button>
            </div>
          </div>
          <div className="flex justify-start items-start m-2"><button className="p-2">Trash</button></div>
        </div>
      </div>
    </div>
  </div>
}
