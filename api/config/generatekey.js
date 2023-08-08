import crypto from 'crypto'

const keyAccess = crypto.randomBytes(48).toString('hex');
const keyRefresh = crypto.randomBytes(48).toString('hex');
console.table({ keyAccess, keyRefresh});