/**
 * @file
 * Functionality to enable URL button functionality in CKEditor.
 */

(function () {
  'use strict';

  // Register plugin.
  CKEDITOR.plugins.add('myservice_link', {
    hidpi: true,
    icons: 'myservice_link',
    init: function (editor) {
      // Add single button.
      editor.ui.addButton('MyServiceLinkButton', {
        command: 'addMyServiceLinkCmd',
        icon: this.path + 'icons/myservice_link.png',
        label: Drupal.t('Insert MyService link')
      });

      // Add CSS for edition state.
      var cssPath = this.path + 'css/myservice_link.css';
      editor.on('mode', function () {
        if (editor.mode === 'wysiwyg') {
          this.document.appendStyleSheet(cssPath);
        }
      });

      // Command to insert initial structure.
      editor.addCommand('addMyServiceLinkCmd', {
        exec: function (editor) {
          var myservice_btn = new CKEDITOR.dom.element.createFromHtml(
            '<a class="au-btn ckeditor_plugins_myservice_link" href="https://www.dva.gov.au/myservice/" target="_blank">' +
            'Login to MyService' +
            '</a>');
          editor.insertElement(myservice_btn);
        }
      });

    }
  });
})();
