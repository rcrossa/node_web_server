const { envs } =require('./config/env')
const { startServer } = require('./server/server')

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


