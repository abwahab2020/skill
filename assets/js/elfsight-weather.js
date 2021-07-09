(function() {
    "use strict";

    //= ../app/app/dist/weather.js

    document.addEventListener('DOMContentLoaded', function() {
        var widgets = document.querySelectorAll('[data-elfsight-<%= plugin %>-options]');

        Array.prototype.slice.call(widgets).forEach(function(widget) {
            var version = widget.getAttribute('data-elfsight-<%= plugin %>-version');
            var options = widget.getAttribute('data-elfsight-<%= plugin %>-options');
            var data_id = widget.getAttribute('data-elfsight-widget-id');
            var data = JSON.parse(decodeURIComponent(options));

            widget.removeAttribute('data-elfsight-<%= plugin %>-version');
            widget.removeAttribute('data-elfsight-<%= plugin %>-options');

            widget.data = {
                options: data,
                version: version,
                data_id: data_id,
                app_name: '<%= plugin %>'
            };
        });
    })
})();
