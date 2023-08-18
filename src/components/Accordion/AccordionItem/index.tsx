import clsx from 'clsx'
import st from './accordion_item.module.scss'
import { useState } from 'react';
import img from './accordion_arrow.svg'
import { IAccordion } from '../../../models/IAccordion';

interface Props {
	element: IAccordion
	index: number
}

const AccordionItem = ({ element, index }: Props) => {
	const [toggle, setToggle] = useState(false)
	// console.log(element.items?.length)
	// debugger
	const setToggleFc = () => {
		setToggle(!toggle)
		// alert(toggle)
	}
	return (<>
		<li
			key={element.name}
			className={clsx(
				st.items__bl,
				toggle ? st.show : st.no_show
			)} >
			<div className={st.items_body}>
				<div className={st.item_1}>{`${(index + 1).toString().padStart(2, `0`)}/`}</div>
				<div className={st.item_2}>
					<p>
						{element.name}
					</p>
				</div>
				<div className={st.item_3}
					onClick={() => setToggleFc()
					}
				>
					<img src={img} width={23} height={23} />
				</div>
			</div>
			<div className={st.content} >
				<p className={st.text}>
					{element.text}
				</p>
				<div className={clsx(
					st.items__grid,
					element.items?.length === 1 ? st.items__grid_1 : '',
					element.items?.length === 2 ? st.items__grid_2 : '',
					element.items?.length === 3 ? st.items__grid_3 : '',
					element.items?.length === 4 ? st.items__grid_4 : '',
				)} >
					{element.items?.map((el) =>
						<div className={st.items__wrapper}>
							<p className={st.subtitle}>
								{el.itemsName}
							</p>
							<ul className={st.items} >
								{el.items?.map((item) =>
									<li
										key={el.itemsName}
										className={st.item}>
										<p className={st.text} >
											{item.itemText}
										</p>
									</li>)}
							</ul>
						</div>
					)}
				</div>
			</div>
		</li>
	</>)
}
export default AccordionItem