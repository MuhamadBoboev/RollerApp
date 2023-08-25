import { useInView } from 'framer-motion';
import st from './bunner.module.scss'
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

const Banner = () => {
	const ref = useRef(null)
	const isView = useInView(ref, {
		once: false,
		amount: 'some',
	})

	return <section className={clsx(st.banner, isView && st.view)} ref={ref}>
		<div className={st.banner__fon} >
			<div className={'_container ' + st.container} >
				<h1 className={'text_h1 ' + st.title}>Roller</h1>
				<p className={'text ' + st.texting} >
					Лидер в области разработки и производства
					оконных и дверных систем из высококачественного пластика
				</p>
			</div>
		</div>
	</section>
}


export default Banner