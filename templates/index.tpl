<h3>Hello {{name}}!</h3>
<p>You have <b>{{unread}}</b>/{{total}} unread messages.</p>

<div class='progress'>
    <!-- You can use JavaScript expressions in templates! -->
    <div style='width: {{ 100 * unread / total }}%;'></div>
</div>