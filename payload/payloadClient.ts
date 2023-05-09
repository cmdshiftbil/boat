import { Payload, getPayload } from "payload/dist/payload";
import config from './payload.config';

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable is missing')
}

if (!process.env.PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET environment variable is missing')
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 * 
 * Source: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js
 */
let cachedClient: Payload | undefined = (global as any).payload
let promise: Payload | null;
// let cached: Payload | null = (global as any).payload


export const getPayloadClient = async () => {
  if (cachedClient) {
    return cachedClient
  }

  if (!promise) {
    promise = await getPayload({
      // Make sure that your environment variables are filled out accordingly
      mongoURL: process.env.MONGODB_URI as string,
      secret: process.env.PAYLOAD_SECRET as string,
      config: config,
    })
  }

  try {
    cachedClient = await promise
  } catch (e) {
    promise = null
    throw e
  }

  return cachedClient
};

export default getPayloadClient;