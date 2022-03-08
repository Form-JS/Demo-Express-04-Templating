const chalk = require('chalk');
const express = require('express');

const port = 8080;
const app = express();





app.listen(port, () => {
    console.log(chalk.magenta(`Server up on port ${port}`));
});