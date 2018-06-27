const contactCollectionModule = require("./ContactCollection")

const contactList = Object.create({}, {
  "createContactDOMitem": {
    value: function (contact) {

      const contactSection = $("<section>").attr("id", `${contact.id}`);

      const deleteButton = $("<button>").text("Delete").on("click", deleteContact);
      const editButton = $("<button>").text("Edit").on("click", openEditContactForm);

      contactSection.appendChild(deleteButton)
      contactSection.appendChild(editButton)

      for (let prop in contact) {
        if (prop !== "id") {
          const paraElement = $("<p>").text(`${key}: ${contact[key]}`)
          contactSection.appendChild(paraElement)
        }
      }

      return contactSection
    }
  },

  "buildContactList": {
    value: function () {
      contactCollectionModule.getContacts()
        .then((response) => {
          // IF contacts list article exists, delete it
          const currentListRef = document.querySelector(".list-contacts-article")
          if (currentListRef) {
            currentListRef.remove()
          }
          // Build
          const contactsArticle = $("article").addClass("list-contacts-article");
          response.forEach(contact => {
            contactsArticle.appendChild(this.createContactDOMitem(contact));
          });
          $("#display-container").appendChild(contactsArticle);
        })
    }
  }

})

module.exports = contactList