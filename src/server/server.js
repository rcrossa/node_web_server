import express from 'express'
import path from 'path'

export const startServer = (options) => {
    const { port, public_path = 'public' } = options
    
    const app = express()

    // Para poder usar middleware, se debe usar el método use()
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible para el cliente

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath) // envia el archivo index.html
    })

    app.listen(port, () => {
        console.log(`Server is up on port ${port}`)
    })
}

