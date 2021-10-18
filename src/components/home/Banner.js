import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade variant="dark">
                <Carousel.Item interval={2000}>
                    <img
                    style={{height:"500px", width:"auto"}}
                    className="d-block w-100 height"
                    src=""
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Chinese Medicine</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    style={{height:"500px", width:"auto"}}
                    className="d-block w-100 height"
                    src="https://www.acupuncturephysio.com/images/jch_optimize_backup_images/images_1600x1066_Atlas-Chinese-Medicine-Physiotherapy-Centre-Hong-Kong.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">Acupuncture</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    style={{height:"500px", width:"auto"}}
                    className="d-block w-100 height"
                    src="https://luxekurves.com/wp-content/uploads/2021/03/What-Is-Ayurvedic-Medicine.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="animate__animated animate__zoomIn heading">AyurVeda</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;