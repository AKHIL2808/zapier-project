import { useState } from "react"

export default function RightForm() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  return <div className=" flex flex-col justify-evenly">
    <div>
      <div>
        <div className="m-7">
          <h3 className="overflow-x-hiddent-bold">Work Email</h3>
          <input onChange={(e) => { setEmail(e.target.value) }} className="border-2 border-slate-300 rounded-md w-96 h-10 cursor-pointer" />
        </div>
      </div>
      <div>
        <div className="m-7">
          <h3 className="font-bold">First Name</h3>
          <input onChange={(e) => { setFirstName(e.target.value) }} className="border-2 border-slate-300 rounded-md w-96 h-10 cursor-pointer" />
        </div>
      </div>
      <div>
        <div className="m-7">
          <h3 className="font-bold">Last Name</h3>
          <input onChange={(e) => { setLastName(e.target.value) }} className="border-2 border-slate-300 rounded-md w-96 h-10 cursor-pointer" />
        </div>
      </div>
    </div>
    <div>
      <div>
        <button className="w-96 h-10 ml-7 bg-orange-500 text-white rounded-md">Get Started for Free</button>
      </div>
    </div>
  </div>
}
