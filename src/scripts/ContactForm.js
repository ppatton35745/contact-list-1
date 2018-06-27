const $ = require("jquery")

//const contactCollectionModule = require("./ContactCollection")
//const contactModule = require("./Contact")

const contactForm = Object.create({}, {

  buildFormSection: {
    value: function (sectionName, sectionInputType, sectionInputClass, InputVal) {

      const section = $("<section>")
      const label = $("<label>").text(`${sectionName}: `);
      const field = $("<input>").attr("type", sectionInputType).addClass(sectionInputClass);
      if (InputVal) {
        field.val(InputVal);
      }
      section.append(label);
      section.append(field);
      return section;
    }
  },

  buildNewContactForm: {
    value: function () {

      const formArticle = $("<article>")

      const nameSection = this.buildFormSection("Name", "text", "name-form-field");
      const phoneSection = this.buildFormSection("Phone", "tel", "phone-form-field");
      const addrSection = this.buildFormSection("Address", "text", "addr-form-field");
      const addButton = $("<button>").text("Add");



      formArticle.append(nameSection);
      formArticle.append(phoneSection);
      formArticle.append(addrSection);
      formArticle.append(addButton);

      return formArticle;
    }
  },

  buildEditContactForm: {
    value: function (contact) {

      const editContactArticle = $("<article>");

      const nameSection = this.buildFormSection("Name", "text", "name-form-field", contact.name);
      const phoneSection = this.buildFormSection("Phone", "tel", "phone-form-field", contact.phone);
      const addrSection = this.buildFormSection("Address", "text", "addr-form-field", contact.address);
      const editButton = $("<button>").text("Update").attr("id", `${contact.id}`).on("click", contactModule.editExistingContact); //contact.js

      editContactArticle.append(nameSection)
      editContactArticle.append(phoneSection)
      editContactArticle.append(addrSection)
      editContactArticle.append(editButton)

      return editContactArticle
    }
  },



})

module.exports = contactForm