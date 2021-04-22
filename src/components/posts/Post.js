import React, { useEffect } from 'react'
import { GET } from '../../api/api';
import { useTranslation } from 'react-i18next';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
	post: yup.object().shape({
		title: yup.string().required().min(2)
	})
});

function Post(props) {
	const { i18n } = useTranslation();
	const { register, errors, setValue } = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

	useEffect(() => {
		async function getPost() {
			await GET(`http://localhost:5000/posts/${props.match.params.id}`).then(response => {
				setValue('post', {	title: response.title });
			})
		}
		
    getPost()
  }, [props.match.params.id, setValue]) // react-hooks/exhaustive-deps

	return (
		<>
		<div className="container m-3">
			<div className="col-md-12">
				<input type="text" name="post.title" ref={register} autoComplete="off" />
				{console.log(errors)}
				<ErrorMessage error={errors?.post?.title} />
				<br/>
			</div>
		</div>
			<button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("de")}>DE</button>
			<button className="btn btn-success mr-4">+</button>
			<button className="btn btn-success">-</button>
		</>
	)
}

export default Post
