import { Text } from '../ui/Text';
import { TitleSection } from '../ui/TitleSection';
import st from './form_main.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from 'clsx';
import { motion } from 'framer-motion'

interface IFormInput {
	firstName: String;
	name: string;
	tell: number;
	email: string;
	text: string
}

const FormMain = ({ titleChildren, textChildren }: FormMainProps) => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
	const imgVariants = {
		hidden: {
			opacity: 0,
			x: 20,
			scale: 0.5
		},
		animate: (i: number) => ({
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				delay: (i + 1) * 0.1,
			}
		})
	}
	return (
		<div className={'_container ' + st.container}>
			<motion.div
				initial="hidden"
				whileInView="animate"
				variants={imgVariants}
				className={clsx(
					st.form
				)}>
				<div className={st.form_top} >
					<TitleSection textAlign='center' children={titleChildren} />
					<Text textAlign='center' children={textChildren} />
					{/* <p className={st.title} >{titleChildren}</p>
					<p className={st.text} >{textChildren}</p> */}
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={st.form__wrapper} >
						<div className={st.form__body} >
							<ul className={st.form__items} >
								<li className={st.form__item} >
									<input {...register('name')} className={'text ' + st.form__input} placeholder='Имя*' />
								</li>
								<li className={st.form__item} >
									<input {...register('tell')} className={'text ' + st.form__input} placeholder='Телефон*' />
								</li>
								<li className={st.form__item} >
									<textarea
										{...register('text')}
										className={'text ' + st.form__input}
										placeholder='Введите текст...' />
								</li>
							</ul>
							<div className={st.form__bl_button} >
								<input className={'button ' + st.form__button} type="submit" />
							</div>
						</div>
					</div>
				</form>
			</motion.div>
		</div>
	)
}

export default FormMain