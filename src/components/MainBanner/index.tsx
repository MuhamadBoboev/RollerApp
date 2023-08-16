import { BannerProps } from './BannerProps'
import st from './main-banner.module.scss'
import clsx from 'clsx';
const MainBanner = ({children, title, text}:BannerProps) => {
	return(<>
	<section className={st.banner} >
		<div className={st.banner__wrapper} >
			<div className={'_container ' + st.container} >
				<h1 className={'text_h1 ' + st.title}>{title}</h1>
				<p className={'text ' + st.texting } >
					{text}
				</p>
				<button className={'button ' + st.button} >Бесплатный замер
				</button>
			</div>
			<div className={st.banner__fon} >
				<img src='' width={1440} height={520} alt='banner' ></img>
			</div>
		</div>
	</section>
		{/* <h1>{title}</h1>
		<p className={st.text} >{text}</p> */}
		{/* <h1>Компания Roller</h1>
		<p className={st.text} >один из национальных лидеров в области разработки 
			и производства оконных и дверных систем из высококачественного пластика
		</p> */}
		{/* {children} */}
		
	</>)
}

export default MainBanner