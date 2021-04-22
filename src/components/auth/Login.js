import React from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
	login: yup.string().required().min(2),
	password: yup.string().required().min(2)
});

function Login() {
	const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	function loginCheck() {
		localStorage.setItem('token', 'setTestToken')
		history.push("/");
	}
	
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form onSubmit={handleSubmit(loginCheck)} autoComplete="off">
							<div className="form-group">
								<label>Login</label>
								<input type="text" className="form-control" name="login" ref={register()} />
								<ErrorMessage error={errors?.login} />
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="text" className="form-control" name="password" ref={register()} />
								<ErrorMessage error={errors?.password} />
							</div>
							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
