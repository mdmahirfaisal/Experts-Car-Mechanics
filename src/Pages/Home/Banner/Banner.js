import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from './image/banner-1.jpg';
import banner2 from './image/banner-2.jpg';
import banner3 from './image/banner-3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className="">
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>First slide label</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>Second slide label</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Third slide label</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;