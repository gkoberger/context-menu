;(function ( $, window, document, undefined ) {
    var pluginName = 'contextmenu',
        defaults = { },
        menu = $('<menu>', {'type': 'context', 'id': 'jquerycontextmenu'});

    // Add the base menu
    menu.appendTo('body');

    function Plugin( element, item ) {
        this.element = element;

        this.items = [item];

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $el = $(this.element),
            items = this.items;

        $el.attr('contextmenu', 'jquerycontextmenu');

        $el.bind('contextmenu', function(e) {
            e.stopPropagation();
            $(menu).empty();
            $(this).trigger('jquerycontextmenu');
        });

        $el.bind('jquerycontextmenu', function() {
            $.each(items, function(k, v) {
                var menuitem = $('<menuitem>', {'label': v.title});
                menuitem.click(function() {
                    v.callback.apply($el);
                });
                menu.append(menuitem);
            });
        });

    };

    $.fn[pluginName] = function ( title, item, callback ) {
        if(typeof item == "function") {
            item = {'callback': item};
        } else {
            item['callback'] = callback;
        }
        item['title'] = title;
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, item ));
            } else {
                $.data(this, 'plugin_' + pluginName).items.push(item);
            }
        });
    }

})( jQuery, window, document );
