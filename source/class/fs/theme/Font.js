qx.Theme.define("fs.theme.Font",
{
  extend: qx.theme.modern.Font,

  fonts:
  {
    "default":
    {
      size: (qx.core.Environment.get("os.name") == "win" &&
        (qx.core.Environment.get("os.version") == "7" ||
        qx.core.Environment.get("os.version") == "vista")) ? 12 : 11,
      lineHeight: 1.4,
      family: qx.core.Environment.get("os.name") == "osx" ?
        [ "Arial", "Lucida Grande" ] :
        ((qx.core.Environment.get("os.name") == "win" &&
          (qx.core.Environment.get("os.version") == "7" ||
          qx.core.Environment.get("os.version") == "vista"))) ?
        [ "Arial", "Segoe UI", "Candara" ] :
        [ "Arial", "Tahoma", "Liberation Sans", "sans-serif" ]
    },

    "bold":
    {
      size: (qx.core.Environment.get("os.name") == "win" &&
        (qx.core.Environment.get("os.version") == "7" ||
        qx.core.Environment.get("os.version") == "vista")) ? 12 : 11,
      lineHeight: 1.4,
      family: qx.core.Environment.get("os.name") == "osx" ?
        [ "Arial", "Lucida Grande" ] :
        ((qx.core.Environment.get("os.name") == "win" &&
          (qx.core.Environment.get("os.version") == "7" ||
          qx.core.Environment.get("os.version") == "vista"))) ?
        [ "Arial", "Segoe UI", "Candara" ] :
        [ "Arial", "Tahoma", "Liberation Sans", "sans-serif" ],
      bold: true
    },

    "small":
    {
      size: (qx.core.Environment.get("os.name") == "win" &&
        (qx.core.Environment.get("os.version") == "7" ||
        qx.core.Environment.get("os.version") == "vista")) ? 11 : 10,
      lineHeight: 1.4,
      family: qx.core.Environment.get("os.name") == "osx" ?
        [ "Arial", "Lucida Grande" ] :
        ((qx.core.Environment.get("os.name") == "win" &&
          (qx.core.Environment.get("os.version") == "7" ||
          qx.core.Environment.get("os.version") == "vista"))) ?
        [ "Arial", "Segoe UI", "Candara" ] :
        [ "Arial", "Tahoma", "Liberation Sans", "sans-serif" ]
    },

    "monospace":
    {
      size: 11,
      lineHeight: 1.4,
      family: qx.core.Environment.get("os.name") == "osx" ?
        [ "Monaco", "Lucida Console" ] :
        ((qx.core.Environment.get("os.name") == "win" &&
          (qx.core.Environment.get("os.version") == "7" ||
          qx.core.Environment.get("os.version") == "vista"))) ?
        [ "Consolas" ] :
        [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
    }
  }
});