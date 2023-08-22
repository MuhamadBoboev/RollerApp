import BlockItems from "../../components/BlockItems"
import OurServices from "../../components/OurServices"
import { IBlockItems } from "../../models/IBlockItems"

const dateItemsBlocks: IBlockItems[] = [
	{
		image: '/assets/image/iblock_1.svg',
		name: 'Доставка',
		text: 'Осуществлять доставку груза в любой регион Таджикистана за рекордно короткий срок.',
	}, {
		image: '/assets/image/iblock_2.svg',
		name: 'Гарантия',
		text: 'НУРПЛАСТ гарантирует своим клиентам и партнерам бесперебойные поставки продукции, независимо от расстояния и воздействия сезонных факторов',
	}
]
const OurServicesPage = () => {
	return (<>
		<OurServices />
		<BlockItems title='ДАННАЯ УСЛУГА ПОЗВОЛЯЕТ:' textBottom props={dateItemsBlocks} />
	</>)
}
export default OurServicesPage