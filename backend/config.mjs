import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const publicPath = path.join(__dirname, 'public');
export const envPath = path.join(__dirname, '.env');
