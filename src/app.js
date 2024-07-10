import { envs }  from './config/env.js'
import { startServer } from './server/server.js'

const main = () => {
    startServer({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    })
}
// Spanish memory notes:
// funcion agnóstica  autoconvocada
// Agnóstica porque no tienen nombre
// Autoconvocada porque la ejecutamos con los parentesis
(async () => {
    main()
})()


