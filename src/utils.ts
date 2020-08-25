import bcrypt from "bcryptjs";

function hashPassword(password: string) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err: Error, salt: string) => {
            if (err) {
                reject (err);
            }
            bcrypt.hash(password, salt, (err: Error, hash: string) => {
                if(err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
}

module.exports = {
    hashPassword
}