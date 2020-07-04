import mongoose from 'mongoose';

var Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    if(!req.body){
        return res.err("request false");
    }
    var newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        res.json(Product)
    })
  }