qx.Theme.define("fs.theme.Appearance",
{
  extend: qx.theme.modern.Appearance,
  
  appearances:
  {
    "control-category-label": 
    {
      alias: "label",
      
      style: function(states)
      {
        return {
          font: "bold",
          alignX: "center"
        };
      }
    },
    
    "link-button":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator = undefined;
        var textColor = "link-button-text"
        
        if (states.pressed) {
          decorator = "link-button-pressed";
          textColor = "link-button-text-over";
        }
        else if (states.checked || states.hovered)
        {
          decorator = "link-button-over";
          textColor = "link-button-text-over";
        }
        else if (states.disabled)
        {
          textColor = "link-button-text-diabled";
        }
        
        return {
          font: "small",
          decorator: decorator,
          textColor: textColor,
          cursor: "pointer",
          shadow: undefined,
          padding: [3, 6],
          margin: [0, 0],
          iconPosition: "right",
          alignX: "right"
        };
      }
    },
    
    "link-button/image":
    {
      style: function(states)
      {
        return {
          opacity: !states.replacement && states.disabled ? 0.5: 1
        };
      }
    },
    
    "link-button/label":
    {
      style: function(states)
      {
        return {
          alignX: "right",
          textAlign: "right"
        };
      }
    },
    
    "header-link-button":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator = undefined;
        var textColor = "header-button-text";
        
        if (states.pressed || states.checked) 
        {
          decorator = "header-button-selected";
          textColor = "header-button-text-selected";
        }
        else if (states.hovered)
        {
          decorator = "header-button-over";
        }
        return {
          decorator: decorator,
          textColor: textColor,
          cursor: "pointer",
          shadow: undefined,
          padding: [3, 6],
          margin: [0, 0],
          iconPosition: "right"
        };
      }
    }
  }
});