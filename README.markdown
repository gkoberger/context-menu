How To Use It
=============
    <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    </ul>

    <script>
    $(function() {
        $('ul').contextmenu('Color UL', function() { $(this).css('background-color', 'blue'); });
        $('ul li').contextmenu('Delete LI', function() { $(this).remove(); });
        $('ul li').contextmenu('Color LI', function() { $(this).css('background-color', 'red'); });
    });
    </script>