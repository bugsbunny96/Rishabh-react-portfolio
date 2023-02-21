import React from 'react';
import ProjectItem from './ProjectItem';
import projectImg1 from '../assets/projectImg1.png';
import projectImg2_wp from '../assets/projectImg2_wp.png';
import projectImg3_wp from '../assets/projectImg3_wp.png';
import projectImg4_html from '../assets/projectImg4_html.png';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illo minus nesciunt architecto, quam in a reprehenderit iusto corrupti error corporis, hic dolores. Sit dicta itaque, eius at sed impedit.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={projectImg1} title='HTML Website' />
                <ProjectItem img={projectImg2_wp} title='News App' />
                <ProjectItem img={projectImg3_wp} title='WordPress' />
                <ProjectItem img={projectImg4_html} title='OnePager Website' />
            </div>
        </div>
    );
}

export default Projects;
