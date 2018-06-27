const $ = require("jquery")

const contactList = Object.create({}, {

  "createContactDOMitem": {
    value: function (contact) {

      const contactSection = $("<section>").attr("id", `${contact.id}`);

      const deleteButton = $("<button>").text("Delete")
      const editButton = $("<button>").text("Edit")

      for (let prop in contact) {
        if (prop !== "id") {
          const paraElement = $("<p>").text(`${prop}: ${contact[prop]}`)
          contactSection.append(paraElement)
        }
      }

      contactSection.append(deleteButton)
      contactSection.append(editButton)

      return contactSection
    }
  },

  "buildContactList": {
    value: function (response) {

      // IF contacts list article exists, delete it
      const currentListRef = document.querySelector(".list-contacts-article")
      if (currentListRef) {
        currentListRef.remove()
      }
      // Build
      const contactsArticle = $("article").addClass("list-contacts-article");
      response.forEach(contact => {
        contactsArticle.append(this.createContactDOMitem(contact));
      });
      return contactsArticle;
    }
  }

})

module.exports = contactList