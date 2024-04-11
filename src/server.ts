import fastify from "fastify";

const app = fastify()



app.get('/', () =>{
    return 'Hello NLW UNITE'

})
app.get('/teste', () =>{
    return 'Hello TESTE'

})

app.listen({port:3333}).then(() =>{
    console.log('HTTP server running!')

})