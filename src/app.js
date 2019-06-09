const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path fors Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Daniel Glover'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        image: '/img/snowmen.jpg',
        name: 'Daniel Glover'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'Contact helpme@helpme.com if you have any issues.',
        name: 'Daniel Glover'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing!',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})