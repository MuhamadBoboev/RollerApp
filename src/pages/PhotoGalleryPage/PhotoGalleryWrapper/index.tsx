import { TitleSection } from '../../../components/ui/TitleSection'
import PhotoGalleryItems from './PhotoGalleryItems'
import st from './photo_gallery_wrapper.module.scss'
import { Text } from '../../../components/ui/Text';
import { IGalleryCategory } from '../../../models/IPhotoGallery';
import { useState } from 'react';
import clsx from 'clsx';

interface Props {
	categories: IGalleryCategory[]
}
const PhotoGalleryWrapper = ({ categories }: Props) => {
	const [date, setDate] = useState<Props>({ categories })
	const [toggle, setToggle] = useState(categories[0].id)

	return (
		<>
			<div className={st.container} >
				<div className={st.title__block} >
					<TitleSection textAlign='center' children='Фотогалерея' />
					<div className={st.tab} >
						{categories.map((el) =>
							<button className={clsx(
								st.tab__link,
								el.id === toggle ? st.tab_active : st.tab_not
							)}
								onClick={() => setToggle(el.id)}
							>
								<Text clName={st.tab__button} children={el.name} />
							</button>
						)}
					</div>
				</div>
				<div className={st.items_wrapper}>
					{categories.map((el) =>
						<div className={clsx(
							el.id === toggle ? st.display_active : st.display_none
						)} >
							<PhotoGalleryItems items={el.items} />
						</div>
					)}

				</div>
			</div>
		</>
	)
}
export default PhotoGalleryWrapper