import { db } from "../../database/database.connection.js";


export async function createUser(user){
    if(!user)return
    await db.query(`
        INSERT INTO users (name, password, email, photo)
        VALUES ($1, $2, $3, $4)
    `, [user.name, user.password, user.email, user.photo]);
}


export async function getUserFromEmail(email){

    if (!email) return
    return await db.query(`
        SELECT * 
        FROM users 
        WHERE email = $1
    `, [email]);
}
