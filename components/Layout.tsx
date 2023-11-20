import { Header } from '@/components'
import { ButtonHelp } from './Button';
import { Card, CardFooter } from '@nextui-org/react';

const Layout = ({ children, title }: { children: React.ReactNode; title?: string; }) => {
  const date = new Date();
  return (
    <>
      <div className='flex flex-col min-h-screen justify-between'>
        <div>
          <Header />
          <main className='relative container mx-auto flex flex-col gap-4 p-4 h-full'>
            {children}
            <ButtonHelp />
          </main>
        </div>
        <Card className='rounded-none bg-background w-full flex items-center'>
          <CardFooter className='rounded-none h-[64px] container mx-auto flex items-center justify-between px-8 m-0 text-primary'>
            <p>Copyright© {date.getFullYear()}</p>
            <p>Desenvolvido por @twobanks</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Layout
