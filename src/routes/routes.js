import { controllers } from "../controllers/controllers";

const routes = (app) => { 
    app.route('/products');
    app.post(addnewProduct);
 };