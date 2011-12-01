qx.Theme.define("fs.theme.Decoration",
{
  extend: qx.theme.modern.Decoration,

  decorations:
  {
    "link-button-over":
    {
      decorator: qx.ui.decoration.Background,
      style:
      {
        backgroundColor: "link-button-over"
      }
    },
    
    "link-button-pressed":
    {
      decorator: qx.ui.decoration.Background,
      style:
      {
        backgroundColor: "link-button-pressed"
      }
    },
    
    "header-button-selected":
    {
      decorator: qx.ui.decoration.Background,
      style:
      {
        backgroundColor: "header-button-selected"
      }
    },
    
    "header-button-over":
    {
      decorator: qx.ui.decoration.Background,
      style:
      {
        backgroundColor: "header-button-over"
      }
    }
  }
});