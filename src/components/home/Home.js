import React from 'react';
import axios from 'axios';

//import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

/* const schemaOfArray = yup.object().shape({
  friends: yup.array().of(
    yup.object().shape({
      firsName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required")
    })
  )
}); */

const schema = yup.object().shape({
	title: yup.string().required().min(2)
});

export default function Home() {
	
  const { register, handleSubmit, errors } = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	

	async function addPost(data) {
		axios.post('http://localhost:5000/posts', data).then(response => {
			//setPosts(posts => [...posts, response.data])
		})
	}

  return (
    <>
			<form onSubmit={handleSubmit(addPost)} autoComplete="off">
				<input type="text" placeholder="Title" name="title" 
				ref={register()} />
				<ErrorMessage error={errors?.title} />
				<br/>
				<input type="text" placeholder="Nothing" name="lastName" ref={register()} />
				<br/>
				<input type="submit" />
			</form>
		</>
  );
}