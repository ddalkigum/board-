import path from 'path';
import dotenv from 'dotenv';

let envFound;
const envPath = process.cwd();

if (process.env.NODE_ENV === 'production') {
  envFound = dotenv.config({ path: path.join(envPath, '.env') });
} else if (process.env.NODE_ENV === 'development') {
  envFound = dotenv.config({ path: path.join(envPath, '.env.dev') });
} else {
  envFound = dotenv.config({ path: path.join(envPath, '.env.local') });
}

if (!envFound || envFound.error) {
  throw new Error(`Could not find .env.${process.env.NODE_ENV} file`);
}

const config = {
  port: process.env.PORT || '3000',
};

export default config;
