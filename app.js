const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('One Manhattan Square..225');
});

app.listen(3000, () => {
    console.log(`listening on port: ${3000}`);
});

//token
//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