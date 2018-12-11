(function ($) {
  CKEDITOR.plugins.add('expandcollapse', {
    init: function (editor) {
      editor.addCommand('expandcollapse_command', {
        exec: function (editor) {
          //here is where we tell CKEditor what to do.
          editor.insertHtml('<div class="ckeditor_plugins_expandcollapse"><a href="#" class="ckeditor_plugins_expand">Show all</a> / <a href="#" class="ckeditor_plugins_collapse">Hide all</a></div>');
        }
      });

      editor.ui.addButton('ExpandCollapseButton', {
        label: 'Expand / Collapse all', //this is the tooltip text for the button
        command: 'expandcollapse_command',
        icon: this.path + 'images/expand-collapse.png'
      });
    }
  });
})(jQuery);
