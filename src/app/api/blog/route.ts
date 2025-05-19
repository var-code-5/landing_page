
import { MongoClient } from 'mongodb';
import { randomUUID } from 'crypto';
import { BlogContentBlock } from '@/types/blog';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
    if (!uri) {
        throw new Error('Please define the MONGODB_URI environment variable');
    }

    if (cachedClient) {
        return cachedClient;
    }

    const client = new MongoClient(uri);
    await client.connect();
    cachedClient = client;
    return client;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const blogData: {
            id?: string;
            metadata: string;
            title: string;
            author: string;
            authorPosition: string;
            backgroundImage: string; 
            content: BlogContentBlock[][];
        } = body;


        if (!blogData.title || !blogData.author || !blogData.backgroundImage || !blogData.content) {
            return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const id = blogData.id || `blog-${randomUUID().substring(0, 8)}`;

        // Connect to MongoDB
        const client = await connectToDatabase();
        const db = client.db(dbName);
        const contactCollection = db.collection('blogsData');

        // Insert the contact message
        const result = await contactCollection.insertOne({
            id,
            blogData,
            createdAt: new Date()
        });

        return new Response(JSON.stringify({
            message: 'Blog stored successfully!',
            id: result.insertedId
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error('Database error:', err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function GET() {
    try {
        const client = await connectToDatabase();
        const db = client.db(dbName);
        const blogCollection = db.collection('blogsData');

        const blogs = await blogCollection.find().sort({ createdAt: -1 }).toArray();

        return new Response(JSON.stringify(blogs), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error('Database error:', err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}