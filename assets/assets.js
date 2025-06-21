import user_image from './user-image.png';
import code_icon from './code-icon.png';
import language_icon from './language_icon.png';
import language_icon_dark from './language_icon_dark.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header_bg_color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import Sign from './Ratnakar-Photoroom.png';
import java from './8666389_java_icon.png'
import backend from './8665333_database_icon.png'
import Background2 from './download.png'
export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    Sign,
    language_icon,
    language_icon_dark,
    java,
    backend,
    Background2
    
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

// export const serviceData = [
//     { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
//     { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
//     { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
//     { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
// ]

export const serviceData = [
  {
    icon: assets.web_icon,
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio built with Next.js and Tailwind CSS to showcase projects, resume, and contact details.',
    link: ''
  },
  {
    icon: assets.mobile_icon,
    title: 'Weather App',
    description: 'A React Native mobile app that displays live weather data using OpenWeatherMap API and device geolocation.',
    link: ''
  },
  {
    icon: assets.ui_icon,
    title: 'AI Ocean Explorer',
    description: 'An interactive web platform using AI-generated visuals and ocean temperature predictions built with TensorFlow.js.',
    link: ''
  },
  {
    icon: assets.graphics_icon,
    title: 'MarineLifeHub',
    description: 'A data-driven project visualizing marine life across oceans with maps, research panels, and ecological statistics.',
    link: ''
  }
];



// export const infoList = [
//   {
//     icon: assets.code_icon,
//     iconDark: assets.code_icon_dark,
//     title: 'Programming Languages',
//     description: 'JAVA, Python, JavaScript, C++',
//   },
//   {
//     icon: assets.language_icon,
//     iconDark: assets.language_icon_dark,
//     title: 'Languages',
//     description: 'Hindi / English / Marathi / German',
//   },
//   {
//     icon: assets.edu_icon,
//     iconDark: assets.edu_icon_dark,
//     title: 'Education',
//     description: 'BCA in Computer Application',
//   },
//   {
//     icon: assets.project_icon,
//     iconDark: assets.project_icon_dark,
//     title: 'Projects',
//     description: 'Built more than 5 projects',
//   },
//   {
//     icon: assets.java,
//     iconDark: assets.web_icon, // no dark version available, so fallback to same
//     title: 'Java Frameworks',
//     description: 'Spring, Hibernate, Maven, JUnit',
//   },
//   {
//     icon: assets.backend, // using firebase icon for backend/server representation
//     iconDark: assets.firebase,
//     title: 'Backend Skills',
//     description: 'REST APIs, JDBC, MySQL, PostgreSQL',
//   },
// ];

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'BCA in Computer Application – Punyashlok Ahilyadevi Holkar Solapur University, Solapur(2021–2024), CGPA: 7.87/10. Studied core CS subjects like DSA, DBMS, OS, CN, SE.',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built multiple full-stack apps using React, Node.js, Firebase, and MongoDB, including a marine ecosystem platform and VR simulation tools.',
  },
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Tech Stack',
    description: 'Proficient in Java, JavaScript, HTML, CSS, React.js, Node.js, Express, MongoDB, Firebase, Git, Vite, and RESTful APIs.',
  },
  {
    icon: assets.language_icon,
    iconDark: assets.language_icon_dark,
    title: 'Programming Skills',
    description: 'Strong grasp on OOP, problem solving, data structures, algorithms. Proficient in Java and familiar with Java Frameworks .',
  },
];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.git
];