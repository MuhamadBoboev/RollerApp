import { NavLink, Route, Routes } from 'react-router-dom'
import { TitleSection } from '../../../components/ui/TitleSection'
import PhotoGalleryItems from './PhotoGalleryItems'
import st from './photo_gallery_wrapper.module.scss'
import Choice from '../../mainPage/AdvantageChoice/Choice/index';
import { Text } from '../../../components/ui/Text';
import { IGalleryCategory } from '../../../models/IPhotoGallery';

interface Props {
	categories: IGalleryCategory[]
}
const PhotoGalleryWrapper = ({ categories }: Props) => {
	return (
		<>
			<div className={st.container} >
				<div className={st.title__block} >
					<TitleSection textAlign='center' children='Фотогалерея' />
					<div className={st.tab} >
						{categories.map((el) =>
							<NavLink
								to={`${el.id}`}
								className={({ isActive }) =>
									isActive ? st.link_active : " "
								}
							>
								<Text clName={st.tab__button} children={el.name} />
							</NavLink>)}
					</div>
				</div>
				<div className={st.items_wrapper}>
					<Routes>
						{categories.map((el) =>
							<Route path={`${el.id}`} element={<PhotoGalleryItems items={el.items} />} />
						)}
					</Routes>
				</div>
			</div>
		</>
	)
}
export default PhotoGalleryWrapper