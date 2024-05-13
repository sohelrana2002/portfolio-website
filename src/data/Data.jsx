import React from "react"
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { VscFileSubmodule } from 'react-icons/vsc'
import { FaAward } from 'react-icons/fa'
import { BsFillPatchCheckFill } from 'react-icons/bs'


// =============for about me card=======
export const AboutMeCard = [
    {
        id: 1,
        icon: <FaAward />,
        title: "Experience",
        skills: "3+ Years Working"
    },
    {
        id: 2,
        icon: <AiOutlineUsergroupAdd />,
        title: "Clients",
        skills: "200+ Worldwide"
    },
    {
        id: 3,
        icon: <VscFileSubmodule />,
        title: "Projects",
        skills: "100+ Completes"
    }
]


// ===========for experience data=============

export const FrontEnd = [
    {
        id: 1,
        icon: <BsFillPatchCheckFill />,
        title: "HTML",
        experience: "Experienced"
    },
    {
        id: 2,
        icon: <BsFillPatchCheckFill />,
        title: "CSS",
        experience: "Intermediate"
    },
    {
        id: 3,
        icon: <BsFillPatchCheckFill />,
        title: "JavaScript",
        experience: "Experienced"
    },
    {
        id: 4,
        icon: <BsFillPatchCheckFill />,
        title: "Bootstrap",
        experience: "Experienced"
    },
    {
        id: 5,
        icon: <BsFillPatchCheckFill />,
        title: "Tailwind",
        experience: "Experienced"
    },
    {
        id: 6,
        icon: <BsFillPatchCheckFill />,
        title: "React",
        experience: "Skilled"
    }
]

export const BackEnd = [
    {
        id: 1,
        icon: <BsFillPatchCheckFill />,
        title: "Node JS",
        experience: "Intermediate"
    },
    {
        id: 2,
        icon: <BsFillPatchCheckFill />,
        title: "MongoDB",
        experience: "Experienced"
    },
    {
        id: 3,
        icon: <BsFillPatchCheckFill />,
        title: "PHP",
        experience: "Basic"
    },
    {
        id: 4,
        icon: <BsFillPatchCheckFill />,
        title: "MySQL",
        experience: "Experienced"
    },
    {
        id: 5,
        icon: <BsFillPatchCheckFill />,
        title: "Pyphon",
        experience: "Skilled"
    }
]

// ================for services data ===============

export const ServicesData = [
    {
        id: 1,
        title: "UI/UX Design",
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
        ]
    },
    {
        id: 2,
        title: "Web Development",
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false},
        ]
    },

    {
        id: 3,
        title: "Content Creation",
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
        ]
    },
]


// =============for portfolio section==========
import PortfolioImage1 from '../../src/assets/portfolio1.jpg'
import PortfolioImage2 from '../../src/assets/portfolio2.jpg'
import PortfolioImage3 from '../../src/assets/portfolio3.jpg'
import PortfolioImage4 from '../../src/assets/portfolio4.jpg'
import PortfolioImage5 from '../../src/assets/portfolio5.png'
import PortfolioImage6 from '../../src/assets/portfolio6.jpg'

export const PortfolioData = [
    {
        id: 1,
        img: PortfolioImage1,
        title: "Business Dashboard",
        github: "#",
        live: "#"
    },
    {
        id: 2,
        img: PortfolioImage2,
        title: "Earning Dashboard",
        github: "#",
        live: "#"
    },
    {
        id: 3,
        img: PortfolioImage3,
        title: "Cload Application",
        github: "#",
        live: "#"
    },
    {
        id: 4,
        img: PortfolioImage4,
        title: "Road Maping Project",
        github: "#",
        live: "#"
    },
    {
        id: 5,
        img: PortfolioImage5,
        title: "Demo project",
        github: "#",
        live: "#"
    },
    {
        id: 6,
        img: PortfolioImage6,
        title: "Data Visualition project",
        github: "#",
        live: "#"
    }
]

// =============for testimonails section===========
import ClientAvatar1 from '../../src/assets/avatar1.jpg'
import ClientAvatar2 from '../../src/assets/avatar2.jpg'
import ClientAvatar3 from '../../src/assets/avatar3.jpg'
import ClientAvatar4 from '../../src/assets/avatar4.jpg'



export const TestimonialsData = [
    {
        id: 1,
        src: ClientAvatar1,
        alt: "Clients Avatar image 1",
        name: "Ernest Achiver",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure recusandae voluptas laborum cumque aut doloribus esse tempora sapiente ad odio itaque consequuntur rem, voluptatem quae commodi labore repudiandae alias."
    },
    {
        id: 2,
        src: ClientAvatar2,
        alt: "Clients Avatar image 2",
        name: "Chistophar Nolan",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure recusandae voluptas laborum cumque aut doloribus esse tempora sapiente ad odio itaque consequuntur rem, voluptatem quae commodi."
    },
    {
        id: 3,
        src: ClientAvatar3,
        alt: "Clients Avatar image 3",
        name: "Rafael",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure recusandae voluptas laborum cumque aut doloribus esse tempora."
    },
    {
        id: 4,
        src: ClientAvatar4,
        alt: "Clients Avatar image 4",
        name: "Leo Ram",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure recusandae voluptas laborum cumque aut doloribus esse tempora sapiente ad odio itaque consequuntur rem, voluptatem quae commodi labore repudiandae alias.quae commodi labore repudiandae alias."
    }
]

// ====== for contact section ============
import {MdEmail} from 'react-icons/md'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'

export const ContactData = [
    {
        id: 1,
        icon: <MdEmail />,
        SocialMediaName: "Email",
        accountName: "info@demo.com",
        href: "#"
    },
    {
        id: 2,
        icon: <BsMessenger />,
        SocialMediaName: "Messenger",
        accountName: "demo.66654",
        href: "#"
    },
    {
        id: 3,
        icon: <BsWhatsapp />,
        SocialMediaName: "Whats App",
        accountName: "+9944-5665-2223",
        href: "#"
    },
]