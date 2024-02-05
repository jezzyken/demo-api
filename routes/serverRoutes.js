const productRoutes = require("./productRoute");

const serverRoutes = (app) => {
  app.use(`/api`, productRoutes);
}

module.exports = serverRoutes;