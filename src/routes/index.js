import express from 'express';
import usuarios from "./usuariosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "curso de node"})
    })

    app.use(
        express.json(),
        usuarios
    )
}

export default routes;