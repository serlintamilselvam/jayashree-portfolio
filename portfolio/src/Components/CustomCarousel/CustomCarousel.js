import React from 'react'
import { Carousel } from 'react-bootstrap'


function CustomCarousel(props) {
    return (
        (props.imgUrl.length > 1) ? 
            <Carousel variant="dark">
                {props.imgUrl.map((singleImage, imageKey) => {
                    return (
                        <Carousel.Item key={imageKey}>
                            <IndividualItem  singleImage={singleImage.imgUrl} />
                            {singleImage.name && <Carousel.Caption>{singleImage.name}</Carousel.Caption>}
                        </Carousel.Item>
                    )
                })}
            </Carousel>:
            props.imgUrl.map((singleImage, imageKey) => {
                return (
                    <IndividualItem  singleImage={singleImage} key={imageKey} />
                )
            })
    )
}

function IndividualItem(props) {
    return (
        <div className="img-content">
            <img src={props.singleImage} alt="Process" />
        </div>
    )
}

export default CustomCarousel