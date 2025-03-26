const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(button => {
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        else if(e.target.id === 'Green'){
            body.style.backgroundColor = 'green'
        }
        else if(e.target.id === 'Yellow'){
            body.style.backgroundColor = 'yellow'

        }
        else if(e.target.id === 'Orange'){
            body.style.backgroundColor = 'orange'

        }
        


    })
})