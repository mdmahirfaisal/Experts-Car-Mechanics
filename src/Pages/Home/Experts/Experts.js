import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import Expert from '../Expert/Expert';


const Experts = () => {

    const experts = [
        {
            img: expert1,
            name: 'Andrew Smith',
            expertize: '-Engine Expert-'
        },
        {
            img: expert2,
            name: 'John Anderson',
            expertize: '-Polish Expert-'
        },
        {
            img: expert3,
            name: 'Zakaria Smith',
            expertize: '-Coloring Expert-'
        },
        {
            img: expert4,
            name: 'Sakib Anderson',
            expertize: '-Alrounder Expert-'
        },
        {
            img: expert5,
            name: 'Arnold',
            expertize: '-Binding Expert-'
        }
    ];
    ////////////////////////////////
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5 fw-bold ">Our Experts</h2>
            <hr className="w-75 mx-auto text-dark" />
            <div className="row g-4 mt-3">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;