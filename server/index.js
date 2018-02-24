const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const requestHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/blog", (req, res) => app.render(req, res, "/"));

  server.get("/", (_, res) => res.redirect("/blog"));

  server.get("/blog/:id", (req, res) => {
    app.render(req, res, "/post", { ...req.query, id: req.params.id });
  });

  server.get("/*", (req, res) => requestHandler(req, res));

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    // tslint:disable-next-line:no-console
    console.log(`server is listening on port ${port}`);
  });
});
