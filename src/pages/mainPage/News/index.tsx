import st from './news.module.scss'

import { Link } from 'react-router-dom';

interface NewsInterface {
	img: string;
	data: string;
	title: string;
	text: string;
	link: string;
}

const newsDate: NewsInterface[] = [
	{
		img: '/assets/image//newsImg_1.webp',
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit',
		link: 'News',
	}, {
		img: '/assets/image//newsImg_2.webp',
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit',
		link: 'News',
	}, {
		img: '/assets/image//newsImg_3.webp',
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit',
		link: 'News',
	}
]

const News = () => {
	return (<section className={'padding_top_150 ' + st.news} >
		<div className={'_container ' + st.container} >
			<div className={st.news__header}>
				<h2 className={'text_h2 ' + st.news_header_title} >
					Последние новости
				</h2>
				<div className={st.news__bl_header_link} >
					<Link to='/news' className={st.news__header_link} >Все новости
					</Link>
				</div>
			</div>
			<ul className={st.news__items}>
				{newsDate.map((el) =>
					<li className={st.news__wrapper} >
						<div className={st.news__img_block} >
							<div className={st.news__img_body}>
								<img src={el.img} width={275} height={250} alt='news'></img>
							</div>
						</div>
						<div className={st.news__text_wrapper} >
							<div className={st.news__text_block} >
								<p className={st.news__data} >
									{el.data}
								</p>
								<p className={st.news__title} >
									{el.title}
								</p>
								<p className={'text ' + st.news__text} >
									{el.text}
								</p>
							</div>
							<Link to={el.link} className={'button_white ' + st.news__button} >
								Перейти
							</Link>
						</div>
					</li>
				)}
			</ul>
		</div>
	</section>)
}

export default News