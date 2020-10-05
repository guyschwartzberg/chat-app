const generateMessage = (username, message) => ({ 
    username,
    message,
    createdAt: new Date().getTime()
})

module.exports = {
    generateMessage
}

const generateLocationMessage = (username, latitude, longitude) => ({ 
    username,
    url: `https://google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
})

module.exports = {
    generateMessage,
    generateLocationMessage
}