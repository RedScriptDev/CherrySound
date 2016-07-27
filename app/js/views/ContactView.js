const $ = require('jquery');
const _ = require('underscore');
const Backbone = require('backbone');
const Mn = require('backbone.marionette');
const template = require('../templates/Contact.hbs');

const ContactView = Mn.LayoutView.extend({
    template: template,
    ui: {
        formEl: "#contact_form",
        sendBtn: "#contactSubmit",
        success: "#success_message"
    },
    events: {
        "submit @ui.formEl": "sendForm"
    },
    sendForm: function(e) {
        e.preventDefault();
        const data = this.ui.formEl.serialize();

        this.ui.sendBtn.text("Sending...");


        $.post("mailer.php", data)
        .done(() => {
            this.ui.success.show();
            this.ui.formEl[0].reset();
            this.ui.sendBtn.text("Sent!");
        });
}
});

module.exports = ContactView;
