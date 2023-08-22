import { SubtitleBlock } from '../../../components/ui/SubtitleBlock'
import { SubtitleSmallRed } from '../../../components/ui/SubtitleSmallRed'
import { Text } from '../../../components/ui/Text'
import { TitleSection } from '../../../components/ui/TitleSection'
import st from './description.module.scss'
const Description = () => {
	return (<div className={st.container}>
		<div className={st.wrapper} >
			<div className={st.title__block}>
				<SubtitleSmallRed textAlign='center' children='Подоконники ПВХ' />
				<TitleSection textAlign='center' children='технические характеристики, основные преимущества' />
			</div>
			<div className={st.body} >
				<div className={st.title__block}>
					<SubtitleBlock textAlign='center' children='Преимущества подоконников ПВХ обусловлены их техническими характеристиками:' />
				</div>
				<div className={st.block_text} >
					<div className={st.block__text__items} >
						{/* <p className={st.title} >Основные характеристики:</p> */}
						<ul className={st.items} >
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Ударная вязкость при низких температурах' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Устойчивость к разрушениям' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Теплоизоляционные свойства выше, чем у подоконников из натурального камня или дерева — позволяют сохранять тепло в холодный период' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Прочность конструкции благодаря наличию ребер жесткости' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Стойкость к воздействиям света, влаги не выгорают и не вздуваются' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Изделия не подвергаются усадке' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Низкая величина коэффициента теплового расширения при высоких температурах' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Низкая степень механического износа — пластиковые подоконники трудно поцарапать или деформировать' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Лёгкость монтажа' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Устойчивость к тепловым нагрузкам' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='Широкий выбор типовых размеров — благодаря этому можно подобрать как  широкий подоконник в домах с кирпичными стенами (500-600 мм), так и для панельных домов (250-300 мм)' />
								</p>
							</li>
						</ul>
					</div>
					<p className={st.block__text__footer}>
						<Text children='В зависимости от сложности и дизайна вашего изделия, вы можете подобрать вспененный ПВХ из трех категорий качества: премиум, стандарт и эконом.' />
					</p>
				</div>
			</div>
		</div>
	</div>)

}
export default Description