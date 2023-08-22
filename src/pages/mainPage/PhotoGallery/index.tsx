import { TitleSection } from '../../../components/ui/TitleSection'
import st from './photo_gallery.module.scss'

import { Link } from 'react-router-dom'

const PhotoGallery = () => {
	return (<>
		<div className={'_container ' + st.container} >
			<div className={st.wrapper}>
				<div className={st.title_block} >
					<TitleSection children='ФОТОГАЛЕРЕЯ' />
					<Link to='/photo_gallery' className={st.link_block} >
						<p className={st.link_text} >
							Посмотреть все
						</p>
						<div className={st.link_img} >
							<img src={'/assets/image/arrow.svg'} width={24} ></img>
						</div>
					</Link>
				</div>
				<div className={st.items} >
					<div className={st.item} >
						<img src={'/assets/image/PhotoGallery_1.webp'} width={569} height={350} ></img>
					</div>
					<div className={st.item} >
						<img src={'/assets/image/PhotoGallery_2.webp'} width={275} height={165} ></img>
					</div>
					<div className={st.item} >
						<img src={'/assets/image/PhotoGallery_3.webp'} width={275} height={165} ></img>
					</div>
				</div>
				<div className={st.wrapper__bottom}>
					<Link to='/photo_gallery' className={st.link_block__mobile} >
						<p className={st.link_text} >
							Посмотреть все
						</p>
						<div className={st.link_img} >
							<img src={'/assets/image/arrow.svg'} width={24} ></img>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</>)
}
export default PhotoGallery