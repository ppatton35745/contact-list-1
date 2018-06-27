const contact = require("./Contact")
const $ = require("jquery")


const newContactForm = contact.buildNewContactForm();
$("#display-container").append(newContactForm);
const contactList = contact.buildContactList();
$("#display-container").append(contactList);