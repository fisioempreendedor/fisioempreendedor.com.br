import { Link } from "@nextui-org/react";

const typeButtons = {
  ['default']: {
    items: 'items-end',
    width: 'w-fit',
  },
  ['full']: {
    items: 'items-start',
    width: 'w-full'
  }
}
const ButtonRegistry = ({ url = "/", type = 'default' }: { url: string; type?: string; } ) => {
  const values = type === 'default' ? typeButtons.default : typeButtons.full; 
  return (
    <div className={`flex flex-col ${values.items} gap-2`}>
      <div className={`flex bg-secondary justify-center ${values.width} px-6 py-2 rounded-xl text-background font-bold cursor-pointer`}>
        <Link href={url} className="flex flex-col w-full" target="_blank" aria-label="Faça sua inscrição">
          FAÇA SUA INSCRIÇÃO
        </Link>
      </div>
      <p className="text-xs">
        * Até 30 de novembro
      </p>
    </div>
  )
}

export default ButtonRegistry