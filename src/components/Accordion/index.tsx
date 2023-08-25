import { IAccordion } from '../../models/IAccordion'
import st from './accordion.module.scss'
import { useState } from 'react';
import AccordionItem from './AccordionItem'
import { Subtitle } from '../ui/Subtitle';
import { TitleSection } from '../ui/TitleSection';
import { motion } from 'framer-motion'

interface Props {
	props: IAccordion[]
	title: string
}

const Accordion = ({ props, title }: Props) => {
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
	return (
		<div className={st.container}>
			<TitleSection textAlign='center' children={title} />
			<ul className={st.items__wrapper} >
				{props.map((elementItem, index) =>
					<motion.div
						initial="hidden"
						whileInView="animate"
						custom={index}
						variants={imgVariants}
					>
						<AccordionItem element={elementItem} index={index} />
					</motion.div>

				)}
			</ul>
		</div>)
}
export default Accordion