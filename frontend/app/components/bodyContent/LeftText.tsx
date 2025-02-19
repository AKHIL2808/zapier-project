import LeftTickContent from "./LeftTickContent";

export default function LeftText() {
  return <div className="flex flex-col justify-center items-center p-4 mt-20">
    <div className="m-4">
      <h1 className="font-sans font-bold text-3xl">"Join millions worldwide who automate their work using zapier"</h1>
    </div>
    <div className="m-4">
      <div className="mr-4 mb-4"><LeftTickContent text="Easy setup,no coding required" /></div>
      <div className="my-4"><LeftTickContent text="Free forever,for core features" /></div>
      <div className="my-4"><LeftTickContent text="14-day trial of premium features & apps" /></div>
    </div>
  </div>
}
