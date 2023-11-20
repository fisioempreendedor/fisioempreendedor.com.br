import { Layout } from '@/components'
import { Card, Divider, CardBody, Accordion, AccordionItem, Link, Image } from '@nextui-org/react'
import { data_about } from '@/public/data/about'
import { socialMedia } from '@/public/data/social'
import { ROLE } from '@/utils/constants'
import { NextSeo } from 'next-seo'

const AboutPage = () => (
  <>
    <NextSeo
      title={`Carol Lima | ${ROLE}`}
      description="Sou uma Fisioterapeuta e empresária que tem como propósito ajudar Fisioterapeutas a abrirem, gerenciarem e expandirem suas clínicas com mais eficiência, êxito e dinheiro no bolso."
      openGraph={{
        title: `Carol Lima | ${ROLE}`,
        description: "Sou uma Fisioterapeuta e empresária que tem como propósito ajudar Fisioterapeutas a abrirem, gerenciarem e expandirem suas clínicas com mais eficiência, êxito e dinheiro no bolso.",
        url: "https://www.fisioempreendedor.com.br/sobre",
        site_name: `Carol Lima - ${ROLE}`,
      }}
    />
    <Layout>
      <h1 className="text-4xl w-full font-bold text-secondary py-4">Sobre</h1>
      <Card className="p-4">
        <CardBody className='flex flex-col-reverse lg:flex-row gap-8' >
          <div className='flex flex-col w-full lg:w-4/5 gap-8'>
            <div>
              <div className='flex flex-col mb-8'>
                <h2 className="flex text-4xl font-bold text-primary ">Carol Lima</h2>
                <h3 className='flex text-base'>{ROLE}</h3>
              </div>
              <p>
                {data_about.about.text}
              </p>
            </div>
            <Divider/>
            <div className='flex flex-col gap-8'>
              <h2 className="text-3xl font-bold text-secondary">Experiências</h2>
              <ul className="flex flex-col pl-6">
                {data_about.experiences.map((item, index) => (
                  <div key={item.value}>
                    <li className='list-disc py-2 px-0'>{item.value}</li>
                    {index !== data_about.experiences.length - 1 && <Divider/>}
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <Image
              src={data_about.about.image}
              alt={data_about.about.title}
              className="shadow-sm w-full align-end hover:shadow-lg transition-shadow duration-200 rounded-lg"
              width={1300}
              height={630}
            />
            <Card className="p-2 bg-background">
              <CardBody className='flex flex-col gap-4'>
                <div className='flex flex-row gap-4 items-center'>
                  {socialMedia.map((social, index) => (
                    <Link key={`item-${social.name}-${index}`} href={social.url} title={social.name} target='_blank'>
                      {social.icon()}
                    </Link>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
      <Card className="w-full p-4">
        <CardBody>
          <div className='flex flex-col w-full gap-8'>
            <div className='flex flex-col gap-8'>
              <h2 className="text-3xl font-bold text-secondary">A Fisioempreendedor</h2>
              <div className='flex flex-col gap-8 md:flex-row'>
                {data_about.company.map(item => (
                  <Card key={item.title}>
                    <CardBody className='flex flex-col gap-4 p-6 bg-background'>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p>{item.text}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <h2 className="text-3xl font-bold text-secondary">Valores</h2>
              <Accordion variant="shadow">
                {data_about.values.map((item, index) => (
                  <AccordionItem key={index} aria-label={item.title} title={item.title}>
                    <p className='p-5'>{item.text}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card className="w-full p-4">
        <CardBody>
          <div className='flex flex-col w-full gap-8'>
            <div className='flex flex-col gap-8'>
              <h2 className="text-3xl font-bold text-secondary">Serviços e Eventos</h2>
            </div>
            <Accordion variant="shadow">
              {data_about.services.map((service, index) => (
                <AccordionItem key={`item-${service.title}-${index}`} aria-label={service.title} title={service.title}>
                  <p className='bg-background p-4 rounded-lg'>
                    {service.content}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CardBody>
      </Card>
    </Layout>
  </>
)
  
export default AboutPage