qx.Class.define("fs.io.AddressLoader",
{
  extend: qx.core.Object,
  type: "singleton",
  members:
  {
    load: function (addressQuery)
    {
      addressQuery.setState("loading");
      var url = "http://www.localhost.fieldscope.org:8000/amf/geocode?q="+encodeURI(addressQuery.getAddress())+"&f=jsonp";
      var store = new qx.data.store.Jsonp(url, null, "callback");
      store.addListener("changeState", function (e) {
          if ((e.getData() == "aborted") ||
              (e.getData() == "timeout") ||
              (e.getData() == "failed")) {
            addressQuery.setState("error");
          }
        }, this);
      store.addListener("loaded", function(e) {
          var model = e.getData();
          // check for wrong urls
          if (model == "failed") {
            addressQuery.setState("error");
          } else {
            addressQuery.setCandidates(model.get("Placemark"));
            addressQuery.setState("loaded");
          }
        }, this);
    }
  }
});