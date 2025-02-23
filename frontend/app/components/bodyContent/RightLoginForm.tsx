
"use client"
import { BACKEND_URL } from "@/app/config"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RightLoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  return <div className=" flex flex-col justify-evenly">
    <div>
      <div>
        <div className="m-7">
          <h3 className="font-bold">Work Email</h3>
          <input onChange={(e) => { setEmail(e.target.value) }} className="border-2 border-slate-300 rounded-md w-80 lg:w-96 h-10 cursor-pointer" />
        </div>
      </div>
      <div>
        <div className="m-7">
          <h3 className="font-bold">Password</h3>
          <input onChange={(e) => { setPassword(e.target.value) }} className="border-2 border-slate-300 rounded-md w-80 lg:w-96 h-10 cursor-pointer" />
        </div>
      </div>
    </div>
    <div>
      <div>
        <button onClick={async () => {
          const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
            email,
            password
          })
          console.log(res.data.token)
          localStorage.setItem("token", res.data.token)
          router.push("/dashboard")
        }} className="w-80 lg:w-96 h-10 ml-7 bg-orange-500 text-white rounded-md">Log in</button>
      </div>
    </div>
  </div>
}
