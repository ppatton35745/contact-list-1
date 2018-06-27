const $ = require("jquery")

const contactCollection = Object.create({}, {
  "postContact": {
    value: function (name, phone, address) {
      return $.ajax({
        url: "http://localhost:3000/contacts",
        method: "POST",
        data: {
          name: name,
          phone: phone,
          address: address
        }
      })
    }
  },
  "getContacts": {
    value: function () {
      return $.ajax("http://localhost:3000/contacts")
    }
  },
  "deleteContact": {
    value: function (id) {
      return $.ajax({
        url: `http://localhost:3000/contacts/${id}`,
        method: "DELETE"
      })
    }
  },
  "getContact": {
    value: function (id) {
      return $.ajax(`http://localhost:3000/contacts/${id}`)
    }
  },
  "putContact": {
    value: function (id, name, phone, address) {
      return $.ajax({
        url: `http://localhost:3000/contacts/${id}`,
        method: "PUT",
        data: {
          name: name,
          phone: phone,
          address: address
        }
      })
    }
  }
})

module.exports = contactCollection