import { Divider, Card, CardBody, Link } from "@nextui-org/react";
import EventsType from "@/types/events";

const NextEvents = ({ nextEvent  }: { nextEvent: EventsType }) => (
  <Card>
    <CardBody>
      <div className="flex flex-col gap-4">
        <Link href={`eventos/${nextEvent.slug}`} className="text-xl font-bold hover:text-title">
          {nextEvent.title}
        </Link>
        <h5 className="text-xs uppercase w-fit bg-background px-6 py-2 rounded-lg">exclusivo para <strong className="font-bold text-title">fisioterapeutas</strong></h5>
        <ul className="flex flex-col pl-6">
          {nextEvent.infos.map((info, index) => {
            return (
              <div key={index}>
                <li className='list-disc py-2 px-0 text-base'>
                  {index === nextEvent.infos.length - 1 ? <strong className="text-xl font-bold text-title">{info}</strong> : <>{info}</>}
                </li>
                {index !== nextEvent.infos.length - 1 && <Divider/>}
              </div>
            )
          })}
        </ul>
        <Link className="flex items-center justify-end text-title" href={`eventos/${nextEvent.slug}`}>
          + informações
        </Link>
      </div>
    </CardBody>
  </Card>
)

export default NextEvents;
