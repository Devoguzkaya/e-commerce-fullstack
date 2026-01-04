import React from 'react';
import { blogPosts } from '../../data/homeData';
import { Clock, ChevronRight, ChartArea } from 'lucide-react';

const FeaturedPosts = () => {
    return (
        <section className="bg-white py-[112px]">
            <div className="w-[85%] max-w-[1050px] mx-auto flex flex-col items-center gap-[80px]">

                {/* Header Text */}
                <div className="flex flex-col items-center gap-[10px] text-center">
                    <h6 className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0]">
                        Practice Advice
                    </h6>
                    <h3 className="font-['Montserrat'] font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">
                        Featured Posts
                    </h3>
                </div>

                {/* Posts Grid */}
                <div className="flex flex-wrap justify-center gap-[30px]">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group w-full sm:w-[328px] bg-white shadow-md hover:shadow-xl transition-shadow duration-300">

                            {/* Image Section */}
                            <div className="w-full h-[300px] relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* NEW Badge */}
                                <div className="absolute top-[20px] left-[20px] bg-[#E74040] text-white px-[10px] rounded-[3px] shadow-sm">
                                    <h6 className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                                        NEW
                                    </h6>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-[25px] flex flex-col gap-[10px]">
                                {/* Tags */}
                                <div className="flex gap-[15px] text-[12px] leading-[16px] tracking-[0.2px]">
                                    <span className="text-[#8EC2F2]">Google</span>
                                    <span className="text-[#737373]">Trending</span>
                                    <span className="text-[#737373]">New</span>
                                </div>

                                {/* Title */}
                                <h4 className="font-['Montserrat'] font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#252B42] w-[247px]">
                                    {post.title}
                                </h4>

                                {/* Description */}
                                <p className="font-['Montserrat'] font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] line-clamp-2">
                                    {post.description}
                                </p>

                                {/* Meta: Date & Comments */}
                                <div className="flex justify-between items-center py-[15px]">
                                    <div className="flex items-center gap-[5px]">
                                        <Clock size={16} className="text-[#23A6F0]" />
                                        <span className="font-['Montserrat'] text-[12px] text-[#737373]">{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        <ChartArea size={16} className="text-[#23856D]" />
                                        <span className="font-['Montserrat'] text-[12px] text-[#737373]">{post.comments}</span>
                                    </div>
                                </div>

                                {/* Learn More Link */}
                                <div className="flex items-center gap-[10px] cursor-pointer group-hover:opacity-80 transition-opacity">
                                    <h6 className="font-['Montserrat'] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                                        Learn More
                                    </h6>
                                    <ChevronRight size={16} className="text-[#23A6F0]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedPosts;
