
import Appbar from "../components/Appbar";
import LeftText from "../components/bodyContent/LeftText";
import RightLoginForm from "../components/bodyContent/RightLoginForm";

export default function Login() {

  return (
    <div>
      <div>
        <Appbar />
      </div>

      <div className="grid grid-cols-2 w-screen h-screen overflow-hidden">
        <div className="grid  grid-cols-3">
          <div className="col-span-1 hidden lg:block"></div>
          <div className="col-span-3 lg:col-span-2">
            <LeftText />
          </div>
        </div>
        <div className="mt-24 ml-10 lg:mt-28 lg:ml-20">
          <RightLoginForm />
        </div>
      </div>
    </div>

  );
}
