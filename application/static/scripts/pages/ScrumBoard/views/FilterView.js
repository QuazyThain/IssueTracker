define(["text!pages/ScrumBoard/html/FilterView.html",
        "css!pages/ScrumBoard/css/FilterView.css"],

    function(filterHTML, filterCSS) {
        return Backbone.View.extend({
            id: "filter",

            template: _.template(filteHTML),

            events: {
                
            },

            initialize: function (options) {
                
            },

            render: function () {
                this.$el.html(this.template());

                return this;
            },
        });
    }
);
