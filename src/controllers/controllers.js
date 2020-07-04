import mongoose from 'mongoose';

var Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    if(!req.body){
        return res.err("request false");
    }
    var newProduct = new Product(req.body);
    newProduct.save((err, Product) => {
        res.json(Product);
    })
  }

  export const getProducts = (req, res) => {
    if(!req.body){
        return res.err("request false");
    }
    Product.find({}, (err, Product) => {
        res.json(Product);
    })
  }

  export const getProductWithID = (req, res) => {
    if(!req.body){
        return res.err("request false");
    }
    Product.findById(req.params.ProductID, (err, Product) => {
        res.json(Product);
    })
}

export const updateProduct = (req, res) => {
    if(!req.body){
        return res.err("request false");
    }
    Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
        res.json(Product);
    })
}

export const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {
        res.json({ message: 'successfully deleted product' });
    })
}