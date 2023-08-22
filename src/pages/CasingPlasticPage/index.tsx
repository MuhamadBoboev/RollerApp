import { IBanner } from "../../models/IBanner"
import Lamination from "../../components/Lamination"
import Banner from "../../components/Banner"
import BlockInfoFittings from "../../components/BlockInfoFittings"
import { IBlockInfoFittings } from "../../models/IBlockInfoFittings"
import Description from "./Description"
import Table from "./Table"


const bannerDate: IBanner = {
	title: 'Обшивочный пластик',
	text: 'ПВХ вспененный — листовой синтетический материал из жёсткой пены ПВХ, имеющий регулярную мелкоячеистую структуру и матовую поверхность',
	image: '/assets/image/CasingPlasticPage_banner.webp',
	link: 'Бесплатный замер'
}

const dateBlockInfo: IBlockInfoFittings = {
	image: '/assets/image/img_321.webp',
	title: 'ОБШИВОЧНЫЙ ПЛАСТИК',
	text: 'Данный материал очень устойчив к различным кислотам, солям и дезинфицирующим средствам, а также к погодным условиям. Листы ПВХ вспененного не содержат в себе тяжелых металлов, не поддаются коррозии, не гигроскопичны. Достаточная жесткость и прочность на излом, относительная низкая плотность, малый вес и легкость в обработке делают листы ПВХ вспененного идеальным материалом для любых наружных и внутренних работ.',
	linkButton: 'string'
}


const CasingPlasticPage = () => {
	return (<>
		<Banner banner={bannerDate} />
		<BlockInfoFittings props={dateBlockInfo} buttonShow={true} />
		<Lamination />
		<Description />
		<Table />
	</>)
}
export default CasingPlasticPage