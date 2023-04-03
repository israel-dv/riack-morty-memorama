import { APP_LOGO } from 'utils/constants/sourceFiles'
import { PAGE_TITLE } from 'utils/constants/titles'

import './Header.styles.scss'

export const Header = () => {
  return (
    <header className="header">
      <img src={APP_LOGO} alt="logo-memorama" className="logo" />
      <div className="title-game">
        <span>{PAGE_TITLE}</span>
      </div>
    </header>
  )
}
