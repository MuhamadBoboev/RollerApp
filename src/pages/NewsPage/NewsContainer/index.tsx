import { TitleSection } from '../../../components/ui/TitleSection'
import { INewsItems } from '../../../models/INewsItems'
import NewsItem from './NewsItem'
import st from './news_container.module.scss'

interface Props {
	items: INewsItems[]
}

const NewsContainer = ({ items }: Props) => {
	return (
		<>
			<div className={'_container ' + st.container} >
				<TitleSection children='Последние новости' textAlign='center' />
				<ul className={st.news__items}>
					{items.map((el) =>
						<NewsItem items={el} />
					)}
				</ul>
			</div>
		</>
	)
}
export default NewsContainer