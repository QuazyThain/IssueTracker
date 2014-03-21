define(["text!pages/ScrumBoard/html/BacklogView.html",
        "css!pages/ScrumBoard/css/BacklogView.css",
        "pages/ScrumBoard/collections/Issues"],

    function(backlogHTML, backlogCSS, Issues) {
        return Backbone.View.extend({
            id: "backlog",

            template: _.template(backlogHTML),

            initialize: function(options) {
                this.issues = new Issues();
            },

            render: function () {
                this.$el.html(this.template());

                this.issues.fetch({"reset": true});

                return this;
            }
        });    
    }
);
