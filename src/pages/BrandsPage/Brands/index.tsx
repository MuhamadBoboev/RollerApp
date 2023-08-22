import st from './brands.module.scss'

import BrandItem from './BrandItem'
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
		image: '/assets/image/logo_1.webp',
		imageMobile: '/assets/image/logo_1_mobile.webp',
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
		<section id='brands_id' className={'padding_top_150 ' + st.brands}>
			<div className={st.container} >
				<h2 className='text_h2' >Наши бренды</h2>
				<ul className={st.brands__grid} >
					{brandsDate.map((element, index) =>
						<li className={st.brand__wrapper + ' ' + st.brand__ + index + 1} >
							<BrandItem branItem={element} index={index} />
						</li>
					)}
				</ul>
			</div>
		</section>
	)
}
export default Brands

