import { Email, Instagram, WhatsApp } from '@/components/Icons'

export const socialMedia: {
  url: string;
  name: string;
  icon: (colorIcon?: string) => JSX.Element;
}[] = [
  {
    url: 'https://www.instagram.com/ftcarollima/',
    name: 'Instagram',
    icon: Instagram,
  },
  {
    url: 'https://wa.me/5534988883448?text=Olá, Carol. Vim através do seu site.',
    name: 'WhatsApp',
    icon: (colorIcon?: string) => WhatsApp({colorIcon})
  },
  {
    url: 'mailto:carolinelcosta2@gmail.com',
    name: 'Email',
    icon: Email
  },
]