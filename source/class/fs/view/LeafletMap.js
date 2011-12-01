/*
#ignore(L.Control.Zoom)
#ignore(L.Control.Position)
#ignore(L.Map)
#ignore(L.LatLng)
#ignore(L.TileLayer)
*/

qx.Class.define("fs.view.LeafletMap", 
{ 
  extend: qx.core.Object,
  
  properties: 
  {
    widget: 
    { 
      check: "Object", 
      init: null 
    }
  },
  
  construct: function( ) 
  {
    var self=this;
    this.base( arguments );

    var tmp = new qx.ui.core.Widget();
    this.setWidget(tmp);
    this.__id = "leaflet_map";
    this.__map = null;
    this.__zoomClass = L.Control.Zoom.extend({
        getPosition: function() {
          return L.Control.Position.TOP_RIGHT;
        }
      });
    
    tmp.addListener("appear", function(e) {
        if( self.__map == null ) {
          var el = self.getWidget().getContentElement();
          qx.bom.element.Attribute.set(el, "id", self.__id);
          qx.html.Element.flush();
          self.__map = new L.Map(self.__id, {
              center: new L.LatLng(38.905, -77.038), 
              zoom: 13,
              zoomControl: false
            });
          var streetMapUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
          var streetMapLayer = new L.TileLayer(streetMapUrl, { maxZoom: 19, attribution: 'Tiles: &copy; Esri' });
          self.__map.addLayer(streetMapLayer);
          self.__map.addControl(new self.__zoomClass());
        }
      }, self);
  },
  
  members: 
  {
    __map: null,
    __id: null,
    __zoomClass: null
  }
});