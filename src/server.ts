import app from "./app";

import colors from "./utils/console-colors";

app.listen(process.env.PORT || 3000);

console.log(
  `${colors.fgGreen}[INFO]: ${
    colors.reset
  }Starting application in port ${process.env.PORT || 3000}!`
);
