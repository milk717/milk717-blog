import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import SideBar from "../components/SideBar";
import '../stylesheets/home-page.scss'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <SideBar/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
