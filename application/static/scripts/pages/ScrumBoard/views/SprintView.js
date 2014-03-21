define(["pages/ScrumBoard/Environment",
        "text!pages/ScrumBoard/html/SprintView.html",
        "css!pages/ScrumBoard/css/SprintView.css",
        "pages/ScrumBoard/collections/Issues"],

    function(environment, sprintHTML, sprintCSS, Issues) {
        return Backbone.View.extend({
            id: "sprint",

            template: _.template(sprintHTML),

            events: {
                
            },

            initialize: function(options) {
                environment.issues = new Issues();
            },

            render: function () {
                this.$el.html(this.template());

                environment.issues.fetch({"reset": true});

                return this;
            },
        });    
    }
);
