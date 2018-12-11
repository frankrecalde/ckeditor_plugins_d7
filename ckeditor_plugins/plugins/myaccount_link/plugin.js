/**
 * @file
 * Functionality to enable URL button functionality in CKEditor.
 */

(function () {
  'use strict';

  // Register plugin.
  CKEDITOR.plugins.add('myaccount_link', {
    hidpi: true,
    icons: 'myaccount_link',
    init: function (editor) {
      // Add single button.
      editor.ui.addButton('MyAccountLinkButton', {
        command: 'addMyAccountLinkCmd',
        icon: this.path + 'icons/myaccount_link.png',
        label: Drupal.t('Insert MyAccount link')
      });

      // Add CSS for edition state.
      var cssPath = this.path + 'css/myaccount_link.css';
      editor.on('mode', function () {
        if (editor.mode === 'wysiwyg') {
          this.document.appendStyleSheet(cssPath);
        }
      });

      // Command to insert initial structure.
      editor.addCommand('addMyAccountLinkCmd', {
        exec: function (editor) {
          var myaccount_btn = new CKEDITOR.dom.element.createFromHtml(
            '<a class="au-btn ckeditor_plugins_myaccount_link" href="https://myaccount.dva.gov.au/" target="_blank">' +
            'Login to MyAccount' +
            '</a>');
          editor.insertElement(myaccount_btn);
        }
      });

    }
  });
})();
