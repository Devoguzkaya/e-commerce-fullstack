import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, BarChart2 } from 'lucide-react';

const mockPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Google", "Trending", "New"],
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Google", "Trending", "New"],
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1520607162513-7770d8f74261?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Google", "Trending", "New"],
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Google", "Trending", "New"],
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Google", "Trending", "New"],
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Google", "Trending", "New"],
        title: "Koudetat à la Maison #1 (L'intégrale)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
    },
];

const BlogPage = () => {
    return (
        <div className="bg-white">
            {/* Content Centered Container - Updated Padding to match Figma (160px ~ py-40) */}
            <div className="container mx-auto px-4 py-[50px] lg:py-[80px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center">
                    {mockPosts.map((post) => (
                        <div key={post.id} className="w-full max-w-[348px] bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                            {/* Image Area */}
                            <div className="relative w-full h-[300px] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-[20px] left-[20px] bg-[#E74040] text-white font-bold text-[14px] px-[10px] rounded-[3px] shadow-sm leading-[24px]">
                                    NEW
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-[25px] flex flex-col gap-[10px] flex-grow">
                                {/* Tags */}
                                <div className="flex items-center gap-[15px] text-[12px] leading-[16px]">
                                    <span className="text-[#8EC2F2] cursor-pointer hover:text-blue-500">Google</span>
                                    <span className="text-[#737373]">Trending</span>
                                    <span className="text-[#737373]">New</span>
                                </div>

                                {/* Title */}
                                <h4 className="font-normal text-[20px] leading-[30px] text-[#252B42] group-hover:text-[#23A6F0] transition-colors cursor-pointer">
                                    {post.title}
                                </h4>

                                {/* Description */}
                                <p className="font-normal text-[14px] leading-[20px] text-[#737373]">
                                    {post.description}
                                </p>

                                {/* Meta: Date & Comments */}
                                <div className="flex items-center justify-between py-[15px] mt-auto">
                                    <div className="flex items-center gap-[5px]">
                                        <Clock size={16} className="text-[#23A6F0]" />
                                        <span className="text-[12px] text-[#737373]">{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px]">
                                        <BarChart2 size={16} className="text-[#23856D]" />
                                        <span className="text-[12px] text-[#737373]">{post.comments} comments</span>
                                    </div>
                                </div>

                                {/* Learn More */}
                                <div className="flex items-center gap-[10px] cursor-pointer font-bold text-[#737373] hover:text-[#23A6F0] transition-colors">
                                    <span className="text-[14px] leading-[24px]">Learn More</span>
                                    <ChevronRight size={16} className="text-[#23A6F0]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
