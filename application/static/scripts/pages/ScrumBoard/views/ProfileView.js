define(["text!pages/ScrumBoard/html/ProfileView.html",
        "css!pages/ScrumBoard/css/ProfileView.css"],

    function(profileHTML, profileCSS) {
        return Backbone.View.extend({
            id: "profile",

            template: _.template(profileHTML),

            render: function() {
                this.$el.html(this.template());
 
                return this;
            }
        });    
    }
);
