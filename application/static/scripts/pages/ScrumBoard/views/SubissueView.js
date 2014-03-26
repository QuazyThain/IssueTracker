define(["text!pages/ScrumBoard/html/SubissueView.html",
        "css!pages/ScrumBoard/css/SubissueView.css"],

    function(subissueHTML, subissueCSS) {
        return Backbone.View.extend({
            className: "subissue-wrapper",

            template: _.template(subissueHTML),

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
