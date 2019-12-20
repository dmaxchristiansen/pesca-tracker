const mongoose = require('mongoose')
const Product = mongoose.model("Product");
const Rating = mongoose.model("Rating");

module.exports = {
    index: function(req, res){
        Product.find().sort("-catchDate")
            .then(aBunchOFish => res.json(aBunchOFish))
            .catch(err => res.status(500).json(err))
    },

    show: function(req, res){
        let id = req.params.id;
        Product.findOne({_id: id},function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(product);
            }
        })
    },

    addProduct: (req, res) => {
        Product.create(req.body)
            .then(res => res.json(res))
            .catch(err => res.json(err))
    },

    editProduct: function(req, res){
        let id = req.params.id;
        Product.findById(id, function(err, product){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.species){
                    product.species = req.body.species; 
                }
                if(req.body.state){
                    product.state = req.body.state; 
                }
                if(req.body.bodyOfWater){
                    product.bodyOfWater = req.body.bodyOfWater; 
                }
                if(req.body.length){
                    product.length = req.body.length; 
                }
                if(req.body.catchDate){
                    product.catchDate = req.body.catchDate;
                }
                if(req.body.image){
                    product.image = req.body.image;
                }
            }
            product.save(function(err){
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", product: product})
                }
            })
        })
    },

    deleteProduct: function(req, res){
        let id = req.params.id;
        Product.remove({_id: id},function(err){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", removed: true});
            }
        })
    },
    
    addRating: function(req, res){
        Rating.create({rating: req.body.rating, comment: req.body.comment, name: req.body.name}, function(err, newRating){
            console.log(req.body)
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                Product.findOneAndUpdate({_id: req.params.Id}, {$push: {ratings: newRating}}, function(err, data){
                    if(err){
                        res.json({message: "Error!", error: err});
                    }
                    else{
                        res.json({message: "Success!", added: true});
                    }
                })
            }
        })
    }
}

