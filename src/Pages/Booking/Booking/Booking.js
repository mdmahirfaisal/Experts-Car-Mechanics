import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://floating-tor-16332.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div className="container">
            <h2>This is booking for {service.name} </h2>

            <Link to="/home">
                <button className="btn btn-danger">
                    Go back
                </button>
            </Link>
        </div>
    );
};

export default Booking;