import Container from '../../../components/Container'
import Wrapper from '../../../components/Wrapper'
import { BigTitleSection } from '../../../components/ui/BigTitleSection'
import { TitleSection } from '../../../components/ui/TitleSection'
import st from './photo_gallery.module.scss'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'

const PhotoGallery = () => {
	const imgVariants = {
		hidden: {
			opacity: 0,
			x: 20,
			scale: 0.5
		},
		animate: (i: number) => ({
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				delay: (i + 1) * 0.1,
			}
		})
	}
	return (<>
		<Wrapper className={st.container} >
			<Container className={st.wrapper}>
				<div className={st.title_block} >
					{/* <TitleSection children='ФОТОГАЛЕРЕЯ' /> */}
					<BigTitleSection>ФОТОГАЛЕРЕЯ</BigTitleSection>
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
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.item} >
						<div className={st.bl_img} >
							<img src={'/assets/image/PhotoGallery_1.webp'} width={569} height={350} ></img>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.item} >
						<div className={st.bl_img} >
							<img src={'/assets/image/PhotoGallery_2.webp'} width={275} height={165} ></img>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.item} >
						<div className={st.bl_img} >
							<img src={'/assets/image/PhotoGallery_3.webp'} width={275} height={165} ></img>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="animate"
						variants={imgVariants}
						className={st.item} >
						<div className={st.bl_img} >
							<img src={'/assets/image/PhotoGallery_3.webp'} width={275} height={165} ></img>
						</div>
					</motion.div>
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
			</Container>
		</Wrapper>
	</>)
}
export default PhotoGallery