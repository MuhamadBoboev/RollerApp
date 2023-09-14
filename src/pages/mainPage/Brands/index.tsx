import st from './brands.module.scss'
import BrandItem from './BrandItem'
import { motion } from 'framer-motion'
import Wrapper from '../../../components/Wrapper'
import { BigTitleSection } from '../../../components/ui/BigTitleSection'
import Container from '../../../components/Container'

interface BrandsInterface {
	image: string
	imageMobile?: string
	date: BrandInterface[]
}
interface BrandInterface {
	image: string
	title: string
	text: string
}

const brandsDate: BrandsInterface[] = [
	{
		image: '/assets/image/logo_brand_1.webp',
		// imageMobile: '/assets/image/logo_1_mobile.webp',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	}, {
		image: '/assets/image/logo_2.webp',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	}, {
		image: '/assets/image/logo_3.webp',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	}, {
		image: '/assets/image/logo_4.webp',
		date: [
			{
				image: '/assets/image/certificate_1.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_2.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_3.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_4.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}, {
				image: '/assets/image/certificate_5.webp',
				title: 'Lorem ipsum',
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
			}
		]
	},
]

const Brands: React.FC = () => {
	return (
		<Wrapper className={st.brands}>
			<Container className={st.container} >
				<BigTitleSection >Наши бренды</BigTitleSection>
				<ul id='brands_id' className={st.brands__grid} >
					<li className={st.brand__item}>
						<div className={st.brand__body} >
							<div className={st.brand__block}>
								<img className={st.item} width={260} height={57} src='/assets/image/logo_brand_1.webp' alt='логотип бренда' ></img>
							</div>
							<p className={st.info} >PVC без содержания кадмия, с использованием свиновых или кальций - цинковых стабилизаторов</p>
							<div className={st.text_block} >
								<p className={st.text} >
									Количество камер:&ensp;
									<span>4</span>
								</p>
								<p className={st.text} >
									Системная глубина:&ensp;
									<span>600 мм</span>
								</p>
							</div>
						</div>
					</li>
					<li className={st.brand__item}>
						<div className={st.brand__body} >
							<div className={st.brand__block}>
								<img className={st.item} src='/assets/image/logo_2.webp' alt='логотип бренда' ></img>
							</div>
							<div className={st.text_block} >
								<p className={st.text} >
									Количество камер:&ensp;
									<span>5</span>
								</p>
								<p className={st.text} >
									Системная глубина:&ensp;
									<span>750 мм</span>
								</p>
							</div>
						</div>
					</li>
					<li className={st.brand__item}>
						<div className={st.brand__body} >
							<div className={st.brand__block}>
								<img className={st.item} src='/assets/image/logo_3.webp' alt='логотип бренда' ></img>
							</div>
							<div className={st.text_block} >
								<p className={st.text} >
									Количество камер:&ensp;
									<span>5</span>
								</p>
								<p className={st.text} >
									Системная глубина:&ensp;
									<span>750 мм</span>
								</p>
							</div>
						</div>
					</li>
					<li className={st.brand__item}>
						<div className={st.brand__body} >
							<div className={st.brand__block}>
								<img className={st.item} src='/assets/image/logo_4.webp' alt='логотип бренда' ></img>
							</div>
							<div className={st.text_block} >
								<p className={st.text} >
									Cистема уплотнений:&ensp;
									<span> 2-x контурная, уплотнения по притворам</span>
								</p>
								<p className={st.text} >
									Количество камер:&ensp;
									<span>5</span>
								</p>
								<p className={st.text} >
									Системная глубина:&ensp;
									<span>750 мм</span>
								</p>
							</div>
						</div>
					</li>
				</ul>
				<ul className={st.accessories} >
					<li className={st.accessories_item} >
						<p className={st.accessories_text} >Фурнтиры</p>
					</li>
					<li className={st.accessories_item} >
						<p className={st.accessories_text} >Фурнтиры</p>
					</li>
					<li className={st.accessories_item} >
						<p className={st.accessories_text} >Фурнтиры</p>
					</li>
					<li className={st.accessories_item} >
						<p className={st.accessories_text} >Фурнтиры</p>
					</li>
					<li className={st.accessories_item} >
						<p className={st.accessories_text} >Фурнтиры</p>
					</li>
					<li className={st.accessories_item} >
						<p className={st.accessories_text} >Фурнтиры</p>
					</li>
				</ul>
			</Container>
		</Wrapper>
	)
}
export default Brands


// {brandsDate.map((element, index) =>
// 	<motion.li
// 		viewport={{
// 			once: true
// 		}}
// 		initial="hidden"
// 		whileInView="animate"
// 		custom={index}
// 		variants={imgVariants}
// 		className={st.brand__wrapper + ' ' + st.brand__ + index + 1}
// 	>
// 		{/* <BrandItem branItem={element} index={index} /> */}
// 		<div
// 			// onClick={() => setModalActive(true)}
// 			className={st.brand__wrapper + ' ' + st.brand__ + index + 1}>
// 			<div className={st.brand__body} >
// 				<div className={st.brand__block}>
// 					<img className={st.item} src={image} alt='логотип бренда' ></img>
// 					{/* <img className={branItem.image ? st.brand__logo__mobile : st.brand__logo_none} src={branItem.imageMobile ? branItem.imageMobile : branItem.image} alt='логотип бренда' width={180} height={39} ></img> */}
// 					<img className={branItem.image ? st.brand__logo__mobile : st.brand__logo_none} src={branItem.imageMobile ? branItem.imageMobile : branItem.image} alt='логотип бренда' width={180} height={39} ></img>
// 				</div>
// 			</div>
// 			{/* <ComponentModal dataModal={branItem.date} active={modalActive} setActive={setModalActive} /> */}
// 		</div>
// 	</motion.li>
// )}