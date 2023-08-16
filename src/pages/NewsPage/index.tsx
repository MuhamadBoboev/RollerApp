import { INewsItems } from "../../models/INewsItems"
import NewsContainer from "./NewsContainer"
import news_item_image from './news__item_1.jpg'

const newDateItems: INewsItems[] = [
	{
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
		link: 'asdsad',
		image: news_item_image
	}, {
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
		link: 'asdsad',
		image: news_item_image
	}, {
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
		link: 'asdsad',
		image: news_item_image
	}, {
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
		link: 'asdsad',
		image: news_item_image
	}, {
		data: '17 Сентябрь, 2019',
		title: 'Окна ROLLER в экстримальных условиях',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
		link: 'asdsad',
		image: news_item_image
	},

]
// import st from './'
const NewsPage = () => {
	return (
		<>
			<NewsContainer items={newDateItems} />
		</>
	)
}
export default NewsPage