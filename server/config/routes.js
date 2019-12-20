const fishers = require("../controllers/fishers.controller.js");

module.exports = app => {

    app.get("/api/fishers", fishers.index);

    app.get("/api/fishers/:id", fishers.show);

    app.post("/api/add", fishers.addProduct);

    app.put("/api/edit/:id", fishers.editProduct);

    app.delete("/api/delete/:id", fishers.deleteProduct);

    app.post("/api/ratings/:Id", (req, res) => {
        fishers.addRating(req, res);
    });

    app.all("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "/public/dist/public/index.html"))
    );
}