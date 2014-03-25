define(["pages/ScrumBoard/Environment",
        "text!pages/ScrumBoard/html/SprintView.html",
        "css!pages/ScrumBoard/css/SprintView.css",
        "pages/ScrumBoard/collections/Issues",
        "pages/ScrumBoard/views/IssueView"],

    function(environment, sprintHTML, sprintCSS, Issues, IssueView) {
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
                environment.issues.on("reset", this.draw, this);

                return this;
            },
            
            draw: function (collection, options) {
                collection.each(this.issue, this);
            },
            
            issue: function (issue) {
                alert(issue.get("name"));
                
                var view = new IssueView({item: issue});
                view.render();
                
                var selector = ".todo";
                if (issue.get("status") == "doing") {
                    selector = ".doing";
                } else if (issue.get("status") == "") {
                    selector = ".done";
                }
                
                this.$(selector).append(view.el);
            }
        });    
    }
);
