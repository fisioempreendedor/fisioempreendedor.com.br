import { Image, Divider, Card, CardBody, Link } from "@nextui-org/react";
import { infos } from "./mock";
import { ButtonRegistry } from "../Button";
import EventsType from "@/types/events";

const Detail = ({ nextEvent }: { nextEvent: EventsType; }) => (
  <>
    <Card className="p-0">
      <CardBody className="p-0">
        <div className="flex flex-col gap-4">
          <Image className="rounded-none" src="/assets/events/vendas-marketing-estudios-pilates.webp" alt={nextEvent.title} height={500} width={500} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-sm uppercase bg-background py-4 flex justify-center rounded-lg gap-1">exclusivo para <strong className="font-bold text-secondary">fisioterapeutas</strong></h5>
            <ul className="flex flex-col pl-6">
              {nextEvent.infos.map((item, index) => {
                return (
                  <div key={index}>
                    <li className='list-disc py-2 px-0'>
                      {index === infos.length - 1 ? <strong className="text-xl font-bold text-secondary">{item}</strong> : <>{item}</>}
                    </li>
                    {index !== infos.length - 1 && <Divider/>}
                  </div>
                )
              })}
            </ul>
            {/* <ButtonRegistry url={`https://wa.me/5534988883448?text=Olá, Carol. Quero me inscrever no evento ${nextEvent.title}.`} type="full" /> */}
          </div>
        </div>
      </CardBody>
    </Card>
    <Card>
      <CardBody className="p-4">
        <div className="flex flex-col">
          <h4 className="text-base font-bold">Informações</h4>
          <Link href={`https://wa.me/5534988883448?text=Olá, Carol. Gostaria de mais informações sobre o evento ${nextEvent.title}.`} target="_blank" className="text-xl font-bold text-secondary">(34) 9 8888-3448</Link>
        </div>
      </CardBody>
    </Card>
  </>
)

export default Detail
