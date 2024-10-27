import { HoverEffect } from "./ui/card-hover-effecr";
import { languages } from "@/data/language";


const Language = () => {
  return (
    <div className="py-5">
      <h1 className="heading">
        The Language {" "}
        <span className="text-purple">I Know</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <HoverEffect items={languages}/>
      </div>
    </div>
  )
}

export default Language
