import { SubtitleBlock } from '../../../components/ui/SubtitleBlock'
import { SubtitleSmallRed } from '../../../components/ui/SubtitleSmallRed'
import { Text } from '../../../components/ui/Text'
import st from './description.module.scss'
const Description = () => {
	return (<div className={st.container}>
		<div className={st.wrapper} >
			<div className={st.body} >
				<div className={st.title__block}>
					<SubtitleSmallRed textAlign='center' children='Описание и применение' />
					<SubtitleBlock textAlign='center' children='Благодаря гладкой и ровной поверхности плиты вспененного ПВХ Ongrofoam/Plafoam идеально подходят для нанесения на них печати' />
				</div>
				<div className={st.block_text} >
					<div className={st.block__text__items} >
						<p className={st.title} >Основные характеристики:</p>
						<ul className={st.items} >
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='легкий и жесткий материал' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='хорошая химическая стойкость' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='подходит для наружного и внутреннего применения' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='отлично подходит для печати' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='устойчивость к УФ-излучению' />
								</p>
							</li>
							<li className={st.item} >
								<p className={st.item__text} >
									<Text children='легкость механической обработки' />
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