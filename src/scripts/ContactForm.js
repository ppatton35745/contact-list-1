const $ = require("jquery")

const contactCollectionModule = require("./ContactCollection")

const contactForm = Object.create({}, {

  buildFormSection: {
    value: function (sectionName, sectionInputType, sectionInputClass, InputVal) {

      const section = $("<section>")
      const label = $("<label>").text(`${sectionName}: `);
      const field = $("<input>").attr("type", sectionInputType).addClass(sectionInputClass);
      if (InputVal) {
        field.val(InputVal);
      }
      section.appendChild(nameLabel);
      section.appendChild(nameField);
      return section;
    }
  },

  buildNewContactForm: {
    value: function () {

      const formArticle = $("<article>")

      const nameSection = this.buildFormSection("Name", "text", "name-form-field");
      const phoneSection = this.buildFormSection("Phone", "tel", "phone-form-field");
      const addrSection = this.buildFormSection("Address", "text", "addr-form-field");
      const addButton = $("<button>").text("Add").on("click", addNewContact); //contact.js

      formArticle.appendChild(nameSection);
      formArticle.appendChild(phoneSection);
      formArticle.appendChild(addrSection);
      formArticle.appendChild(addButton);

      return formArticle;
    }
  },

  buildEditContactForm: {
    value: function (contact) {

      const editContactArticle = $("<article>");

      const nameSection = this.buildFormSection("Name", "text", "name-form-field", contact.name);
      const phoneSection = this.buildFormSection("Phone", "tel", "phone-form-field", contact.phone);
      const addrSection = this.buildFormSection("Address", "text", "addr-form-field", contact.address);
      const editButton = $("<button>").text("Update").attr("id", `${contact.id}`).on("click", editExistingContact); //contact.js

      editContactArticle.appendChild(nameSection)
      editContactArticle.appendChild(phoneSection)
      editContactArticle.appendChild(addrSection)
      editContactArticle.appendChild(editButton)

      return editContactArticle
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

})

module.exports = contactForm