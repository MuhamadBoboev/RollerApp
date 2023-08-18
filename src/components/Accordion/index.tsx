import { IAccordion } from '../../models/IAccordion'
import st from './accordion.module.scss'
import { useState } from 'react';
import AccordionItem from './AccordionItem'
import { Subtitle } from '../ui/Subtitle';
import { TitleSection } from '../ui/TitleSection';
interface Props {
	props: IAccordion[]
	title: string
}

const Accordion = ({ props, title }: Props) => {
	return (
		<div className={st.container}>
			<TitleSection textAlign='center' children={title} />
			<ul className={st.items__wrapper} >
				{props.map((elementItem, index) =>
					<AccordionItem element={elementItem} index={index} />
				)}
			</ul>
		</div>)
}
export default Accordion