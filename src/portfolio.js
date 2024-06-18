const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#', // change after
  title: 'CD.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Le Cong Dung',
  role: 'Back-end Developer',
  description:
    "I am an enthusiastic Java and Spring Boot intern. I'm currently seeking opportunities to apply my knowledge and enhance my skills in software development. With a passion for learning and a proactive attitude, I aim to contribute to projects and learn from industry experts.",
  resume: 'https://drive.google.com/file/d/1uWsEyiMGqMvU7z2kTc0xU-6wjXLWTmCk/view?usp=sharing',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100011008001906',
    github: 'https://github.com/congdunghzz',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tech Central',
    image: 'https://congdunghzz.github.io/Porfolio/techcentral.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Spring Boot', 'Spring Security', 'JWT Authentication', 'MySQL' ,'React', 'Axios' ,'Bootstrap 5'],
    sourceCode: 'https://github.com/congdunghzz/Tech_central',
    livePreview: 'https://youtu.be/56HuC1PIOsE?si=femp4e9l0BF6HqoT',
  },
  {
    name: 'Feelbook',
    image: 'https://congdunghzz.github.io/Porfolio/feelbook.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Spring MVC', 'Spring Data JDBC' ,'Jsp Servlet', 'MySQL' ,'Bootstrap'],
    sourceCode: 'https://github.com/congdunghzz/Feelbook',
    livePreview: 'https://youtu.be/EI1EbeTKBHU?si=lkxBzvvfMHinWp6J',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'JavaScript',
  'SQL',
  'Python',
  'Spring Boot',
  'Spring Security',
  'Spring Framework',
  'Spring Cloud',
  'Spring WebSocket',
  'Spring Redis Cache',
  'React',
  'Bootstrap',
  'Git',
  'GitHub',
  'Docker',
  'Postman',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lecongdung3010@mail.com',
}

export { header, about, projects, skills, contact }
