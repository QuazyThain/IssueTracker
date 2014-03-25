define(["pages/ScrumBoard/Environment",
        "text!pages/ScrumBoard/html/HeaderView.html",
        "css!pages/ScrumBoard/css/HeaderView.css"],

    function(environment, headerHTML, headerCSS) {
        return Backbone.View.extend({
            id: "header",

            template: _.template(headerHTML),

            events: {
                "click #logout-button": "signout"
            },

            render: function() {
                var user = null;
                if (environment.signed()) {
                    user = {
                        "name": (environment.user.get("first_name") + ' ' + environment.user.get("last_name")).trim()
                    };
                }
            
                this.$el.html(this.template({"user": user}));

                return this;
            },

            signout: function (event) {
                environment.user.signout();
            }
        });    
    }
);
