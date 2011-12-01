qx.Class.define("fs.view.DataSearchDialog",
{
  extend: qx.ui.container.Composite,
  
  construct: function() 
  {
    this.base(arguments);
    this.set({
        layout: new qx.ui.layout.VBox(0)
      });
    var titleRow = new qx.ui.container.Composite(new qx.ui.layout.HBox());
    var closeButton = new qx.ui.form.Button().set({
        appearance: "window/close-button",
        margin: 4
      });
    closeButton.addListener("execute", function (e) {
        this.fireEvent("close");
      }, this);
    titleRow.add(new qx.ui.core.Spacer(), {flex:1});
    titleRow.add(closeButton);
    
    var inputRow = new qx.ui.container.Composite(new qx.ui.layout.HBox(4)).set({
        padding: [0, 6]
      });
    var searchBox = new qx.ui.form.TextField().set({
        placeholder: "Location or Address",
        minWidth: 200,
        margin: 0
      });
    var searchButton = new qx.ui.form.Button(null, "fs/img/search.png").set({
        margin: 0
      });
    inputRow.add(searchBox);
    inputRow.add(searchButton);
    
    var model = qx.data.marshal.Json.createModel([ "Result Number 1", "Result Number 2"]);
    var addressResultList = new qx.ui.list.List(model).set({
        margin: 6
      });

    this.add(titleRow);
    this.add(inputRow);
    this.add(addressResultList, {flex:1});
  },
  
  events:
  {
    close: "qx.event.type.Event"
  }
});