import st from './form.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from 'framer-motion'

enum GenderEnum {
	female = "Выберите отдел",
	male = "IT",
	other = "SMM"
}

interface IFormInput {
	firstName: String;
	gender: GenderEnum;
	name: string;
	tell: number;
	email: string;
	text: string
}

const Form = () => {
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
	return (<div className={st.form}>
		<form onSubmit={handleSubmit(onSubmit)}>
			<motion.div
				initial="hidden"
				whileInView="animate"
				variants={imgVariants}
				className={st.form__wrapper} >
				<div className={st.form__body} >
					<ul className={st.form__items} >
						<li className={st.form__item} >
							<input {...register('name')} className={'text ' + st.form__input} placeholder='Имя*' />
						</li>
						<li className={st.form__item} >
							<input {...register('tell')} className={'text ' + st.form__input} placeholder='Телефон*' />
						</li>
						<li className={st.form__item} >
							<input {...register('email')} className={'text ' + st.form__input} placeholder='Электронная почта*' />
						</li>
						<li className={st.form__item} >
							<select {...register("gender")} className={st.form__selected} >
								<option className={st.form__option} value="otdel">Выберите отдел</option>
								<option value="IT">IT</option>
								<option value="SMM">SMM</option>
							</select>
						</li>
						<li className={st.form__item} >
							<textarea {...register('text')} className={'text ' + st.form__input} placeholder='Введите текст...' />
						</li>
					</ul>
					<div className={st.form__bl_button} >
						<input className={'button ' + st.form__button} type="submit" />
					</div>
				</div>
			</motion.div>

		</form>

	</div>)
}

export default Form