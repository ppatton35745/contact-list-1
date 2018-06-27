const $ = require("jquery")
const ContactCollectionModule = require("./ContactCollection")
const ContactFormModule = require("./ContactForm")
const ContactListModule = require("./ContactList")

const contact = Object.create({}, {

  addNewContact: {
    writable: false,
    configureable: false,
    enumerable: false,
    value: function () {
      const newContactName = $(".name-form-field").val()
      const newContactPhone = $(".phone-form-field").val()
      const newContactAddr = $(".addr-form-field").val()
      contactCollectionModule.postContact(newContactName, newContactPhone, newContactAddr)
        .then((response) => {
          contactListModule.buildContactList()
        })
    }
  },

  deleteContact: {
    writable: false,
    configureable: false,
    enumerable: false,
    value: function () {
      const contactId = event.currentTarget.parentNode.id
      ContactCollectionModule.deleteContact(contactId)
        .then(() => {
          ContactListModule.buildContactList()
        })
    }
  },

  editExistingContact: {
    writable: false,
    configureable: false,
    enumerable: false,
    value: function () {
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
  },

  buildNewContactForm: {
    writable: false,
    configureable: false,
    enumerable: false,
    value: function () {
      const newContactForm = ContactFormModule.buildNewContactForm()
      // add .on("click") event addNewContact()
      return newContactForm;
    }
  },

  buildContactList: {
    value: function () {
      ContactCollectionModule.getContacts()
        .then((response) => {
          console.log(response);
          const contactList = ContactListModule.buildContactList(response);
          console.log(contactList);
          return contactList;

        })
    }
  },

  buildEditContactForm: {
    value: function (contact) {
      const editContactForm = ContactFormModule.buildEditContactForm(contact);
      // add event listener on("click", contactModule.editExistingContact); //contact.js
      return editContactForm
    }
  },

  openEditContactForm: {
    value: function () {
      const contactId = event.currentTarget.parentNode.id
      ContactCollectionModule.getContact(contactId)
        .then((response) => {
          buildEditContactForm(response)
        })
    }
  }

  //addButton.on("click", contactModule.addNewContact); //contact.js

})

module.exports = contact