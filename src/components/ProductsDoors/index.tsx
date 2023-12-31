import { FC, useState } from 'react'
import st from './products.module.scss'
import product1 from './img/product1.svg'
import product2 from './img/product2.svg'
import product3 from './img/product3.svg'
import product4 from './img/product4.svg'
import { Link } from 'react-router-dom'
// import Products from './Products';
import { motion } from 'framer-motion'

interface ProductItem {
	id: number;
	title: string;
	link: string
	img: any
}
let arrayDate: ProductItem[] = [
	{
		id: 1,
		title: 'Профильные системы для окон',
		link: '/products/profile_systems_for_windows',
		img: product1,
	}, {
		id: 2,
		title: 'Профильные системы для дверей',
		link: '/products/profile_systems_for_doors',
		img: product2,
	}, {
		id: 3,
		title: 'Остекление балконов',
		link: 'asd',
		img: product3,
	}, {
		id: 4,
		title: 'Фурнитуры',
		link: '/accessories',
		img: product4,
	}
]


const ProductsDoors: FC = () => {
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
	return (<section className={'padding_top_150 ' + st.products} >
		<div id='ourProduction' className={'_container ' + st.container} >
			<h2 className='text_h2' >Наша продукция</h2>
			<div className={st.container} >
				<ul className={st.products_items}>
					{arrayDate.map((el) =>
						<motion.li
							initial="hidden"
							whileInView="animate"
							variants={imgVariants}
							className={st.product__item} >
							<p className={'text_h3 ' + st.product_text}>
								{el.title}
								{/* text_h3 */}
							</p>
							<div className={st.product__body}>
								<div className={st.product__body_fon}>
									<img src={el.img} ></img>
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

export default ProductsDoors