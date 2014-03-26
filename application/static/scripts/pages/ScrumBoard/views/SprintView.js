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

                environment.issues.on("reset", this.draw, this);
                environment.issues.fetch({"reset": true});

                return this;
            },
            
            draw: function (collection, options) {
                collection.each(this.issue, this);
            },
            
            issue: function (issue) {              
                var view = new IssueView({item: issue});
                view.render();
                
                var selector = ".todo";
                if (issue.get("status") == "doing") {
                    selector = ".doing";
                } else if (issue.get("status") == "") {
                    selector = ".done";
                }
                
                this.$(selector).append(view.el);
            },

            equalColumns: function (selector) {
                var tallestColumn = 0;
                $(selector).height('100%');
                _.each($(selector), function(column) {
                    var $currentHeight = $(column).height();
                    if ($currentHeight > tallestColumn) {
                        tallestColumn = $currentHeight;
                    }
                });
                $(selector).height(tallestColumn + 50);
            },
        });    
    }
);
