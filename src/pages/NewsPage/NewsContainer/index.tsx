import { TitleSection } from '../../../components/ui/TitleSection'
import { INewsItems } from '../../../models/INewsItems'
import NewsItem from './NewsItem'
import st from './news_container.module.scss'
import { motion } from 'framer-motion'

interface Props {
	items: INewsItems[]
}

const NewsContainer = ({ items }: Props) => {
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
	return (
		<>
			<div className={'_container ' + st.container} >
				<TitleSection children='Последние новости' textAlign='center' />
				<ul className={st.news__items}>
					{items.map((el, index) =>
						<motion.div
							initial="hidden"
							whileInView="animate"
							custom={index}
							variants={imgVariants}
						>
							<NewsItem items={el} />
						</motion.div>
					)}
				</ul>
			</div>
		</>
	)
}
export default NewsContainer