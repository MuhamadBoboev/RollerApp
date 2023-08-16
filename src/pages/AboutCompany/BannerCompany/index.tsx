import st from './bannerCompany.module.scss'

interface Props {
	banner: bannerDate
}
interface bannerDate {
	title: string
	text: string
	image?: string
}

const BannerCompany = ({ banner }: Props) => {
	return (<>
		<section className={st.banner} >
			<div className={st.banner__wrapper} >
				<div className={'_container ' + st.container} >
					<div className={st.banner__body} >
						<h1 className={'text_h1 ' + st.title}>{banner.title}</h1>
						<p className={' ' + st.texting} >
							{banner.text}
						</p>
					</div>
				</div>
				<div className={st.banner__fon} >
					<img className={st.banner__img} src={banner.image} width={1440} height={520} alt='banner' ></img>
				</div>
			</div>
		</section>
	</>)
}

export default BannerCompany