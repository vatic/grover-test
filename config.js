const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://grover-test-vatagin.herokuapp.com',
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

const PORT = process.env.PORT || 8080;

module.exports = {
  corsOptions,
  PORT,
};

