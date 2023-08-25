import clsx from 'clsx';
import { Text } from '../ui/Text';
import { TitleSection } from '../ui/TitleSection';
import st from './block_items.module.scss'
import { motion } from 'framer-motion'

interface Props {
	title: string
	textBottom?: boolean
	paddingTop150?: boolean
	props: ItemProps[]
}
interface ItemProps {
	image: string
	name: string
	text: string
}

const BlockItems = ({ title, textBottom, paddingTop150, props }: Props) => {
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
		<div className={clsx(
			st.container,
			paddingTop150 ? st.padding_150 : ''
		)} >
			<div className={st.wrapper} >
				<TitleSection textAlign='center' children={title} />
				<div className={st.items} >
					{props.map((el, index) =>
						<motion.div
							initial="hidden"
							whileInView="animate"
							custom={index}
							variants={imgVariants}
							className={st.item} >
							<div className={st.item__body}>
								<div className={st.item__top}>
									<div className={st.item__img_bl} >
										<img src={el.image} width={32} height={32} />
									</div>
									<p className={st.title} >{el.name}</p>
								</div>
								<Text children={el.text} />
							</div>
						</motion.div>)}
				</div>
			</div>
			<div className={clsx(
				st.text_footer,
				textBottom ? st.text_footer__show : st.text_footer__none
			)} >
				<p className='text'>
					Для получения дополнительной информации Вы можете связаться с отделом экспорта по электронной почте:&nbsp;
					<a href='href="mailto:Office@roller.tj"' className={st.text_footer__red}>Office@roller.tj</a>
				</p>
			</div>
		</div>
	</>)
}
export default BlockItems