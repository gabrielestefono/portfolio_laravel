import estilo from './ContactMeMiddleRight.module.scss'

export default function ContactMeMiddleRight() {
	return (
		<form className={estilo.form}>
			<div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Nome'/>
				</div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Whatsapp'/>
				</div>
			</div>
			<div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Telefone'/>
				</div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Orçamento em R$'/>
				</div>
			</div>
			<div>
				<label htmlFor=""></label>
				<textarea name="" id="" cols="30" rows="10" placeholder='Mensagem'></textarea>
			</div>
		</form>
	)
}