import type { NextComponentType, NextPageContext } from "next";

interface Props {
    labels : string[]
}

const Test: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div></div>
  )
}

export default Test