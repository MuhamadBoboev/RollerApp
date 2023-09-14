import { FC, useState } from 'react'
import headerLogo from './header_logo.svg'
import lupa from './Lupa.svg'
import st from './headerContainer.module.scss'
import { headerDate } from './headerDate'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const HeaderContainer: FC = () => {
	const [menuActive, setMenuActive] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()
	return (
		<div className={st.header} >
			<div className={'_container ' + st.container}>
				<div className={st.menu__wrapper}>
					<Link to='/' className={st.header__link_logo} >
						<div className={st.header__block_logo}>
							<img
								src={headerLogo}
								className={st.header__logo}
								alt='логотип'
								width={220}
								height={48}></img>
						</div>
					</Link>
					<nav className={st.nav}>
						<div className={st.burger_btn} onClick={() => setMenuActive(!menuActive)} >
							<span></span>
						</div>
					</nav>
					<div className={menuActive ? st.menu + st.active : st.menu}>
						<div className={st.blur} onClick={() => setMenuActive(false)}></div>
						<div className={st.menu__content} >
							<div className={st.menu__header}>
								<ul className={st.menu__list}>
									{headerDate.map((el) =>
										<li className={st.menu__link} >
											<NavLink
												className={({ isActive, isPending }) =>
													isActive ? st.link_active : " "
												}
												to={el.link}
											>{el.title}
											</NavLink>
										</li>
									)}
								</ul>
							</div>
						</div>
					</div>
					{/* <div className={st.block_search} >
						<div className={st.bl_search} >
							<input type='text' className={`text ` + `${st.bl_search_text}`} placeholder='Поиск'></input>
							<div className={st.bl_search_svg} >
								<img src={lupa}
									className={st.lupa_img}>
								</img>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>)
}
export default HeaderContainer