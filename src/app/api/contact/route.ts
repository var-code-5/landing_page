
import { MongoClient } from 'mongodb';

// MongoDB connection
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

// Connection cache to reuse connections
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
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db(dbName);
    const contactCollection = db.collection('contactMessages');
    console.log("in post request");
    // Insert the contact message
    const result = await contactCollection.insertOne({
      firstName,
      lastName,
      email,
      phone: phone || null,
      message,
      createdAt: new Date()
    });
    
    return new Response(JSON.stringify({ 
      message: 'Message stored successfully!',
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