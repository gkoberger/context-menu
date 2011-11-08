;(function ( $, window, document, undefined ) {
    var pluginName = 'contextmenu',
        defaults = { },
        menu = $('<menu>', {'type': 'context', 'id': 'jquerycontextmenu', 'css': {'margin': 0}});

    // Add the base menu
    $(function() {
        menu.appendTo($('body'));
    });

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
                var callback = v.callback,
                    options = {},
                    menuitem = $('<menuitem>', v);

                function clone(o) {
                    function c(o) {
                        for (var i in o) {
                            this[i] = o[i];
                        }
                    }
                    return new c(o);
                };

                options = clone(v);
                delete options['callback'];

                menuitem.click(function() {
                    if(callback) {
                        callback.apply($el);
                    }
                });
                menu.append(menuitem);
            });
        });

    };

    $.fn[pluginName] = function ( label, item, callback ) {
        if(typeof item == "function") {
            item = {'callback': item};
        } else {
            item['callback'] = callback;
        }
        item['label'] = label;
        return this.each(function () {
            item = $.extend({'callback': false}, item);
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, item ));
            } else {
                $.data(this, 'plugin_' + pluginName).items.push(item);
            }
        });
    }

})( jQuery, window, document );
