import React, { useRef, useState, FC, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperProps, SwiperSlideProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

interface ISwiperItem extends SwiperSlideProps {
    [key: string]: any;
}

interface ISwiper extends SwiperProps {
    className?: string;
    slidesPerView?: number;
    spaceBetween?: number;
    [key: string]: any;
}

export const Carousel: FC<ISwiper> = ({ children, ...props }) => {

    const [slides, setSlides] = useState<any[]>([]);

    useEffect(() => {
        const childrenArray = React.Children.toArray(children);
        setSlides(childrenArray);
    }, [])

    return (
        <Swiper {...props}>
            {slides.map((child: any, index: number) =>
                <SwiperSlide key={index} {...child?.props}>{child}</SwiperSlide>
            )}
        </Swiper>
    )
};

export default Carousel;