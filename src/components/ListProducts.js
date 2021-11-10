import React, { Fragment, useEffect, useState } from "react";

const ListProducts = () => {
	const [products, setProducts] = useState([]);
	const [sku, setSku] = useState("");

	const deleteProduct = async (id) => {
		try {
			const deleteProduct = await fetch(`http://localhost:5000/products/${id}`, {
				method: "DELETE"
			});

			setProducts(products.filter(product => product.scandi_id !== id));
		} catch (err) {
			console.error(err.message)
		}
	}

	const getProducts = async () => {
		try {
			const response = await fetch("http://localhost:5000/products")
			const jsonData = await response.json()

			setProducts(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Fragment>		
		<h1>Product List</h1>
				{" "}
		<table className="table">
    <thead>
      <tr>
        <th>sku</th>
        <th>name</th>
        <th>price</th>
        <th>type</th>
        <th>Delete</th>
      </tr>
    </thead>
    	<tbody>
    		{products.map(product => (
    			<tr key={product.scandi_id}>
    				<td>{product.sku}</td>
    				<td>{product.name}</td>
    				<td>{product.price}</td>
    				<td>{product.type}</td>
    				<td>
    				<button onClick={() => deleteProduct(product.scandi_id)}>delete</button>
    				</td>
    			</tr>
    			))}
    	</tbody>
      </table>
	</Fragment>
)};

export default ListProducts;