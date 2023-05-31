import { db } from "../database/database.connection.js";

export async function publishLink(req, res) {
    try {
        const { link, article } = req.body;
        const userId = 5;

        const post = await db.query(`
        INSERT INTO posts
        (link, article, "userId")
        VALUES ($1, $2, $3);
        `, [link, article, userId])

        res.status(201).send("Publicação realizada com sucesso")
    } catch (err) {
        console.error(err);
        res.status(500).send("Houve um erro ao publicar seu link")
    }
}

