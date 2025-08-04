import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __basedirname = path.resolve(__dirname, '..');

export const publicPath = path.join(__basedirname, 'public');
export const envPath = path.join(__basedirname, '.env');
