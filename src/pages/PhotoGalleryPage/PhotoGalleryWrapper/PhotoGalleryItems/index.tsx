import st from './photo_gallery_items.module.scss'
interface Props {
	items: Items[]
}
interface Items {
	id: number
	image: string
}

const PhotoGalleryItems = ({ items }: Props) => {
	return (
		<>
			<ul className={st.items} >
				{items.map((el) =>
					<li key={el.id} className={st.item} >
						<img src={el.image} className={st.item__img} width={422} height={261} alt='fhotogalery'>
						</img>
					</li>
				)}
			</ul>
		</>
	)
}
export default PhotoGalleryItems