import { Image, Divider, Card, CardBody, Link } from "@nextui-org/react";
import EventsType from '@/types/events';
import { infos } from "./mock";

const Banner = ({ nextEvent  }: { nextEvent?: EventsType }) => (
  <Card>
    <CardBody className="p-0">
      <div className='flex flex-col gap-8 lg:flex-row items-center bg-background'>
        <Image src="/assets/events/2.webp" className="rounded-none"alt={nextEvent?.title} height={400} width={400} />
        <div className="flex flex-col gap-4 flex-1 p-4">
          <Link href={`eventos/${nextEvent?.slug}`} className="text-3xl font-bold hover:text-secondary">
            {nextEvent?.title}
          </Link>
          <h5 className="text-sm uppercase">exclusivo para <strong className="font-bold text-secondary">fisioterapeutas</strong></h5>
          <ul className="flex flex-col pl-6">
            {infos.map((item, index) => (
              <div key={index}>
                <li className='list-disc py-2 px-0'>
                  {index === infos.length - 1 ? <strong className="text-xl font-bold text-secondary">{item.text}</strong> : <>{item.text}</>}
                </li>
                {index !== infos.length - 1 && <Divider/>}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </CardBody>
  </Card>
)

export default Banner;
