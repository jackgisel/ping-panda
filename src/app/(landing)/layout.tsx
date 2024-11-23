import { ReactNode } from "hono/jsx"
import Navbar from "../components/navbar"

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout
