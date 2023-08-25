import { FC } from 'react'
import st from './products.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProductItem {
	id: number;
	title: string;
	link: string
	img: any
}
const arrayDate: ProductItem[] = [
	{
		id: 1,
		title: 'Профильные системы для окон',
		link: '/products/profile_systems_for_windows',
		img: '/assets/image/product1.webp',
	}, {
		id: 2,
		title: 'Профильные системы для дверей',
		link: '/products/profile_systems_for_doors',
		img: '/assets/image/product2.webp',
	}, {
		id: 3,
		title: 'Остекление балконов',
		link: '/products/balcony_glazing',
		img: '/assets/image/product3.webp',
	}, {
		id: 4,
		title: 'Фурнитуры',
		link: '/accessories',
		img: '/assets/image/product4.webp',
	}
]

const Products: FC = () => {
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
	return (<section className={st.products} >
		<div id='ourProduction' className={st.container} >
			<h2 className='text_h2' >Наша продукция</h2>
			<div className={st.wrapper} >
				<ul className={st.products_items}>
					{arrayDate.map((el, index) =>
						<motion.li
							className={st.product__item}
							initial="hidden"
							whileInView="animate"
							custom={index}
							variants={imgVariants}
						>
							<p className={'text_h3 ' + st.product_text}>
								{el.title}
							</p>
							<div className={st.product__body}>
								<div className={st.product__body_fon}>
									<img src={el.img} width={520} height={420} alt='product'></img>
								</div>
								<div className={st.product__block_button}>
									<Link to={el.link} className={'button_white ' + st.button} >Подробнее</Link>
								</div>
							</div>
						</motion.li>
					)}
				</ul>
			</div>
		</div>
	</section>)
}

export default Products