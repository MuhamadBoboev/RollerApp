import st from './bunner.module.scss'
// import bannerFon from './banner.jpg'
const Banner = () => {
	return <section className={st.banner} >
		<div className={st.banner__fon} >
			<div className={'_container ' + st.container} >
				<h1 className={'text_h1 ' + st.title}>Roller</h1>
				<p className={'text ' + st.texting} >
					Лидер в области разработки и производства
					оконных и дверных систем из высококачественного пластика
				</p>
				{/* <button className={'button ' + st.button} >Бесплатный замер
				</button> */}
			</div>
		</div>
	</section>
}

export default Banner