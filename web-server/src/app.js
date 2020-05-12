const path = require('path')
const express = require('express')
const app = express()

const publicDirPath = path.join(__dirname, '../public')

console.log('pub dir: ', publicDirPath)

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sun Pochin',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About!',
        name: 'Sun Pochin',
    })
})


// app.get('', (req, res) => {
//     res.send('Hello Express!')
// })


// app.get('/help', (req, res) => {
//     res.send('Help page!')
// })


// app.get('/about', (req, res) => {
//     res.send('<h1> ABOUT </h1>')
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 'snowing',
//         location: 'Worcester',
//     })
// })

app.listen(3000, () => {
    console.log('starting to listen on port 3000')
})




