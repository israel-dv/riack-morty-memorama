import './CardsContainer.styles.scss'

type CardsContainerProps = {
  children?: React.ReactNode
}

export const CardsContainer = ({ children = null }: CardsContainerProps) => {
  return <div className="cards-container">{children}</div>
}
