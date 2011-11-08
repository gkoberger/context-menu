REQUIREMENTS
===========

 * jQuery (any should work)
 * Firefox 8+

WARNING
======

This is an early demo. It should be used more as a reference than a stable jQuery plugin. We'll call it version 0.1.

DEMO
====

You can play with a simple demo here:
http://gkoberger.github.com/context-menu

WHY?
====

Basically, the way contextmenu is implemented makes it very hard to figure out what element was right clicked. If only one element can possibly be
affected, that's fine. However, it makes it incredibly hard for you to add context menu options to a list of things.

PHILOSOPHY
==========

This isn't a polyfill, and won't work on any browser. I don't want to have to create a fallback or anything like that -- I merely wanted to make a simple
way for people to take advantage of the new context menu features of Firefox 8. So, this can't yet be used for must-have features. However, it's perfect
if you want to give users with Firefox 8 extra functionality.

TODO
====
There are a lot of important features missing:

 * Order the menu items correctly
 * Event manipulation (ability to stop propagation, etc)
 * Separators
 * Sub menus

THE API
======

Here's the structure:

    $(selector).contextmenu('Title', options, callback);

Options is optional:

    $(selector).contextmenu('Title', callback);

The callback's `this` is the element that was right clicked on.

Options:

 * 'icon': pass in a URL to an icon

THE CODE
========
View/edit/play with: http://jsfiddle.net/DEECS/2/

HTML:

    <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    </ul>

JavaScript:

    <script>
    $(function() {
        $('ul').contextmenu('Color UL', function() { $(this).css('background-color', 'blue'); });
        $('ul li').contextmenu('Delete LI', {'icon': 'http://www.famfamfam.com/lab/icons/silk/icons/delete.png'}, function() { $(this).remove(); });
        $('ul li').contextmenu('Color LI', function() { $(this).css('background-color', 'red'); });
    });
    </script>
