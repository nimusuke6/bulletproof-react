import { Head } from '@/components/Head'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div>{children}</div>
    </>
  )
}
