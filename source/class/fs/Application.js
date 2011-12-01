/*
#asset(fs/*)
*/

qx.Class.define("fs.Application",
{
  extend: qx.application.Standalone,
    
  members:
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main: function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }
      
      var panel = new fs.view.FieldScopePanel();
      
      this.getRoot().add(panel, {edge:0});
    }
  }
});
