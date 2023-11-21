import { Header } from '@/components'
import { ButtonHelp } from './Button';
import { Card, CardFooter } from '@nextui-org/react';
import { NAME } from '@/utils/constants';

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
          <CardFooter className='rounded-none h-[64px] container mx-auto flex items-center justify-center px-8 m-0 text-primary'>
            <div><strong className='text-secondary'>{NAME}</strong> © {date.getFullYear()}</div>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Layout
