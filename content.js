const isClearCommand = (event) => {
    if (event.key === 'c' && event.ctrlKey) return true
    if (event.key === 'Escape') return true
}

document.addEventListener('keydown', (event) => {
    if (isClearCommand(event)) {
        const input = document.getElementById('user-response')
        input.value = ''
    }
})
