qx.Class.define("fs.view.ControlPopupButton",
{
  extend: qx.ui.container.Composite,
  
  construct: function(name, popupContent) {
    this.base(arguments, new qx.ui.layout.HBox());
    var button = new qx.ui.form.ToggleButton(name, "fs/img/arrow_r.png").set({
        appearance: "link-button"
      });
    var popup = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
        position: "right-top"
      });
    popup.addListener("changeVisibility", function(e) {
        button.setValue(popup.getVisibility() == "visible");
      });
    if (popupContent != null) {
      popup.add(popupContent);
      popupContent.addListener("close", function (e) {
          button.setValue(false);
        });
    }
    button.addListener("changeValue", function(e) {
        if (button.getValue()) {
          popup.placeToWidget(button);
          popup.show();
        } else {
          popup.setVisibility("excluded");
        } 
      }, this);
    this.add(new qx.ui.core.Spacer, {flex: 1});
    this.add(button);
  }
});