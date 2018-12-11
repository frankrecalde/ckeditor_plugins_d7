CKEDITOR.dialog.add('customLinkDialog', function (editor) {
  return {
    title: 'Custom Button Link Properties',
    minWidth: 400,
    minHeight: 200,
    contents: [
      {
        id: 'tab-basic',
        label: 'Link Info',
        elements: [
          {
            type: 'text',
            id: 'text',
            label: 'Display Text',
            validate: CKEDITOR.dialog.validate.notEmpty("Display text field cannot be empty.")
          },
          {
            type: 'text',
            id: 'url',
            label: 'URL',
            validate: CKEDITOR.dialog.validate.notEmpty("URL field cannot be empty.")
          }
        ]
      },
    ],
    onOk: function () {
      var dialog = this;

      var custom_button_link = editor.document.createElement('a');
      custom_button_link.setAttribute('title', dialog.getValueOf('tab-basic', 'text'));
      custom_button_link.setAttribute('href', dialog.getValueOf('tab-basic', 'url'));
      custom_button_link.setAttribute('class', 'au-btn ckeditor_plugins_custom_button_link');
      custom_button_link.setAttribute('target', '_blank');
      custom_button_link.setText(dialog.getValueOf('tab-basic', 'text'));

      editor.insertElement(custom_button_link);
    }
  };
});
