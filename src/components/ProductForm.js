import {React, useState} from 'react'
import { useDispatch } from "react-redux";
import { addProduct } from '../store/actions';

const ProductForm = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        name: "",
        price: 1,
        description: "",
        image: ""
    })

    const handleChange = (event) => setProduct({...product, [event.target.name]: event.target.value});

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct(product))
    }

    return (
        <div>
            <form className="container" onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value={product.name} onChange={handleChange} name="name" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" value={product.price}onChange={handleChange}  name="price" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" value={product.description} onChange={handleChange} name="description" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" value={product.image}onChange={handleChange}  name="image" className="form-control"/>
                </div>

                <button type="submit"className="btn btn-success" >Create</button>
            </form>
        </div>
    )
}

export default ProductForm;
