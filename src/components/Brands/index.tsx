import st from './brands.module.scss'
import { Link } from 'react-router-dom'
import logo_1 from './img/logo_1.svg'
import logo_2 from './img/logo_2.svg'
import logo_3 from './img/logo_3.svg'
import logo_4 from './img/logo_4.svg'
import logo_1_mobile from './img/logo_1_mobile.svg'
import { FC, useState } from 'react'
import ComponentModal from './modalBrands'
import { motion } from 'framer-motion'

interface BrandsInterface { img: any }

const brandsDate: BrandsInterface[] = [
	{
		img: logo_1

	},
	{
		img: logo_2
	}, {
		img: logo_3
	}, {
		img: logo_4
	}
]

const Brands: React.FC = () => {
	const [active, setActive] = useState(false)
	const imgVariants = {
		hidden: {
			opacity: 0,
			x: 20,
			scale: 0.5
		},
		animate: (i: number) => ({
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				delay: (i + 1) * 0.1,
			}
		})
	}

	return (
		<section id='brands_id' className={'padding_top_150 ' + st.brands}>
			<div className={'_container ' + st.container} >
				<h2 className='text_h2' >Наши бренды</h2>
				<ul className={st.brands__grid} >
					{brandsDate.map((element, index) =>
						<motion.li
							initial="hidden"
							whileInView="animate"
							custom={index}
							variants={imgVariants}
							key={element.img}
							className={st.brand__wrapper + ' ' + st.brand__ + index + 1}>
							<div className={st.brand__body} >
								<div className={st.brand__block}>
									<img className={st.brand__logo} src={element.img} alt='логотип бренда' ></img>
								</div>
							</div>
							<ComponentModal isActive={active} setActive={setActive} />
						</motion.li>
					)}
				</ul>
			</div>
		</section>
	)
}
export default Brands

