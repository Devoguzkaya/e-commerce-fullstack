import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import heroImage from '../../assets/shop-hero-3-product-slide-2.jpg';

const slides = [
    {
        id: 1,
        image: heroImage,
        title: "GROCERIES DELIVERY",
        subtitle: "We know how large objects will act, but things on a small scale just do not act that way.",
        buttonText: "Start Now"
    },
    {
        id: 2,
        image: heroImage,
        title: "FRESH & ORGANIC",
        subtitle: "Farm fresh products delivered directly to your doorstep with love and care.",
        buttonText: "Order Now"
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#252B42]">

            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className="absolute inset-0 bg-[#A91A1A]/10 mix-blend-multiply"></div>
                    </div>

                    <div className="relative h-full flex items-center justify-center text-center text-white">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8">
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-6xl font-black tracking-wide leading-tight drop-shadow-lg">
                                        {slide.title.split(' ').map((word, i) => (
                                            <React.Fragment key={i}>
                                                {word} <br className={`${i === 0 ? 'hidden md:block' : 'hidden'}`} />
                                            </React.Fragment>
                                        ))}
                                    </h1>
                                    <h4 className="text-lg md:text-xl font-medium text-gray-100 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                                        {slide.subtitle}
                                    </h4>
                                    <div className="pt-4">
                                        <button className="bg-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-[5px] text-lg transition-transform hover:scale-105 shadow-xl">
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-20 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
                <ChevronLeft className="w-12 h-12 text-white opacity-80 hover:opacity-100" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-20 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
                <ChevronRight className="w-12 h-12 text-white opacity-80 hover:opacity-100" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-12 h-2 shadow-md cursor-pointer transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    ></div>
                ))}
            </div>

        </section>
    );
};

export default HeroSlider;
