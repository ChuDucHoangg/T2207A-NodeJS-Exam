const Product = require("./../models/product.model");

exports.Product = async (req, res) =>{
    try{
        const products = await Product.find().exec();
        res.render("products", { products:products }); 
    }catch{
        res.send(err);
    }
}

exports.FormProduct = async (req, res)=>{
    try{
        const data = req.body;
        data.url = req._parsedOriginalUrl.path;
        res.render("formproduct",{product: data});
    }catch (error) {
        res.send(error);
    }
}

exports.PostFormProduct = async (req, res)=>{
    try {
        const data = req.body;
        const product = new Product(data);
        await product.save();
        res.redirect("/");
    } catch (error) {
        res.send(error);
    }
}

exports.Delete =  async (req,res)=>{
    const _id = req.params.id;
    try {
        await Product.findByIdAndDelete(_id);
        res.redirect("/");
    } catch (error) {
        res.redirect("/");
    }
}