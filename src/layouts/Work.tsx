import Description from "@/components/Description";
import SectionTitle from "@/components/SectionTitle";
import { workConfig } from "@/utils/config";
import { WorkConfigType } from "@/utils/types";

export default function Work() {
  return (
    <section id="How-we-work" className="flex justify-center w-full p-8 md:p-0">
      <div className="container flex flex-col w-full py-8">
        <SectionTitle>WHAT WE DO</SectionTitle>

        <div className="flex flex-wrap w-full">
          {
            workConfig.map((item: WorkConfigType) => (
              <Description key={item.id} className="w-full md:w-1/2">
                <div className="w-full">
                  <h1 className="text-xl text-center my-4">{item.title}</h1>

                  <ul className="w-full">
                    {
                      item.description.map((desc: string, index: number) => (
                        <li key={index} className="text-gray-300 text-sm my-2 list-disc">{desc}</li>
                      ))
                    }
                  </ul>
                </div>
              </Description>
            ))
          }
        </div>
      </div>
    </section>
  )
}
