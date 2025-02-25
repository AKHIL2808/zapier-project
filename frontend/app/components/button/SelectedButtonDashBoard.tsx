"use client"
import { Dispatch, SetStateAction, useState } from "react"

export default function SelectedbuttonDashBoard({ value, button, selected, setSelected }: { value: string, button: string, selected: string, setSelected: Dispatch<SetStateAction<string>> }) {
  console.log(value)
  return <div className={`cursor-pointer w-full m-2 flex items-center justify-center hover:bg-slate-200 h-10 rounded ${selected == value ? "bg-slate-200" : "bg-white"}`} onClick={() => {
    setSelected(value)
  }} >
    <button value={value}>{button}</button>
  </div>
}
