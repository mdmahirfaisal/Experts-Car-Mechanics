import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();

    return (
        <div className="container">
            <h2>This is booking for {serviceId} </h2>

            <Link to="/home">
                <button className="btn btn-danger">
                    Go back
                </button>
            </Link>
        </div>
    );
};

export default Booking;