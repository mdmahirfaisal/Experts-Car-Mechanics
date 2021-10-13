import React from 'react';
import { Link } from 'react-router-dom';
import img from './image/404-img.jpg';

const NotFound = () => {
    return (
        <div>

            <img src={img} alt="" />
            <h2>Page Not Found</h2>
            <Link to="/home">
                <button className="btn btn-danger">Go BAck</button>
            </Link>
        </div>
    );
};

export default NotFound;