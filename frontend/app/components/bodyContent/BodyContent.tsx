import LeftText from "./LeftText";

export default function BodyContent() {
  return <div className="grid grid-cols-2 w-screen h-screen overflow-hidden">
    <div className="grid grid-rows-2">
      <LeftText />
    </div>
  </div>
}
