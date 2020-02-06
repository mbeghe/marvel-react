import { PRIVATE_KEY, PUBLIC_KEY } from './secret';
import crypto from 'crypto';

export const GenerateHash = (ts) => {
    return crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex')
};