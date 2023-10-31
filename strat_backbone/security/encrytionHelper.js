export const generateMasterKey= (passphrase) => {
    let masterKey = null;
    if(passphrase) {
        masterKey = crypto.createHash('sha256').update(String(passphrase)).digest('base64')
    }
    return masterKey
}

export const encrypt = (buffer, key, algorithm='aes-256-ctr') => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);

    return result;
}

export const decrypt = (encrypted, key, algorithm='aes-256-ctr') => {
    const iv = encrypted.slice(0, 16);
    encrypted = encrypted.slice(16);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return result;
}