const express = require('express');
const app = express;

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
    res.send();
});
  
app.listen(PORT, () => console.log('Online'));

module.exports = app;
