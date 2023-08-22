import { SubtitleBlock } from '../../../components/ui/SubtitleBlock'
import { Text } from '../../../components/ui/Text'
import { TitleSection } from '../../../components/ui/TitleSection'
import st from './table.module.scss'

const Table = () => {
	return (
		<div className={st.container}>
			<div className={st.title__block} >
				<Text children='Партнеры компании ROLLER предлагают пластиковые балконные двери, которые можно использовать в разных климатических поясах.' />
				<Text children='В ассортименте компании имеются дверные блоки из ПВХ-профиля:' />
			</div>
			<div className={st.wrapper} >
				<div className={st.body}>
					<div className={st.subtitle} >
						<SubtitleBlock children='UNOPEN' />
					</div>
					<div className={st.items} >
						<div className={st.item} >
							<p className={st.text}>Система отличается стабильностью размеров и геометрии. Толщина используемого стеклопакета
								от 4 до 32 мм. В системе используются:</p>
							<ul className={st.list}>
								<li className={st.text + ' ' + st.text__li}>металлические усилители;</li>
								<li className={st.text + ' ' + st.text__li}>пороги с терморазделением;</li>
								<li className={st.text + ' ' + st.text__li}>двойное уплотнение дверного блока.</li>
							</ul>
						</div>
						<div className={st.item} >
							<div className={st.item__body} >
								<p className={st.text}>5-камерный профиль из высококачественного пластика характеризуется хорошей шумоизоляцией и энергосбережением.</p>
							</div>
						</div>
						<div className={st.item} >
							<div className={st.item__body} >
								<p className={st.text}>6-камерная профильная система из устойчивого к различным климатическим влияниям пластика. Допускается установка стеклопакета толщиной от 24 до 52 мм. Профиль обеспечивает улучшенную шумозащиту и повышенную теплоизоляцию благодаря тройному уплотнению и порогам с терморазделением.</p>
							</div>
						</div>
					</div>
				</div>
				<div className={st.text_footer} >
					<p className={st.text_big} >
						Одна из важных характеристик ПВХ-профиля — сопротивление теплопередаче. Оно может варьироваться в диапазоне от 0,65 до 1,06 м² °С/Вт. Иными словами, у разных профилей теплоизолирующие свойства разные. При этом возможная толщина стеклопакета зависит от типа выбранного профиля и составляет:
					</p>
					<li className={st.text__li}>
						<p className={st.text_big}>
							4 — 32 мм (ECOPLAST)</p>
					</li>
					<li className={st.text__li}>
						<p className={st.text_big}>
							4 — 32 мм (ECOPLAST);</p>
					</li>
					<li className={st.text__li}>
						<p className={st.text_big}>
							24 — 52 мм (UNOPEN).</p>
					</li>
				</div>
			</div>
		</div>
	)
}
export default Table