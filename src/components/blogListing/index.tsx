import Link from "next/link";
import React from "react";

function BlogListing() {
    const BlogProps = {
        title: "Blogs",
        blogs: [
            {
                img: {
                    src: "/assets/images/blogImageOne.jpg",
                    alt: "blog image"
                },
                date: "23 May 2023",
                author: "Bruce Wayne",
                title: "Unveiling the Enchanting Charms of Kyoto",
                subtitle: "A Journey Through the Cultural Heart of Japan's Ancient Capital, Where Tradition and Beauty Collide",
                blogLink:"/blogDetails"
            },
            {
                img: {
                    src: "/assets/images/blogImageTwo.jpg",
                    alt: "blog image"
                },
                date: "23 Dec 2022",
                author: "Peter Parker",
                title: "Solo Travel: Finding Adventure in Solitude",
                subtitle: "Embrace the Freedom and Discovery of Solo Exploration - Discover the Secrets of Traveling Alone and Growing as a Wanderer",
                blogLink:"/blogDetails"
            },
            {
                img: {
                    src: "/assets/images/blogImageThree.jpg",
                    alt: "blog image"
                },
                date: "13 OCT 2023",
                author: "Gold D Rogers",
                title: "Hidden Gems of Southeast Asia: Off the Path",
                subtitle: "Exploring Unforgettable Destinations Beyond the Tourist Crowds - A Quest for Authenticity and Serenity in Southeast Asia's Best-Kept Secrets",
                blogLink:"/blogDetails"
            }
        ]
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-5xl text-center f-m-w text-indigo-700 mt-10 font-bold pt-0">{BlogProps.title}</h1>
            <div className="pt-14 xl:px-0 px-4">
                <div className="w-full lg:flex flex-col">
                    {BlogProps.blogs.map((blog, index) => (
                        <div className="" key={index}>
                            <div className="lg:flex items-start mb-16">
                                <img src={blog.img.src} alt={blog.img.alt} className="lg:w-4/12 rounded-2xl" />
                                <div className="lg:ml-6 lg:w-8/12">
                                    <h1 className="f-m-m text-2xl lg:text-5xl w-10/12 font-semibold  lg:mt-0 mt-8">{blog.title}</h1>
                                  <p className="lg:text-3xl text-xl mt-5">{blog.author}</p>
                                    <div className="mt-4">
                                        <Link href={blog.blogLink}>
                                            <p className="text-indigo-700 text-sm lg:text-xl underline font-semibold f-m-m">Read More</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
}

export default BlogListing;
