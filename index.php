<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <title>(Это title)test testeeees tes tes Пример страницы на HTML5</title>
    <link href="css/styles.css" rel="stylesheet">

  </head>
  <body>
    <div id="container">

    </div>

    <script id='template' type='text/ractive'>
        <h3>Hello {{name}}!</h3>
        <p>You have <b>{{unread}}</b>/{{total}} unread messages.</p>

        <div class='progress'>
            <!-- You can use JavaScript expressions in templates! -->
            <div style='width: {{ 100 * unread / total }}%;'></div>
        </div>
    </script>

    <script src='http://cdn.ractivejs.org/latest/ractive.js'></script>
    <script src='js/app.js'></script>
  </body>
</html>
