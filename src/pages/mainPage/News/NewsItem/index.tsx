import { useState } from 'react';
import ComponentModalNew from '../../../../components/modalNew';
import st from './NewsItem.module.scss'
interface NewsInterface {
	img: string;
	data: string;
	title: string;
	text: string;
	link: string;
	date: {
		imageItem: string
		titleItem: string
		textItem: string
	}
}

interface Props {
	newsItem: NewsInterface
}

const NewsItem = ({ newsItem }: Props) => {
	const [modalActive, setModalActive] = useState(false)
	console.log(newsItem)
	return (
		<>
			<div className={st.news__wrapper} >
				<div className={st.news__img_block} >
					<div className={st.news__img_body}>
						<img src={newsItem.img} width={275} height={250} alt='news'></img>
					</div>
				</div>
				<div className={st.news__text_wrapper} >
					<div className={st.news__text_block} >
						<p className={st.news__data} >
							{newsItem.data}
						</p>
						<p className={st.news__title} >
							{newsItem.title}
						</p>
						<p className={'text ' + st.news__text} >
							{newsItem.text}
						</p>
					</div>
					<div className={'button_white ' + st.news__button} onClick={() => setModalActive(true)} >
						Перейти
					</div>
				</div>
			</div>
			<ComponentModalNew dataModal={newsItem.date} active={modalActive} setActive={setModalActive} />
		</>
	)
}


export default NewsItem