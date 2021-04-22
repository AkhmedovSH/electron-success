import React, { useEffect } from 'react'
import { POST, GET } from '../../api/api';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { toast } from 'react-toastify';
toast.configure()
const schema = yup.object().shape({
	data: yup.object().shape({
		title: yup.string().required().min(2),
		price: yup.number().typeError('this is NaN').required().min(2),
		test: yup.string().oneOf(['female', 'male']),
	})
});

function CreateUpdate(props) {
	const { register, handleSubmit, errors, setValue } = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		props.match.params.id !== undefined ? dataCreate(data) : dataUpdate(data)
	}

	function dataCreate(data) {
		console.log('here')
		// POST(data, 'http://localhost:5000/products').then(response => {
		// 	toast("Wow so easy 111 !")
		// })
	}

	function dataUpdate() {
		console.log('here2')
	}

	useEffect(() => {
		async function getData() {
			await GET(`http://localhost:5000/products/${props.match.params.id}`).then(response => {
				setValue('data', {	title: response.title });
			})
		}

    if(props.match.params.id !== undefined) {
			getData()
		}
  }, [props.match.params.id, setValue])

	return (
		<div className="container m-3">
			<div className="col-md-6">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3">
						<label className="form-label">Название</label>
						<input className="form-control" name="data.title" ref={register} autoComplete="off" />
						<ErrorMessage error={errors?.data?.title} />
					</div>
					<div className="mb-3">
						<label className="form-label">Цена</label>
						<input className="form-control" name="data.price" ref={register} autoComplete="off" />
						<ErrorMessage error={errors?.data?.price} />
					</div>
					<div className="mb-3">
						<label className="form-label">Test</label>
						<input className="form-control" name="data.test" ref={register} autoComplete="off" />
						<ErrorMessage error={errors?.data?.test} />
					</div>
					<button className="btn btn-success" onClick={props.match.params.id === undefined ? dataCreate : dataUpdate}>Save</button>
				</form>
			</div>
		</div>
	)
}

export default CreateUpdate
