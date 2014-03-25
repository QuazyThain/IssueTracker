define(["text!pages/ScrumBoard/html/IssueView.html",
        "css!pages/ScrumBoard/css/IssueView.css"],

    function(issueHTML, issueCSS) {
        return Backbone.View.extend({
            className: "issue-wrapper",

            template: _.template(issueHTML),

            events: {
                
            },

            initialize: function (options) {
                this.item = options.item;
                
            },

            render: function () {
                this.$el.html(this.template({
                    name: this.item.get("name"),
                    description: this.item.get("description")
                }));

                return this;
            },
        });    
    }
);
