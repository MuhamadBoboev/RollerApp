import st from './partners.module.scss'
import partnerLogo_1 from './img/partnerLogo_1.svg'
import partnerLogo_2 from './img/partnerLogo_2.svg'
import partnerLogo_3 from './img/partnerLogo_3.svg'
import partnerLogo_4 from './img/partnerLogo_4.svg'
import partnerLogo_5 from './img/partnerLogo_5.svg'
import { useState } from 'react'
import ComponentModal from './modal'

interface PartnersInterface {
	img: string
}


const partnersDate:PartnersInterface[] = [
	{img: partnerLogo_1},
	{img: partnerLogo_2},
	{img: partnerLogo_3},
	{img: partnerLogo_4},
	{img: partnerLogo_5},
]

const Partners = () => {
	const [active, setActive] = useState(false)

	return(
	<section className={'padding_top_150 ' + st.partners}>
		<div className={'_container ' + st.container} >
			<div className={st.partners__title_body} >
				<h2 className={'text_h2 ' + st.partners__title} >наши партнёры</h2>
				<div className={st.partners__text_block} >
					<p className={st.partners__text} >
						Мы предоставляем высокое качество работ и точные 
						сроки исполнения заказа. Используем в производстве 
						проверенные немецкие технологии и оборудование. 
						Высококачественное сырье завозим из Германии, Турции,
						России, Казахстан и Китая
					</p>
				</div>
			</div>
			{/* <ComponentModal/> */}
			<ul className={st.partners__items} >
				{partnersDate.map((el)=>
					<li  
							className={st.partner__item}
							>
						<div className={st.partner__body} >
							<div className={st.partner__bl_img} >
								<img className={st.partners__img} src={el.img} ></img>
							</div>
						</div>
						{/* <ComponentModal/> */}
					</li>
				)}
			</ul>
		</div>
	</section>)
}

export default Partners