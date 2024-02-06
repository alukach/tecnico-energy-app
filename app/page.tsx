import { Header } from "../components/header"
import CardGrid from "../components/card-grid"
import prisma from "@/lib/prisma"
import { Studies } from "@prisma/client"

export default async function Home({}: Props) {
  const studies = await prisma.studies.findMany()
  return (
    <div className="bg-slate-100 h-full flex flex-col overflow-x-hidden">
      <Header />
      <div className="container mx-2 px-2 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl font-bold">Explore Urban Data Studies</h1>
        <CardGrid studies={studies} />
      </div>
    </div>
  )
}

interface Props {
  studies: Studies[]
}
