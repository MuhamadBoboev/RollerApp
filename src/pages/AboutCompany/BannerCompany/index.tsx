import { useRef } from 'react'
import st from './bannerCompany.module.scss'
import { useInView } from 'framer-motion';
import clsx from 'clsx';
import Container from '../../../components/Container';

interface Props {
	banner: bannerDate
}
interface bannerDate {
	title: string
	text: string
	image?: string
}

const BannerCompany = ({ banner }: Props) => {
	const ref = useRef(null)
	const isView = useInView(ref, {
		once: false,
		amount: 'some',
	})

	return (<>
		<section className={clsx(st.banner, isView && st.view)} ref={ref}>
			<Container className={st.banner__wrapper} >
				<div className={st.container} >
					<div className={st.banner__body} >
						<h1 className={'text_h1 ' + st.title}>{banner.title}
							<span className={st.title_red}>&nbsp;ROLLER</span>
						</h1>
						<p className={st.texting} >
							{banner.text}
						</p>
					</div>
					<div className={st.img_bl} >
						<img src='/assets/image/main_img_2.webp' alt='logo' width={315} height={315} />
					</div>
				</div>
			</Container>
		</section>
	</>)
}

export default BannerCompany