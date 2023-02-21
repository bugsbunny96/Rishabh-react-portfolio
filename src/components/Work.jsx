import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2022,
        title: 'Web Developer',
        duration: '6 months',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi accusamus amet voluptatum deserunt totam alias autem perferendis odit explicabo, obcaecati maiores aut, dolores odio. A nisi distinctio vel doloremque.',
    },
    {
        year: 2020,
        title: 'Web Developer',
        duration: '6 months',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi accusamus amet voluptatum deserunt totam alias autem perferendis odit explicabo, obcaecati maiores aut, dolores odio. A nisi distinctio vel doloremque.',
    },
    {
        year: 2019,
        title: 'Web Developer',
        duration: '6 months',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi accusamus amet voluptatum deserunt totam alias autem perferendis odit explicabo, obcaecati maiores aut, dolores odio. A nisi distinctio vel doloremque.',
    },
    {
        year: 2018,
        title: 'Web Developer',
        duration: '6 months',
        details:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore modi accusamus amet voluptatum deserunt totam alias autem perferendis odit explicabo, obcaecati maiores aut, dolores odio. A nisi distinctio vel doloremque.',
    },
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    );
}

export default Work;
