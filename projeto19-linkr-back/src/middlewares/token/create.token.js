import { v4 as uuidV4 } from "uuid"

import { db } from "../../database/database.connection.js"

export default async function createToken (req, res){
    const id = req.body.userId
    const token = uuidV4()

    try {

        await db.query(
            "INSERT INTO tokens (token, user_id) VALUES ($1, $2)",
            [token, id]
        )

        return res.send({ token })
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }
}