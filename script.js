const button = document.querySelector('.btn')
const toasts = document.querySelector('.toasts')


const messages =[
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six',
    'Message Seven',
    'Message Eight'

]

const types = [
    'info', 'success', 'error', 'message'
]

button.addEventListener('click', ()=> createNotification())

function createNotification(){
    const notifn = document.createElement('div')
    // const type = getRandomType()
    notifn.classList.add('toast')
    notifn.classList.add(getRandomType())
    notifn.innerText = getRandomMessage()
    
    toasts.appendChild(notifn)

    setTimeout(() => {
        notifn.remove()
    }, 3000);
}

function getRandomMessage(){
   return  messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
   return  types[Math.floor(Math.random() * types.length)]
}