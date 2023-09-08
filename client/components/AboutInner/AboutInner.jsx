import estilo from "./AboutInner.module.scss";
import CardImage from "./Cards/CardImage";
import CardInfo from "./Cards/CardInfo";
import separator1 from "./sep1.webp";
import separator2 from "./sep2.webp";

export default function AboutInner() {
	const title1 = (
		<>
			Hello! <br/>
			My name is Gabriel Estefono.
		</>
	)

	const title2 = (
		<>
			I am a Full Stack Developer <br/>
		</>
	)

	const texto1 = (
		<>
			I'm a Full Stack Developer, passionate about creating innovative and efficient solutions. With skill, techniques and a creative mind, I am always looking for new challenges and opportunities to improve my skills and help turn ideas into reality. <br/>
			My development knowledge covers both front-end and back-end, allowing me to create complete and cohesive solutions for the most diverse projects. On the front-end, I master technologies such as HTML, CSS and JavaScript, in addition to the React framework.
		</>
	)

	const texto2 = (
		<>
			This allows me to create intuitive, responsive and attractive user interfaces. <br/>
			On the backend, I have experience in some programming languages, such as Python, PHP, and C language, as well as the Django framework. I also have experience with relational databases such as MySQL and PDO. <br/>
			If you are looking for a motivated, dedicated and highly qualified Full Stack Developer to help drive your project or business forward, please do not hesitate to contact me. I look forward to collaborating with you and creating exceptional solutions together!
		</>
	)
	return (
		<div className={estilo.aboutinner}>
			<CardInfo title={title1} text={texto1}/>
			<CardImage image={separator1}/>
			<CardImage image={separator2}/>
			<CardInfo title={title2} text={texto2}/>
		</div>
	)
}