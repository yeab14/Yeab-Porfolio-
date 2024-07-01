import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Affordable Housing Platform',
        description: "Me and my team developed an AI-powered affordable housing platform. I led the development of the UI using React.js and implemented robust backend functionality with Node.js and Express.js. We integrated a secure authentication system using JWT for seamless user access. Deployment was optimized using Docker for efficiency and scalability. Our platform prioritizes simplicity and efficiency in connecting individuals and families with affordable housing options, ensuring a user-friendly experience from search to application.",
        tools: ['React', 'Material UI', 'Redux', 'Express js', 'Node Js', 'MongoDB', 'Docker', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Kegebrew Taxi',
        description: 'Me and my team developed an innovative taxi booking system known as Kegebrew Taxi. I led the frontend development, where we utilized React.js, GraphQL, and Apollo Client to create a dynamic and intuitive user interface. Our goal was to revolutionize the booking experience, ensuring users could seamlessly request and manage their rides with ease. By leveraging GraphQL for efficient data fetching and Apollo Client for state management, we enhanced performance and responsiveness, delivering a robust solution that combines cutting-edge technology with user-centric design principles, This project stands out not only for its technical sophistication but also for its ability to simplify and enhance the way people interact with taxi services, making urban mobility more accessible and efficient than ever before.',
        tools: ['React', 'Material UI', "Google Maps", 'GraphQL', 'Apollo Client'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'kegebrew Consumer Credit Management System',
        description: 'I contributed as a frontend developer to the Kegebrew Consumer Credit Management System using Next.js. Leveraging Styled-components for scoped and reusable CSS, along with Material-UI, we created a streamlined and visually engaging user interface. Redux was instrumental in managing global state, ensuring robust functionality for handling complex credit management processes. Our emphasis on usability and design consistency guarantees a seamless experience, empowering users to oversee and optimize their credit management effortlessly.',
        tools: ['Next js', 'Material UI', 'Styled-components', 'Redux' ],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Youtube Video to Text chrome extension',
        description: "Independently, I developed a captivating YouTube to text Chrome extension, combining frontend innovation with backend efficiency. For the frontend, I utilized JavaScript to create a seamless user interface that enhances accessibility to YouTube videos. On the backend, I employed Python with FastAPI, leveraging its robustness for handling API requests. The extension integrates the YouTube Transcript API to accurately fetch and display video transcripts in real-time. Deployment was achieved using Uvicorn, ensuring optimal performance and scalability. This project not only simplifies access to video content but also showcases a blend of creativity and technical expertise in enhancing user interaction with online media.",
        tools: ['Javascript', 'Python', 'Fast API', 'Streamlit', "Youtube transcript API"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


