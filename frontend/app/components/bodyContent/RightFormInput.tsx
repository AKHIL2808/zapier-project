export default function RightFormInput({ heading }: { heading: string }) {
  return <div className="m-7">
    <h3 className="font-bold">{heading}</h3>
    <input className="border-2 border-slate-300 rounded-md w-96 h-10 cursor-pointer" />
  </div>
}
