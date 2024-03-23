import Description from "@/components/Description";
import SectionTitle from "@/components/SectionTitle";
import { serviceConfig } from "@/utils/config";
import { ServiceConfigType } from "@/utils/types";

export default function Service() {
  return (
    <section id="Service" className="flex justify-center w-full p-8 md:p-0">
      <div className="container flex flex-col w-full py-8">
        <SectionTitle>WHAT WE OFFER</SectionTitle>

        <div className="flex flex-wrap w-full">
          {
            serviceConfig.map((item: ServiceConfigType) => (
              <Description key={item.id} className="w-full sm:w-1/2 md:w-1/4 h-40">
                <h1 className="text-xl text-center">{item.title}</h1>
              </Description>
            ))
          }
        </div>
      </div>
    </section>
  )
}
