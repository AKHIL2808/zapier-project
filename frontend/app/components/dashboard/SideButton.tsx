"use client"
import { useState } from "react";
import SelectedbuttonDashBoard from "../button/SelectedButtonDashBoard";

export default function SideButton() {
  const [selected, setSelected] = useState("zaps")
  return <div>
    <SelectedbuttonDashBoard value="zaps" button="Zaps" selected={selected} setSelected={setSelected} />
    <SelectedbuttonDashBoard value="home" button="Home" selected={selected} setSelected={setSelected} />
    <SelectedbuttonDashBoard value="about" button="About" selected={selected} setSelected={setSelected} />
  </div>
}
