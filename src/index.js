const express = require('express')
const config = require('./config')
const app = express()
const peopleRepository = require('./repository/peopleRepository')

const renderPage = (people) => {
    const names = people.map(person => `<li>${person.name}</li>`).join('')
    return `<h1>Full Cycle Rocks!</h1>
    <ul>${names}</ul>`
}

app.get('/', async (req, res) => {
    const people = await peopleRepository.listAll();
    res.send(renderPage(people))
})

app.get('/cadastrar', async (req, res) => {
    await peopleRepository.insert(req.query.nome)
    const people = await peopleRepository.listAll();
    res.send(renderPage(people))
})

app.listen(config.app.port, () => {
    console.log(`Listesing on port ${config.app.port}`)
})