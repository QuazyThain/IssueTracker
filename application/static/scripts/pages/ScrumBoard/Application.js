define(["pages/ScrumBoard/Environment",
        "pages/ScrumBoard/routers/PageRouter",
        "pages/ScrumBoard/models/User"],

    function(environment, PageRouter, User) {
        var _public = {};
        var _private = {};

        _private.init = function () {
            environment.router = new PageRouter();

            environment.user = new User();
            environment.user.url = '/api/user/current/';
            environment.user.fetch({async: false});

            environment.user.on("sync", _private.userChange);
        };

        _private.userChange = function (model, resp, options) {
            environment.router.navigate("sprint", {trigger: true});
        };

        _public.start = function () {
            _private.init();
            Backbone.history.start();
        };

        return _public;
    }
);
