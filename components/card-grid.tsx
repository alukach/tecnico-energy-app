import Card from "./card"
import { getStudies } from "@/app/lib/data"

export default async function CardGrid() {
  const studies = await getStudies()
  return (
    <div className="container pr-4 md:pr-0 md:mx-auto py-8 md:max-w-max">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {studies?.map(study => (
          <Card
            key={study.slug}
            description={study.description}
            title={study.name}
            href={`explore/${study.slug}`}
            src={study.image_src}
          />
        ))}
      </div>
    </div>
  )
}
