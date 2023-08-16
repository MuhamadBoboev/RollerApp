import { IGalleryCategory } from "../../models/IPhotoGallery"
import PhotoGalleryWrapper from "./PhotoGalleryWrapper"
import item_1 from './item_1.jpg'
const categoriesDate: IGalleryCategory[] = [
	{
		id: 1,
		name: 'Профили для окон',
		items: [
			{ id: 1, image: item_1 },
			{ id: 2, image: item_1 },
			{ id: 3, image: item_1 },
			{ id: 4, image: item_1 },
			{ id: 5, image: item_1 },
			{ id: 6, image: item_1 },
			{ id: 7, image: item_1 },
			{ id: 8, image: item_1 },
		]
	}, {
		id: 2,
		name: 'Профили для дверей',
		items: [
			{ id: 1, image: item_1 },
			{ id: 2, image: item_1 },
		]
	}, {
		id: 3,
		name: 'Фурнитуры',
		items: [
			{ id: 1, image: item_1 },
			{ id: 2, image: item_1 },
			{ id: 3, image: item_1 },
			{ id: 4, image: item_1 },
			{ id: 5, image: item_1 },
			{ id: 6, image: item_1 },
		]
	},
]
const PhotoGalleryPage = () => {
	return (<>
		<PhotoGalleryWrapper categories={categoriesDate} />
	</>)
}

export default PhotoGalleryPage