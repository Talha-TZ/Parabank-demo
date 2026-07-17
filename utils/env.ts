import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

function getEnvVar(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === '') {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const APP_URL = getEnvVar('APP_URL');

export const VALID_USERNAME = getEnvVar('VALID_USERNAME');
export const VALID_PASSWORD = getEnvVar('VALID_PASSWORD');

export const INVALID_USERNAME = getEnvVar('INVALID_USERNAME');
export const INVALID_PASSWORD = getEnvVar('INVALID_PASSWORD');

