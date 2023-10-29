"use client"
import GraphTest from "@/components/graphTest";
import type { NextPage } from "next";
import { data } from "@/components/data";

const Page: NextPage = () => {
  return (
    <>
    новая страница
    <GraphTest data={data}/>
    </>
  )
}

export default Page