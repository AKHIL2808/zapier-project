import PrimaryGrayButton from "./button/Primary-gray-button";

export default function Appbar() {
  return <div className="grid grid-cols-2 border-slate-200 border-b-2 p-2">
    <div className="flex items-center font-extrabold text-4xl">zapier</div>
    <div className="flex flex-row-reverse">
      <div><PrimaryGrayButton button="Log in" link="/signin" /></div>
      <div className="hidden lg:block"><PrimaryGrayButton button="Contact us" link="/contact" /></div>
    </div>
  </div>
}
