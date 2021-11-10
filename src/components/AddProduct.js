import React, { Fragment, useState } from "react";

const AddProduct = () => {
	const [sku, setSku] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [type, setType] = useState("");

	const onSubmitForm = async e => {
		e.preventDefault();
		try {
			const body = { sku, name, price, type };
			const response = await fetch("https://radiant-badlands-87312.herokuapp.com/products", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});

			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<h1> Product Add</h1>
			<form onSubmit={onSubmitForm}><h5><button>Save</button><input type="reset" value="Cancel"/><br />
				SKU<input type="text" required value={sku} onChange={e => setSku(e.target.value)}/><br />
				Name<input type="text" required value={name} onChange={e => setName(e.target.value)}/><br />
				Price($)<input type="text" required value={price} onChange={e => setPrice(e.target.value)}/><br />
				Type Switcher<select value={type} onChange={e => setType(e.target.value)}>
					<option>Type Switcher</option>
					<option>DVD</option>
					<option>Furniture</option>
					<option>Book</option>
					</select>
				</h5>
			</form>
		</Fragment>
	);
}

export default AddProduct;