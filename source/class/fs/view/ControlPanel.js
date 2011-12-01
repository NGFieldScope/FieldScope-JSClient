qx.Class.define("fs.view.ControlPanel",
{
  extend: qx.ui.container.Composite,
  
  construct: function() 
  {
    this.base(arguments, new qx.ui.layout.VBox(4));
    this.set({
        /*padding: 4,*/
        backgroundColor: "#E9E9E9"
      });
  
    this.add(new qx.ui.basic.Label("FieldScope").set({
        font: qx.bom.Font.fromString("20px Arial bold"),
        margin: 4
      }));
    this.add(new qx.ui.menu.Separator());
    this.add(new qx.ui.basic.Label("Search").set({ 
        appearance: "control-category-label"
      }));
    this.add(new fs.view.ControlPopupButton("PLACE", new fs.view.AddressSearchDialog()));
    this.add(new fs.view.ControlPopupButton("DATA", new fs.view.DataSearchDialog()));
    this.add(new qx.ui.menu.Separator());
    this.add(new qx.ui.basic.Label("Layers").set({ 
        appearance: "control-category-label"
      }));
    this.add(new fs.view.ControlPopupButton("LEGEND"));
    this.add(new fs.view.ControlPopupButton("ADD/REMOVE"));
    this.add(new fs.view.ControlPopupButton("ARRANGE"));
    this.add(new qx.ui.menu.Separator());
    this.add(new qx.ui.basic.Label("Observations").set({ 
        appearance: "control-category-label"
      }));
    this.add(new fs.view.ControlPopupButton("LEGEND"));
    this.add(new fs.view.ControlPopupButton("ADD/EDIT"));
    this.add(new fs.view.ControlPopupButton("FILTER"));
    this.add(new qx.ui.menu.Separator());
    this.add(new qx.ui.basic.Label("Analysis").set({ 
        appearance: "control-category-label"
      }));
    this.add(new fs.view.ControlPopupButton("MEASURE"));
    this.add(new fs.view.ControlPopupButton("FLOW PATH"));
    this.add(new fs.view.ControlPopupButton("WATERSHED"));
    this.add(new fs.view.ControlPopupButton("TIME SERIES"));
    this.add(new qx.ui.menu.Separator());
    this.add(new qx.ui.basic.Label("Select").set({ 
        appearance: "control-category-label"
      }));
    this.add(new fs.view.ControlPopupButton("POINT"));
    this.add(new fs.view.ControlPopupButton("AREA"));
    this.add(new qx.ui.menu.Separator());
    this.add(new fs.view.ControlPopupButton("DRAW"));
    this.add(new fs.view.ControlPopupButton("SHARE"));
    this.add(new fs.view.ControlPopupButton("STORIES"));
  }
});