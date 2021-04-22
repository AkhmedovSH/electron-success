import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Index() {
	const [data, setData] = useState([])

	useEffect(() => {
    getProducts()
  }, [])

	async function getProducts() {
		await axios.get(`http://localhost:5000/products`).then(response => {
			setData(response.data)
		})
	}

	async function deleteItem(id) {
		await axios.delete('http://localhost:5000/products/' + id).then(
			getProducts()
		)
	}

	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-between mb-3">
					<div>
						<input type="text" className="form-control" placeholder="Поиск..." />
					</div>
					<Link to={'/products/create'} className="btn btn-success">Add</Link>
				</div>
				<table className="table-striped table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) =>
							<tr key={index}>
								<td>{item.id}</td>
								<td>
									<Link to={'/product/' + item.id}>{item.name}</Link>
								</td>
								<td>
									<div className="d-flex">
										<Link className="btn-sm btn-primary mr-4" to={'/products/update/' + item.id}>EDIT</Link>
										<button className="btn-sm btn-danger" onClick={() => deleteItem(item.id)}>DELETE</button>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Index
