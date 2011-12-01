qx.Class.define("fs.model.AddressQuery",
{
  extend: qx.core.Object,

  construct: function(title)
  {
    this.base(arguments);
    this.setCandidates(new qx.data.Array());
    this.setAddress("");
  },

  properties:
  {
    address:
    {
      check: "String",
      event: "changeAddress",
      apply: "_applyAddress"
    },
    
    candidates:
    {
      check: "qx.data.Array",
      event: "changeCandidates"
    },
    
    state:
    {
      check: ["new", "loading", "loaded", "error"],
      event: "changeState",
      init: "new"
    }
  },
  
  members: 
  {
    _applyAddress: function (value, old, name) 
    {
      if (this.getCandidates().length > 0) {
        this.setCandidates(new qx.data.Array());
        this.setState("new");
      }
    }
  }
});