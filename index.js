async function getContent(){
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users/")   
        const data = await response.json()
        console.log(data)

        show(data)

    } catch (error) {
        console.error(error)
    }
}

getContent()

function show(users) {

    let output = ''

    for (let user of users) {
        output += `<li>${user.name}</li>`
    }
    document.querySelector('body').innerHTML = output
}
