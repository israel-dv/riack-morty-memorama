import { Header } from 'components/Header'

import './Layout.styles.scss'

type LayoutProps = {
  children: React.ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
    </>
  )
}
