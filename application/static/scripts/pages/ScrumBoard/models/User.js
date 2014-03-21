define([],

    function() {
        return Backbone.Model.extend({
            idAttribute : "_id",
            url: function () {
                return "/api/user/" + this.id + "/";
            }
        });
    }
)
