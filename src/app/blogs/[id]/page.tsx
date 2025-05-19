import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/data/blogList";
import { fetchBlogs } from "@/data/blogList";

// Props for dynamic routes
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const awaitedParams = await params;
    const blog = blogs.find((b) => b.id === awaitedParams.id);

    return {
        title: blog?.metadata ?? "Blog Not Found",
    };
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const awaitedParams = await params;
    await fetchBlogs();
    const { blogs } = await import("@/data/blogList"); // import the updated blogs
    const blog = blogs.find((b) => b.id === awaitedParams.id);
    if (!blog) return notFound();

    return (
        <div className="relative min-h-screen font-sans text-black">
            <div className="absolute w-screen z-[-99]">
                <Image
                    src={blog.backgroundImage}
                    alt="Background"
                    width={1920}
                    height={1080}
                    className="w-screen"
                    priority
                />
            </div>
            
            {/* Content container */}
            <div className="relative flex flex-col transform translate-y-[30vw] bg-[#feeddd] px-[60px] py-[10px] mx-[12vw] mt-[50px] mb-[35vw] rounded-[2rem] md:px-[60px] md:mx-[12vw] sm:px-[20px] sm:mx-[8vw]">
                {/* Blog header */}
                <div>
                    <h1 className="font-bold text-[36px] my-[20px] mb-[40px] md:text-[36px] text-black">{blog.title}</h1>
                    <h2 className="text-[24px] italic md:text-[24px] text-black">- {blog.author}</h2>
                    <h2 className="text-[24px] italic pl-[15px] md:text-[24px] md:pl-[15px] text-black">{blog.authorPosition}</h2>
                </div>

                {/* Content sections */}
                {blog.content.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        {section.map((block, blockIndex) => {
                            switch (block.type) {
                                case "heading":
                                    return (
                                        <h3 key={blockIndex} className="text-[24px] font-bold md:text-[24px] text-black">
                                            {block.text}
                                        </h3>
                                    );
                                case "paragraph":
                                    return (
                                        <p key={blockIndex} className="text-[20px] my-[20px] md:text-[20px] text-black">
                                            {block.text}
                                        </p>
                                    );
                                case "image":
                                    return (
                                        <div className="flex justify-center w-full my-[20px]">
                                            <Image
                                                src={block.src}
                                                alt={block.alt}
                                                width={600}
                                                height={400}
                                                className="w-[30vw] md:w-[30vw] sm:w-[70vw]"
                                            />
                                        </div>
                                    );
                                case "image-caption":
                                    return (
                                        <p key={blockIndex} className="text-center text-[20px] pb-[10px] md:text-[20px] sm:text-[20px] text-black">
                                            {block.text}
                                        </p>
                                    );
                                case "note":
                                    return (
                                        <p key={blockIndex} className="text-sm text-gray-500">
                                            {block.text}
                                        </p>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}