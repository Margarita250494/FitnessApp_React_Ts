import { overlayStyles } from "@/shared/helpers"
import { TagPDescription } from "../components/TagPDescription"

type Props = {
    name: string,
    description?:string,
    image:string
}

export const Class = ({name,description="Information will be available soon",image}: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <TagPDescription className="text-2xl">{name}</TagPDescription>
        <TagPDescription className="mt-5">{description}</TagPDescription>
      </div>
      <img alt={`${name}`} src={image} />
    </li>
  )
}

