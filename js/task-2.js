function formatMessage(message, maxLength) {
    let length = message.length;
    if (length <= maxLength) {
        return message;
    } else {
        let newMessage = message.slice(0, maxLength);
        return newMessage + "..."
    }
}