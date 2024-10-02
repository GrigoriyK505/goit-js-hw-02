function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();
    if (normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
        return true;
    } else {
        return false;
    }
}