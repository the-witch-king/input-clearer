const clearKeys = [
    'Escape', // US Keyboard setup
    'Alphanumeric', // ibus 日本語キーボードー
]

const isClearCommand = (event) => {
    return clearKeys.includes(event.key)
}

const isUnobfuscationCommand = (event) => {
    return event.shiftKey && event.key === ' '
}

document.addEventListener('keydown', (event) => {
    const input =
        document.getElementById('user-response') || // WaniKani
        document.querySelector('input[name="answer"]') // KameSame

    if (isClearCommand(event)) {
        input.value = ''
    }

    // Focus the input after
    input.focus()

    // KameSame obfuscates the correct answer if you're close. This will unobfuscate with a key press.
    if (isUnobfuscationCommand(event)) {
        document.querySelectorAll('.obfuscated').forEach((x) => x.click())
    }
})
