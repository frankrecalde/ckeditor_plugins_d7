/**
 * @file
 * Functionality to enable URL button functionality in CKEditor.
 */

(function () {
  'use strict';

  // Register plugin.
  CKEDITOR.plugins.add('custom_button_link', {
    hidpi: true,
    icons: 'custom_button_link',
    init: function (editor) {
      editor.addCommand('addCustomButtonLinkCmd', new CKEDITOR.dialogCommand('customLinkDialog'));
      editor.ui.addButton('CustomButtonLink', {
        label: Drupal.t('Insert custom button link'),
        command: 'addCustomButtonLinkCmd',
        icon: this.path + 'icons/custom_button_link.png',
        toolbar: 'insert'
      });

      // Add CSS for edition state.
      var cssPath = this.path + 'css/custom_button_link.css';
      editor.on('mode', function () {
        if (editor.mode === 'wysiwyg') {
          this.document.appendStyleSheet(cssPath);
        }
      });

      CKEDITOR.dialog.add('customLinkDialog', this.path + 'dialogs/custom_button_link.js');
    }
  });
})();
