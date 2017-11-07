const express = require('express')
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})



app.get('/news', (req, res) => {

})
