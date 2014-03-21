define(["pages/ScrumBoard/Environment",
        "text!pages/ScrumBoard/html/HeaderView.html",
        "css!pages/ScrumBoard/css/HeaderView.css"],

    function(environment, headerHTML, headerCSS) {
        return Backbone.View.extend({
            id: "header",

            template: _.template(headerHTML),

            events: {
                "click #logout_button": "signout"
            },

            render: function() {
                this.$el.html(this.template());
 
                return this;
            },

            signout: function (event) {
                environment.user.signout();
            }
        });    
    }
);
