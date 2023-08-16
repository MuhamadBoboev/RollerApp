import { Link } from "react-router-dom"
import { INewsItems } from "../../../../models/INewsItems"
import st from './news_item.module.scss'
import { Text } from "../../../../components/ui/Text"
import news_link_img from './go_news.svg'

interface Props {
	item: INewsItems
}
const NewsItem = ({ item }: Props) => {

	return (<>
		<li className={st.item}>
			<div className={st.img_block} >
				<img className={st.img} width={348} height={220} src={item.image} />
			</div>
			<div className={st.item__text_block} >
				<div className={st.item__body} >
					<div className={st.item__top} >
						<p className={st.item__subtitle}>
							{item.data}
						</p>
						<div className={st.item__bl_text} >
							<p className={st.item__title}>
								{item.title}
							</p>
							<Text children={item.text} />
						</div>
					</div>
					<div className={st.item__bottom} >
						<Link className={st.item__link} to={item.link} children='Больше' />
						<div className={st.item_link_img} >
							<img src={news_link_img} width={20} />
						</div>
					</div>
				</div>
			</div>
		</li>
	</>
	)
}
export default NewsItem