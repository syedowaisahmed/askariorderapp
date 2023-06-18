import app from './app.js';

const port = 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});