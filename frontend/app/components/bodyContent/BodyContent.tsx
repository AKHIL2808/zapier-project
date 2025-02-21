import LeftText from "./LeftText";
import RightForm from "./RightForm";

export default function BodyContent() {
  return <div className="grid grid-cols-2 w-screen h-screen overflow-hidden">
    <div className="grid  grid-cols-3">
      <div className="col-span-1"></div>
      <div className="col-span-2">
        <LeftText />
      </div>
    </div>
    <div className="mt-28 ml-20">
      <RightForm />
    </div>
  </div>
}
