import Navbar from "@/components/navbar"
import { ReactNode } from "hono/jsx"

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout
