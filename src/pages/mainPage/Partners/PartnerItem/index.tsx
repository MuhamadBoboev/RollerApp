import { useState } from 'react'
import st from './PartnerItem.module.scss'
import ComponentModal from '../modal'


interface Props {
	partnerItem: BrandsInterface
}
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

const PartnerItem = ({ partnerItem }: Props) => {
	const [modalActive, setModalActive] = useState(false)
	return (<>
		<div className={st.partner__body} onClick={() => setModalActive(true)} >
			<div className={st.partner__bl_img} >
				<img className={st.partners__img} src={partnerItem.image} ></img>
			</div>
		</div>
		<ComponentModal dataModal={partnerItem.date} active={modalActive} setActive={setModalActive} />
	</>)
}
export default PartnerItem