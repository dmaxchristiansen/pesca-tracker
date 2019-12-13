const products = require("../controllers/products.js");

module.exports = app => {

    app.get("/api/products", products.index);

    app.get("/api/products/:id", products.show);

    app.post("/api/add", products.addProduct);

    app.put("/api/edit/:id", products.editProduct);

    app.delete("/api/delete/:id", products.deleteProduct);

    app.post("/api/ratings/:Id", (req, res) => {
        products.addRating(req, res);
    });
}