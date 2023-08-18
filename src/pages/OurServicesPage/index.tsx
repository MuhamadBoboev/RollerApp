import BlockItems from "../../components/BlockItems"
import OurServices from "../../components/OurServices"
import { IBlockItems } from "../../models/IBlockItems"
import img_1 from './iblock_1.svg'
import img_2 from './iblock_2.svg'

const dateItemsBlocks: IBlockItems[] = [
	{
		image: img_1,
		name: 'Доставка',
		text: 'Осуществлять доставку груза в любой регион Таджикистана за рекордно короткий срок.',
	}, {
		image: img_2,
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