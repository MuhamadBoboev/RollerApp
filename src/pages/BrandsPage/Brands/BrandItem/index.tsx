import { useState } from 'react'
import st from './BrandItem.module.scss'
import ComponentModal from '../modal'

interface Props {
	branItem: BrandsInterface
	index: number
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

const BrandItem = ({ branItem, index }: Props) => {
	const [modalActive, setModalActive] = useState(false)
	return (<>
		<div key={branItem.image} onClick={() => setModalActive(true)}
			className={st.brand__wrapper + ' ' + st.brand__ + index + 1}>
			<div className={st.brand__body} >
				<div className={st.brand__block}>
					<img className={branItem.image ? st.brand__logo_none : st.brand__logo} src={branItem.image} alt='логотип бренда' ></img>
					<img className={branItem.image ? st.brand__logo__mobile : st.brand__logo_none} src={branItem.imageMobile ? branItem.imageMobile : branItem.image} alt='логотип бренда' width={180} height={39} ></img>
				</div>
			</div>
			<ComponentModal dataModal={branItem.date} active={modalActive} setActive={setModalActive} />
		</div>
	</>)
}
export default BrandItem