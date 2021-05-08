const clearKeys = [
    'Escape', // US Keyboard setup
    'Alphanumeric', // ibus 日本語キーボードー
]

const isClearCommand = (event) => {
    if (clearKeys.includes(event.key)) return true
}

document.addEventListener('keydown', (event) => {
    const input =
        document.getElementById('user-response') || // WaniKani
        document.querySelector('input[name="answer"]') // KameSame

    if (isClearCommand(event)) {
        input.value = ''
    }
})
