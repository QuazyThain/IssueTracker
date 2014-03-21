define([],

    function () {
        return {
            name: "Issue Tracker",

            signed: function () {
                // alert(this.user.get("email"));
                return this.user.get("email") ? true : false;
            }
        }
    }
);
