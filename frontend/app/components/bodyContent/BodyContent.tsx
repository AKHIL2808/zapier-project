import LeftText from "./LeftText";
import RightForm from "./RightForm";

export default function BodyContent() {
  return <div className="grid grid-cols-2 w-screen h-screen overflow-hidden">
    <div className="grid  grid-cols-3">
      <div className="col-span-1 hidden lg:block"></div>
      <div className="col-span-3 lg:col-span-2">
        <LeftText />
      </div>
    </div>
    <div className="mt-24 ml-10 lg:mt-28 lg:ml-20">
      <RightForm />
    </div>
  </div>
}
