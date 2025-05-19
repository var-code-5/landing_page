/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { BlogData, BlogContentBlock } from '@/types/blog';

export const blogs: BlogData[] = [];

export async function fetchBlogs() {
  try {
    const response = await axios.get('http://localhost:3000/api/blog'); // Replace with your actual endpoint
    const rawBlogs = response.data;
    console.log("fetching");
    const processedBlogs: BlogData[] = rawBlogs.map((entry: any) => {
      const data = entry.blogData;

      // Process content blocks and fix image sources
      const processedContent: BlogContentBlock[][] = data.content.map((row: BlogContentBlock[]) =>
        row.map((block: BlogContentBlock) => {
          if (block.type === 'image' && typeof block.src === 'string') {
            return {
              ...block,
              src: `data:image/jpg;base64,${block.src}`
            };
          }
          return block;
        })
      );

      return {
        id: data.id || entry.id,
        metadata: data.metadata,
        title: data.title,
        author: data.author,
        authorPosition: data.authorPosition,
        backgroundImage: `${data.backgroundImage}`,
        content: processedContent
      };
    });

    blogs.splice(0, blogs.length, ...processedBlogs); // Replace the blogs array content

  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }
}
