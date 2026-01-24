import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import heroImage1 from '../../assets/shoppage/hero_slide_1.png';
import heroImage2 from '../../assets/shoppage/hero_slide_2.png';

const slides = [
    {
        id: 1,
        image: heroImage1,
        title: "NEW COLLECTION",
        subtitle: "We know how large objects will act, but things on a small scale just do not act that way.",
        buttonText: "Shop Now"
    },
    {
        id: 2,
        image: heroImage2,
        title: "SUMMER 2025",
        subtitle: "New season styles arrived with premium quality and best prices.",
        buttonText: "Shop Now"
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
                    <div className="absolute inset-0 bg-no-repeat bg-right bg-contain md:bg-[length:auto_90%] origin-right lg:origin-center z-0"
                        style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: 'right bottom' }}>
                    </div>

                    <div className="relative h-full flex items-center justify-start text-left text-white z-10">
                        <div className="container mx-auto px-4 md:px-12">
                            <div className="flex flex-col items-start justify-center max-w-2xl space-y-8 pl-4 lg:pl-16">
                                <div className="space-y-6">
                                    <h5 className="font-bold text-base tracking-wider uppercase text-[#23A6F0] mb-4">
                                        SUMMER 2025
                                    </h5>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wide leading-tight drop-shadow-xl uppercase">
                                        {slide.title}
                                    </h1>
                                    <h4 className="text-lg md:text-xl font-normal text-gray-200 max-w-lg leading-relaxed">
                                        {slide.subtitle}
                                    </h4>
                                    <div className="pt-8">
                                        <button className="bg-[#2DC071] hover:bg-[#23A6F0] text-white font-bold py-4 px-12 rounded-[5px] text-xl transition-all hover:scale-105 shadow-2xl uppercase tracking-wider">
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

            <div className="absolute bottom-12 left-12 hidden md:flex z-20 gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-16 h-[3px] cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-[#2DC071]' : 'bg-white/50 hover:bg-white'}`}
                    ></div>
                ))}
            </div>

        </section>
    );
};

export default HeroSlider;
