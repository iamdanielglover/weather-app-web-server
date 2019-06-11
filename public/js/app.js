console.log('Client side Javascript file is loaded.')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=tenterden').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})


// fetch('http://localhost:3000/weather?address=tenterden').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })