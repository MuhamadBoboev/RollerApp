import { useState } from 'react'
import st from './products.module.scss'
import product1 from './img/product1.svg'

const Products = () => {

	// interface Interface1 {
	// 	id: number,
	// 	name: string,
	// }
	// const [count, setCount] = useState<Interface1>()
	return ( <section className={'padding_top_150 ' + st.products} >
		<div className={'_container ' + st.container } >
			<h2 className='text_h2' >Наша продукция</h2>
			<div className={st.container} >
				<div className={st.products_items}>
					<div className={st.product__item} >
							<p className={'text_h3 ' + st.product_text}>
								Профильные системы для окон
							</p>
							<div className={st.product__body}>
								<div className={st.product__body_fon} >
									<img src={product1} ></img>
								</div>
								<div className={st.product__block_button}>
									<button className={'button_white ' + st.button } >Подробнее</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</section> )
}

export default Products