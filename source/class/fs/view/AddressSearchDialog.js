qx.Class.define("fs.view.AddressSearchDialog",
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
        margin: 4,
        cursor: "pointer"
      });
    closeButton.addListener("execute", function (e) {
        this.fireEvent("close");
      }, this);
    titleRow.add(new qx.ui.core.Spacer(), { flex: 1 });
    titleRow.add(closeButton);
    
    var inputRow = new qx.ui.container.Composite(new qx.ui.layout.HBox(4)).set({
        padding: [0, 6]
      });
    var searchBox = new qx.ui.form.TextField().set({
        placeholder: "Location or Address",
        minWidth: 200,
        margin: 0
      });
    searchBox.addListener("input", function (e) {
        searchButton.setEnabled((e.getData().length > 0) && (model.getState() == "new"));
        model.setAddress(e.getData());
      });
    searchBox.addListener("keypress", function (e) {
        if ((e.getKeyIdentifier() == "Enter") && searchButton.getEnabled()) {
          searchButton.execute();
        }
      });
    var searchButton = new qx.ui.form.Button(null, "fs/img/search.png").set({
        margin: 0,
        enabled: false
      });
    searchButton.addListener("execute", function (e) {
        var loader = fs.io.AddressLoader.getInstance();
        loader.load(model);
      });
    inputRow.add(searchBox);
    inputRow.add(searchButton);
    
    this.__stack = new qx.ui.container.Stack().set({
        margin: 6
      });
    
    var model = new fs.model.AddressQuery();
    this.__list = new qx.ui.form.List();
    
    this.__loading = new qx.ui.container.Composite(new qx.ui.layout.HBox(0, "center"));
    var loadImage = new qx.ui.basic.Image("fs/img/loading32.gif");
    loadImage.setAlignY("middle");
    this.__loading.add(loadImage);
    
    this.__stack.add(this.__list);
    this.__stack.add(this.__loading);
    
    this.add(titleRow);
    this.add(inputRow);
    this.add(this.__stack, {flex:1});
    
    var controller = new qx.data.controller.List(null, this.__list, "address");
    model.bind("candidates", controller, "model");
    model.bind("state", this, "loading", { converter: function (state) {
        return state == "loading";
      }});
    model.bind("state", searchButton, "enabled", { converter: function (state) {
        return (state == "new") && 
               (searchBox.getValue() != null);
               (searchBox.getValue().length > 0);
      }});
  },
  
  events:
  {
    close: "qx.event.type.Event"
  },
  
  members: 
  {
    __stack: null,
    __list: null,
    __loading: null,
    
    _applyLoading: function (value, old) {
      if (value) {
        this.__stack.setSelection([this.__loading]);
      } else {
        this.__stack.setSelection([this.__list]);
      }
    }
  },
  
  properties:
  {
    loading:
    {
      check: "Boolean",
      init: false,
      apply: "_applyLoading"
    }
  },
  
  destruct: function()
  {
    this._disposeObjects("__stack", "__list", "__loading");
  }
});