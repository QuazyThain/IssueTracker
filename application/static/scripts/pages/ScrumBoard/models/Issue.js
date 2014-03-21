define(["pages/ScrumBoard/collections/Subissues"],

    function (Subissues) {
        return Backbone.Model.extend({
            idAttribute: "_id",
            urlRoot: "/api/issue/",

            initialize: function () {
                this.subissues = new Subissues();
                this.subissues.fetch({"reset": true, "data": {"issue": this.id}});
            }
        });
    }
)
