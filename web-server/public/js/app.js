console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    console.log('testing! :', location)

    let url = 'http://localhost:3000/weather?address=' + location
    fetch(url).then(
        (response) => {response.json().then( (data) => {
            if (data.error) {
                console.log('data.error: ',data.error)
            } else {
                console.log('data.location: ', data.location)
                console.log('data.forecast: ', data.forecast)
            }
        })
    })
    

})


