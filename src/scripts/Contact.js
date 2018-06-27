const $ = require("jquery")
const ContactCollectionModule = require("./ContactCollection")
const ContactListModule = require("./ContactList")

const addNewContact = () => {
  const newContactName = $(".name-form-field").val()
  const newContactPhone = $(".phone-form-field").val()
  const newContactAddr = $(".addr-form-field").val()
  contactCollectionModule.postContact(newContactName, newContactPhone, newContactAddr)
  .then((response) => {
    contactListModule.buildContactList()
  })
}

const deleteContact = () => {
  const contactId = event.currentTarget.parentNode.id
  ContactCollectionModule.deleteContact(contactId)
    .then(() => {
      ContactListModule.buildContactList()
    })
}



const editExistingContact = () => {
  const contactId = event.currentTarget.id
  const contactName = $(".name-edit-field").val()
  const contactPhone = $(".phone-edit-field").val()
  const contactAddress = $(".addr-edit-field").val()
  ContactCollectionModule.putContact(contactId, contactName, contactPhone, contactAddress)
    .then(() => {
      document.querySelector(".edit-contact-article").remove()
      ContactListModule.buildContactList()
    })
}



module.exports = contact