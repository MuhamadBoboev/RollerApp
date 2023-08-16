import { TitleSection } from '../../../components/ui/TitleSection'
import st from './photo_gallery.module.scss'
import img_1 from './img/img_1.jpg'
import img_2 from './img/img_2.jpg'
import img_3 from './img/img_3.jpg'
import arrow from './img/arrow.svg'
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
							<img src={arrow} width={24} ></img>
						</div>
					</Link>
				</div>
				<div className={st.items} >
					<div className={st.item} >
						<img src={img_1} width={569} height={350} ></img>
					</div>
					<div className={st.item} >
						<img src={img_2} width={275} height={165} ></img>
					</div>
					<div className={st.item} >
						<img src={img_3} width={275} height={165} ></img>
					</div>
				</div>
				<div className={st.wrapper__bottom}>
					<Link to='/photo_gallery' className={st.link_block__mobile} >
						<p className={st.link_text} >
							Посмотреть все
						</p>
						<div className={st.link_img} >
							<img src={arrow} width={24} ></img>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</>)
}
export default PhotoGallery