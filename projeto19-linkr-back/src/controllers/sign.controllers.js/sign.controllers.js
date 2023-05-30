import { db } from "../../database/database.connection.js";
import bcrypt from "bcrypt"


export async function signUp(req, res) {
    const { name, email, password, photo} = req.body

    try {
        await db.query('INSERT INTO users (name, email, password, photo) VALUES ($1, $2, $3, $4)', [
      name,
      email,
      bcrypt.hashSync(password, 10),
      photo,
    ]);
    res.status(201).send({ message: 'Usuário cadastrado!' });

    } catch (err) {
       
        
        res.status( 500 ).send( {message : err.message} );
    }
    
}

export async function login(req, res, next) {
    const { email, password } = req.body

    try {
        const response = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )

        if (response.rowCount === 0) return res.status(401).send('Dados Inválidos, verifique e-mail e senha');

        const { id, password: passwordInDb } = response.rows[0]

        req.body.userId = id

        if (!bcrypt.compareSync(password, passwordInDb)) return res.status(401).send('Dados Inválidos, verifique e-mail e senha');

        next()
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}