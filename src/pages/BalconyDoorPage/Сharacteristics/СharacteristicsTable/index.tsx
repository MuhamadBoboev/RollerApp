import st from './characteristics_table.module.scss'
interface Props {
	items: Items[]
}
interface Items {
	id: number
	text: string
	character: string | number

}

const СharacteristicsTable = ({ items }: Props) => {
	return (
		<>
			<div className={st.items__wrapper} >
				<div className={st.items__bl} >
					{items.map((el, index) =>
						<ul className={st.items_body}>
							<li className={st.item_1}>{`${(index + 1).toString().padStart(2, '0')}/`}</li>
							<li className={st.item_2} ><p>
								{el.text}
							</p></li>
							<li className={st.item_3}>{el.character}</li>
						</ul>
					)}
				</div>
			</div>
		</>
	)
}


export default СharacteristicsTable