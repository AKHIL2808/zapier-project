"use client"
import { usePathname } from "next/navigation";
import PrimaryGrayButton from "./button/Primary-gray-button";

export default function Appbar() {
  let visibility = false
  const pathName = usePathname()
  if (pathName == "/login") {
    visibility = true
  }
  return <div className="grid grid-cols-2 border-slate-200 border-b-2 p-2">
    <div className="flex items-center font-extrabold text-4xl">zapier</div>
    <div className="flex flex-row-reverse">
      {
        visibility ? <div><PrimaryGrayButton button="Sign up" link="/signup" /></div> : <div><PrimaryGrayButton button="Log in" link="/login" /></div>
      }
      <div className="hidden lg:block"><PrimaryGrayButton button="Contact us" link="/contact" /></div>
    </div>
  </div>
}
