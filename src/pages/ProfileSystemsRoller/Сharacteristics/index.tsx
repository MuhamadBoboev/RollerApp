import { Subtitle } from '../../../components/ui/Subtitle';
import { SubtitleSmallRed } from '../../../components/ui/SubtitleSmallRed';
import { TitleSection } from '../../../components/ui/TitleSection';
import st from './characteristics.module.scss';
import { IСharacteristicsCategories } from '../../../models/IСharacteristicsCategories'
import { useState } from 'react';
import СharacteristicsTable from './СharacteristicsTable'
import clsx from 'clsx';

interface Props {
	props: IСharacteristicsCategories[]
}
const Сharacteristics = ({ props }: Props) => {
	const [toggle, setToggle] = useState(props[0].id)
	let setToggleFn = (el: any) => {
		setToggle(el);
	}

	return <>
		<div className={st.container} >
			<div className={st.tabs} >
				{props.map((el) =>
					<div className={
						clsx(
							st.tabs__item,
							el.id === toggle ? st.tab_active : st.tab_not
						)}
						onClick={() => setToggleFn(el.id)}
					>
						<img src={el.image} width={221} height={55} />
					</div>
				)}
			</div>
			<div className={st.item__wrapper} >
				{props.map((el) =>
					<div className={st.items} >
						<div className={clsx(
							st.item__title_block,
							el.id === toggle ? st.display_show : st.display_none
						)} >
							<SubtitleSmallRed textAlign='center' children={el.name} />
							<TitleSection textAlign='center' children='Характеристики — ' />
						</div>

						<div className={clsx(
							st.items__body,
							el.id === toggle ? st.display_show : st.display_none
						)} >
							<СharacteristicsTable items={el.items} />
						</div>
					</div>
				)}
			</div>
		</div>
	</>
}
export default Сharacteristics
