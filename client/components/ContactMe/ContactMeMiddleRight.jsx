import estilo from './ContactMeMiddleRight.module.scss'

export default function ContactMeMiddleRight() {
	return (
		<form className={estilo.form}>
			<div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Full Name'/>
				</div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Your Name'/>
				</div>
			</div>
			<div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Phone Number'/>
				</div>
				<div>
					<label htmlFor=""></label>
					<input type="text" placeholder='Budget'/>
				</div>
			</div>
			<div>
				<label htmlFor=""></label>
				<textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
			</div>
		</form>
	)
}