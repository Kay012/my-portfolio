import emoji from "react-easy-emoji";

export const greetings = {
	name: "Mkhululi Cebani",
	title: "Hi all, I'm Mkhululi",
	description:
		"I'm a passionate Junior Software Developer having built web and mobile applications with HTML, Javascript, CSS, Bootstrap, React.js, React Native and Backend develpment NodeJs with Express, and Spring with Spring Boot",
	resumeLink:
		"https://drive.google.com/file/d/1jLYmrYaGV0KWowg3bvsC6uNhGsZsokGr/view?usp=sharing",
};

export const openSource = {
	githubUserName: "kay012",
};

export const contact = {};

export const socialLinks = {
	url: "",
	linkedin: "https://www.linkedin.com/in/mkhululi-cebani-795b64205",
	github: "https://github.com/kay012",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK DEVELOPER WHO IS EXCITED TO BUILD AND LEARN",
	data: [
		{
			title: "Front-end Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive web apps in React.js"
				),
				emoji("⚡ Building multplatform mobile apps using React Native"),

			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "Javascript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Bootstrap",
					fontAwesomeClassname: "logos:bootstrap",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "akar-icons:react-fill",
				},
				{
					skillName: "React-Native",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				
			],
		},
		{
			title: "Back-end Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				
				emoji(
					"⚡ Building RESTful APIs in Spring & Spring Boot or NodeJs & Express"
				),
				emoji(
					"⚡ Utilizing MongoDB, Firebase, MSSQL, and MySQL to store data"
				),
			],
			softwareSkills: [
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "Spring",
					fontAwesomeClassname: "logos:spring",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				{
					skillName: "MongoDB",
						fontAwesomeClassname: "vscode-icons:file-type-mongo",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "MSSQL",
					fontAwesomeClassname: "vscode-icons:file-type-sql",
				},
				]
			},
			
		{
			title: "Other Tools",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Hosting and maintaining apps along with integration of databases"
				),
				emoji(
					"⚡ Working with version controllers like Github"
				),
				emoji(
					"⚡ Working with cloud storages like Cloudinary"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Netlify",
					fontAwesomeClassname: "logos:netlify",
				},
				{
					skillName: "Postman",
					fontAwesomeClassname: "logos:postman",
				},
				{
					skillName: "Maven",
					fontAwesomeClassname: "logos:maven",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			
			],
		},
		{
			title: "Programming Languages",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [

			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Javascript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "C-sharp",
					fontAwesomeClassname: "logos:c-sharp",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
			
			],
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "85",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Johannesburg",
		subHeader: "Bcom in Information Systems",
		duration: "2022",
	},
	{
		schoolName: "Bizana Village Senior Secondary School",
		subHeader: "National Senior Certificate",
		duration: "2018",
	},
	{
		schoolName: "Cousera",
		subHeader: " Front-End Web Development Frameworks and Tools, Bootstrap 4",
		duration: "2020",
	},
	{
		schoolName: "Cousera",
		subHeader: "Front-End Web Development with React",
		duration: "2020",
	},
	{
		schoolName: "Cousera",
		subHeader: "Multiplatform Mobile App Development with React Native",
		duration: "2020",
	},
	{
		schoolName: "Cousera",
		subHeader: " Server-side Development with NodeJS, Express and MongoDB",
		duration: "2020",
	},
	{
		schoolName: "Teacher Record ",
		subHeader: "Teaching English as a Foreign Language (TEFL)",
		duration: "2022",
	},
];

export const experience = [
	{
		role: "Academic Tutor",
		company: "University of Johannesnurg",
		companylogo: "https://github.com/Kay012/portfolio/img/icons/common/uj.png",
		date: "First Semester | 2020, 2021, 2022",
		desc: "Assisting students reach their potential in programming and pass the module.",
	},
];

export const projects = [
	{
		name: "my-portfolio",
		desc: "Portfolio website built with react.js bootstrap that helps to showcase my work and skills as a software developer.",
		github: "https://github.com/Kay012/my-portfolio.git",
		link: "",
	},
	{
		name: "myDoctor (booking) ",
		desc: "Finding and booking appointments with doctors made easier",
		github: "https://www.github.com/Kay012/doctor_appointment_booking-mobile-app",
	},
	{
		name: "Siphumelele-Kati (Author) ",
		desc: "Finding and booking appointments with doctors made easier",
		link: "https://www.siphumelelekati.com"
	},
	{
		name: "Likely (dating)",
		desc: "A dating app strictly for tertiary students",
		link: "https://www.likely.co.za"
	},
	{
		name: "e-marketplace (e-marketplace)",
		desc: "You can sell or buy from various vendors on the platform",
		github: "https://github.com/Kay012/e-marketplace",
		link: "https://e-marketplace1.herokuapp.com"
	},
];


// See object prototype on SEO.jsx page
export const seoData = {
	title: "Mkhululi Cebani",
	description:
		"A passionate Full Stack Developer.",
	author: "Mkhululi Cebani",
	image: "https://github.com/Kay012/portfolio/img/icons/common/myself.jpeg",
	url: "",
	keywords: [
		"Mkhululi",
		"Mkhululi Cebani",
		"@Mkhululi",
		"Mkhululi",
		"Portfolio",
		"Mkhululi Portfolio ",
		"Mkhululi Cebani Portfolio",
	],
}
