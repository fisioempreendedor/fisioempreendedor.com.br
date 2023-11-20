import { Link } from "@nextui-org/react";
import { WhatsApp } from "../Icons"

const ButtonHelp = () => (
  <Link href="https://wa.me/5534988883448?text=Olá, Carol. Vim através do seu site." aria-label="Link para o whatsapp" className="fixed w-fit bottom-4 right-4 bg-[#075e54] p-2 rounded-full cursor-pointer z-50" target="_blank">
    <WhatsApp colorIcon="#FFFFFF" />
  </Link>
)

export default ButtonHelp