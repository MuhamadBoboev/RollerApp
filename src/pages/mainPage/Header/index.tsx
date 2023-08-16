import { useState } from 'react'
import st from './Header.module.scss'
import headerLogo from './header_logo.svg'
import lupa from './Lupa.svg'
import Navigation from './Navigation'

const Header = () => {
	const [isActive, setIsActive] = useState(false)
	// let handleClick = () => {
	// 	setIsActive (false)
	// }
	return <header className={'_container ' + st.header} >
		<div className={st.container}>
			<a href='#' className={st.header__link_logo} >
				<div className={st.header__block_logo}>
					<img src={headerLogo} className={st.header__logo} alt='логотип'></img>
				</div>
			</a>
			<div className={st.header__right}>
				<div className={st.nav_block}>
					<Navigation />
				</div>
				<div className={st.block_search} >
					<div className={st.bl_search} >
						<input type='text' className={`text ` + `${st.bl_search_text}`} placeholder='Поиск'></input>
						<div className={st.bl_search_svg} ><img src={lupa} ></img></div>
					</div>
				</div>
			</div>
		</div>
	</header>
}

export default Header
