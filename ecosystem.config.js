module.exports = {
  apps: [
    {
      name: "HTML-CSS-JS",
      script: "serve",
      env: {
        PM2_SERVE_PATH: ".",
        PM2_SERVE_PORT: 3030,
      },
    },
  ],
};
