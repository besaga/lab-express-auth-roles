const mongoose = require("mongoose")

module.exports = {
    cleanText: text => text.trim(),
    capitalizeText: text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
    checkMongoID: id => mongoose.Types.ObjectId.isValid(id),
    

    isPM: (user) => user.role === "PM",
    //optional chaining, el "?" detiene la ejecución si isOwner es falsy
    //isOwner: (book, user) => book.isOwner?.equals(user._id),
}