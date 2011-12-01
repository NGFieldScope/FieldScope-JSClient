qx.Class.define("fs.view.UserDialog",
{
  extend: qx.ui.container.Composite,
  
  construct: function() 
  {
    this.base(arguments, new qx.ui.layout.VBox(8));
    this.set({
        backgroundColor: "#FFFFFF",
        padding: [4, 8],
        padding: 8
      });
    var labelPanel = new qx.ui.container.Composite(new qx.ui.layout.VBox());
    labelPanel.add(new qx.ui.basic.Label("Eric Russell").set({
        font: "bold"
      }));
    labelPanel.add(new qx.ui.basic.Label("erussell@ngs.org"));
    
    this.add(labelPanel);
    this.add(new qx.ui.menu.Separator());
    this.add(new qx.ui.form.Button("Account Settings..."));
    this.add(new qx.ui.form.Button("Profile..."));
    this.add(new qx.ui.form.Button("Sign Out"));
  }
});