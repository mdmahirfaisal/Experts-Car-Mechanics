import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'



const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch(`https://floating-tor-16332.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (

        <div id="services" className="container my-5">
            <h2 className="text-primary fw-bold">Our services</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services?.map(service => <Service
                        key="service.id"
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>

    );
};

export default Services;