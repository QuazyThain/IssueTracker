define(["text!pages/ScrumBoard/html/HeaderView.html",
        "css!pages/ScrumBoard/css/HeaderView.css"],

    function(headerHTML, headerCSS) {
        return Backbone.View.extend({
            id: "header",

            template: _.template(headerHTML),

            render: function() {
                this.$el.html(this.template());
 
                return this;
            }
        });    
    }
);
