import { Text } from '../ui/Text';
import { TitleSection } from '../ui/TitleSection';
import st from './block_items.module.scss'
import foto1 from './truck_1.svg';
import foto2 from './truck_2.svg'
const BlockItems = () => {
	return (<>
		<div className={'_container ' + st.container} >
			<div className={st.wrapper} >
				<TitleSection textAlign='center' children='ДАННАЯ УСЛУГА ПОЗВОЛЯЕТ:' />
				<div className={st.items} >
					<div className={st.item} >
						<div className={st.item__body}>
							<div className={st.item__top}>
								<div className={st.item__img_bl} >
									<img src={foto1} width={32} height={30} />
								</div>
								<p className={st.title} >Доставка</p>
							</div>
							<Text children='Осуществлять доставку груза любой регион Таджикистана за рекордно короткий срок.' />
						</div>
					</div>
					<div className={st.item} >
						<div className={st.item__body} >
							<div className={st.item__top}>
								<div className={st.item__img_bl} >
									<img src={foto2} width={32} height={32}  ></img>
								</div>
								<p className={st.title} >Гарантия</p>
							</div>
							<Text children='НУРПЛАСТ гарантирует своим клиентам и партнерам бесперебойные поставки продукции, независимо от расстояния и воздействия сезонных факторов' />
						</div>
					</div>
				</div>
			</div>
			<div className={st.text_footer} >
				<p className='text'>
					Для получения дополнительной информации Вы можете связаться с отделом экспорта по электронной почте:&nbsp;
					<a href='href="mailto:Office@roller.tj"' className={st.text_footer__red}>Office@roller.tj</a>
				</p>
			</div>
		</div>
	</>)
}
export default BlockItems