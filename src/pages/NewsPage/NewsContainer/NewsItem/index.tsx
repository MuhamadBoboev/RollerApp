import { INewsItems } from "../../../../models/INewsItems"
import st from './news_item.module.scss'
import { Text } from "../../../../components/ui/Text"
import ComponentModal from "./modal"
import { useState } from "react"
import ComponentModalNew from "./modalNew"

interface Props {
	items: INewsItems
}

const NewsItem = ({ items }: Props) => {
	const [modalActive, setModalActive] = useState(false)
	return (<>
		<li className={st.item}>
			<div className={st.img_block} >
				<img className={st.img} width={348} height={220} src={items.image} />
			</div>
			<div className={st.item__text_block} >
				<div className={st.item__body} >
					<div className={st.item__top} >
						<p className={st.item__subtitle}>
							{items.data}
						</p>
						<div className={st.item__bl_text} >
							<p className={st.item__title}>
								{items.title}
							</p>
							<Text children={items.text} />
						</div>
					</div>
					<div className={st.item__bottom} onClick={() => setModalActive(true)} >
						<div className={st.item__link} children='Больше' />
						<div className={st.item_link_img} >
							<img src={'/assets/image/arrow.svg'} width={20} />
						</div>
					</div>
				</div>
			</div>
			{/* <ComponentModal dataModal={items.ItemNewsDate} active={modalActive} setActive={setModalActive} /> */}
			<ComponentModalNew dataModal={items.ItemNewsDate} active={modalActive} setActive={setModalActive} />
		</li>
	</>
	)
}
export default NewsItem