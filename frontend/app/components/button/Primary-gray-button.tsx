"use client"
import { useRouter } from "next/navigation"
export default function PrimaryGrayButton({ button, link }: { button: string, link: string }) {
  const router = useRouter()
  return <div className="flex justify-center items-center">
    <button onClick={() => {
      router.push(link)
    }} className="p-2 rounded-md hover:bg-slate-200">{button}</button>
  </div>
}
