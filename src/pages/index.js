import * as React from "react"
import Editor from "./lexical/lexical"

function IndexPage() {
  return (
    <>
      <Editor />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
