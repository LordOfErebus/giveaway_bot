module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db/database.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    dialect: "sqlite",
    storage: "./db/database.sqlite"
  },
};