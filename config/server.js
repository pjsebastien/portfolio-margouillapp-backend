module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: 1340,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
