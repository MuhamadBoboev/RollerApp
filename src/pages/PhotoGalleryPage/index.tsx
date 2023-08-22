import { IGalleryCategory } from "../../models/IPhotoGallery"
import PhotoGalleryWrapper from "./PhotoGalleryWrapper"
import item_1 from './item_1.jpg'
const categoriesDate: IGalleryCategory[] = [
	{
		id: 1,
		name: 'Профили для окон',
		items: [
			{ id: 1, image: '/assets/image/item_1.webp' },
			{ id: 2, image: '/assets/image/item_1.webp' },
			{ id: 3, image: '/assets/image/item_1.webp' },
			{ id: 4, image: '/assets/image/item_1.webp' },
			{ id: 5, image: '/assets/image/item_1.webp' },
			{ id: 6, image: '/assets/image/item_1.webp' },
			{ id: 7, image: '/assets/image/item_1.webp' },
			{ id: 8, image: '/assets/image/item_1.webp' },
		]
	}, {
		id: 2,
		name: 'Профили для дверей',
		items: [
			{ id: 1, image: '/assets/image/item_1.webp' },
			{ id: 2, image: '/assets/image/item_1.webp' },
		]
	}, {
		id: 3,
		name: 'Фурнитуры',
		items: [
			{ id: 1, image: '/assets/image/item_1.webp' },
			{ id: 2, image: '/assets/image/item_1.webp' },
			{ id: 3, image: '/assets/image/item_1.webp' },
			{ id: 4, image: '/assets/image/item_1.webp' },
			{ id: 5, image: '/assets/image/item_1.webp' },
			{ id: 6, image: '/assets/image/item_1.webp' },
		]
	},
]
const PhotoGalleryPage = () => {
	return (<>
		<PhotoGalleryWrapper categories={categoriesDate} />
	</>)
}

export default PhotoGalleryPage