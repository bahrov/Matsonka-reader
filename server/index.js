const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

//TEST
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
