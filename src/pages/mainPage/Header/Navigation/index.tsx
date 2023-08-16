import { Link } from 'react-router-dom';
import st from './navigation.module.scss'
import { useState } from 'react';

interface menuInterface {
	href: string;
	text: string;
}
const menuList: menuInterface[]= [
	{href: '#asdasd', text: 'Главная'}, 
	{href: '#asdasd', text: 'Бренды'},
	{href: '#asdasd', text: 'Продукция'},
	{href: '#asdasd', text: 'Услуги'},
	{href: '#asdasd', text: 'О&nbsp;компании'},
	{href: '#asdasd', text: 'Новости'}, 
]

const Navigation = () => {

	const [menuActive, setMenuActive] = useState(true)
	
	console.log(menuActive)
	return (
		<div className={st.block_menu} >
			<div className={ menuActive ? st.menu_wrapper : st.menu_wrapper+st.active} >
				<div className={st.blur} ></div>
				<nav className={st.header__nav}>
					<ul className={st.header__nav_list} >
						{menuList.map((el)=>
							<li key={el.text} className='header__nav_link'>
								<a href={el.href} className={'text ' + st.header__link}>{el.text}
								
								</a>
							</li>
						)}
						<li className='header__nav_link'><a href='#' className={'text ' + st.header__link}>Главная</a></li>
					</ul>
				</nav>
			</div>
			<div className={st.btn__block} >
					<button 
						className={st.menu_button}
						onClick={
							()=> {
								setMenuActive(!menuActive)
							}
						}
					><span className={st.burger__menu} >-</span></button>
			</div>
		</div>
	)
}


export default Navigation