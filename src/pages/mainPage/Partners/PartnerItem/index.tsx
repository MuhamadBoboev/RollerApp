import { useState } from 'react'
import st from './PartnerItem.module.scss'
import ComponentModal from '../modal'


interface Props {
	className?: string
	partnerItem: BrandsInterface
}
interface BrandsInterface {
	image: string
	title: string
	sistemy: string
	country: string
	standart: string
	imageMobile?: string
	date: BrandInterface[]
}
interface BrandInterface {
	image: string
	title: string
	text: string
}

const PartnerItem = ({ partnerItem, className }: Props) => {
	const [modalActive, setModalActive] = useState(false)
	return (<>
		<div className={`${st.partner__body} `} onClick={() => setModalActive(true)} >
			<p className={st.title}>{partnerItem.title}</p>
			<div className={st.block_text}>
				<p className={st.text}>{partnerItem.sistemy}</p>
				<p className={st.text}>Страна:<span>
					{partnerItem.country}</span>
				</p>
				<p className={st.text}>Стандарт:
					<span>{partnerItem.standart}</span>
				</p>
			</div>
			<article className={`${st.partner__bl_img} ${className || ''} `} >
				<div className={st.bl_img} >
					<img className={st.partners__img} src={partnerItem.image} />
				</div>
			</article>
		</div>
		<ComponentModal dataModal={partnerItem.date} active={modalActive} setActive={setModalActive} />
	</>)
}
export default PartnerItem