import st from './OurServices.module.scss'
import ourServiceImg from './ourService.jpg'

const OurServices = () => {
	return (
		<section className={'padding_top_150 ' + st.OurServices} >
			<div className={'_container ' + st.container}>
				<div className={st.ourServices__title}>
					<p className={st.text}>Наши услуги</p>
					<h2 className={'text_h2 '} >какие услуги мы предоставляем?</h2>
				</div>
				<div className={st.ourServices__wrapper}>
					<div className={st.ourServices__left} >
						<div className={st.ourServices__bl_img}>
							<img src={ourServiceImg} ></img>
						</div>
					</div>
					<div className={st.ourServices__bl_text}>
						<div className={st.ourServices__text}>
							<h3 className={'text_h3 '} >Логистика и экспорт</h3>
							<p className={'text '} >Автомобильный парк Roller Plast
								предоставляющий клиентам
								услуги по доставке груза.
							</p>
							<button className={'button ' + st.button} >Перейти</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OurServices;