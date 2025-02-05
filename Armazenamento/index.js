document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})


document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('informação', input.value)
    input.value = ''
})