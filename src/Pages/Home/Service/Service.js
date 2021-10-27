import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, price, img, description } = props.service;

    return (
        <Col>
            <Card className="h-100 border-0 shadow  p-3 service-card">
                <Card.Img className=" service-img card-img-top  img-fluid" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h5>${price}</h5>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-danger">Book {name.toLowerCase()}</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;