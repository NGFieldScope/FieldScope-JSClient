/*
#asset(fs/*)
*/

qx.Class.define("fs.view.FieldScopePanel",
{
  extend: qx.ui.container.Composite,
  
  construct: function() 
  {
    this.base(arguments, new qx.ui.layout.VBox());

    var header = new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({
        backgroundColor: "#2D2D2D",
        textColor: "#CCCCCC"
      });
    
    var menu = new qx.ui.form.ToggleButton("erussell@ngs.org", "fs/img/arrow_d.png").set({
        appearance: "header-link-button"
      });
    var popup = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
        position: "bottom-left"
      });
    popup.addListener("changeVisibility", function(e) {
        menu.setValue(popup.getVisibility() == "visible");
      });
    popup.add(new fs.view.UserDialog());
    menu.addListener("click", function(e) {
        popup.placeToWidget(menu);
        popup.show();
      }, this);
    
    header.add(new qx.ui.basic.Image("fs/img/ng.png").set({
        margin: 2
      }));
    header.add(new qx.ui.core.Spacer(), {flex: 1});
    header.add(new qx.ui.basic.Image("fs/img/html5.png").set({
        margin: 6
      }));
    header.add(new qx.ui.core.Spacer(8, 0));
    header.add(menu);
    header.add(new qx.ui.core.Spacer(8, 0));
    
    var bottomPanel = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    var controlPanel = new fs.view.ControlPanel();
    var mapPanel = new fs.view.LeafletMap();
    
    bottomPanel.add(controlPanel);
    bottomPanel.add(mapPanel.getWidget(), {flex:1});
    
    this.add(header);
    this.add(bottomPanel, {flex:1});
  }
});