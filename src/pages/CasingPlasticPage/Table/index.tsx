import { SubtitleBlock } from '../../../components/ui/SubtitleBlock'
import { Text } from '../../../components/ui/Text'
import st from './table.module.scss'

const Table = () => {
	return (
		<div className={st.container}>
			<div className={st.title_block} >
				<SubtitleBlock textAlign='center' children='В зависимости от сложности и дизайна вашего изделия, вы можете подобрать вспененный ПВХ из трех категорий качества:' />
				<p className={st.title__block__p} >
					<SubtitleBlock textAlign='center' children='премиум, стандарт и эконом' />
				</p>
			</div>
			<div className={st.wrapper} >
				<table className={st.table} >
					<thead className={st.thead}>
						<tr>
							<th></th>
							<th><SubtitleBlock children='Премиум' /></th>
							<th><SubtitleBlock children='Стандарт' /></th>
							<th><SubtitleBlock children='Эконом' /></th>
						</tr>
					</thead>
					<tbody className={st.tbody}>
						<tr>
							<td><p>Размер листа, мм</p></td>
							<td><p>3050×2050 (белый)	3050х1560 или 3050х2050	(остальные цвета)</p></td>
							<td><p>3050х2050 (белый)</p></td>
							<td><p>3050х2050 (белый) 3050х1220 (белый)</p></td>
						</tr>
						<tr>
							<td><p>Диапазон толщин, мм</p></td>
							<td><p>1-19</p></td>
							<td><p>2-6</p></td>
							<td><p>2-5</p></td>
						</tr>
						<tr>
							<td><p>Плотность, г/см3</p></td>
							<td><p>0,6-0,7</p></td>
							<td><p>0,55-0,6</p></td>
							<td><p>0,45-0,5</p></td>
						</tr>
						<tr>
							<td><p>Тип поверхности</p></td>
							<td><p>матт/матт</p></td>
							<td><p>матт/матт</p></td>
							<td><p>матт/матт</p></td>
						</tr>
						<tr>
							<td><p>Мин. объем заказа</p></td>
							<td><p>1/3 листа
								(2050х1012 мм, белый)
								1/2 листа
								(2050х1523 мм, белый)
								1 целый лист</p></td>
							<td><p>1/3 листа
								(2050х1012 мм, белый)
								1/2 листа
								(2050х1523 мм, белый)
								1 целый лист</p></td>
							<td><p>1/3 листа
								(2050х1012 мм, белый)
								1/2 листа
								(2050х1523 мм, белый)
								1 целый лист</p></td>
						</tr>
					</tbody>

				</table>
				<p className={st.text_bottom} >
					<Text children='Защитная пленка на материале размещена с одной стороны' />
				</p>
			</div>
		</div>)
}
export default Table