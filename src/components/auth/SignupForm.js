import React from 'react';
import { useForm } from 'react-hook-form';
import {Navigate, useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

function SignupForm() {

    const {register, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful}, setError, reset} = useForm({mode: 'onChange'});
    const {user, signup} = useAuth();
    const navigate = useNavigate();
    const onSubmit = async (data)=>{
        try {
            await signup(data.email, data.password);
            navigate("/");
        } catch (error) {
            setError("server",{
                type: "manual",
                message: error.message
            });
        }
    }

    return (
        <>
            {user != null && <Navigate to="/"/>}
            <h2>Signup Now!</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    {errors.server && <div className="alert alert-danger" role="alert">{errors.server.message}</div>}
                    {isSubmitSuccessful && <div className="alert alert-success" role="alert">You're registered successfully!</div>}
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register("email", {required: "Your mail is required!"})} type="email" className="form-control" id="email" aria-describedby="emailValidation"/>
                    {errors.email && <div id='emailValidation' className="text-danger">{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input {...register("password", {required: "Your password is required!", minLength: {value:6, message:"Password must be at least 6" }})} type="password" className="form-control" id="password" aria-describedby="passwordValidation"/>
                    {errors.password && <div id='passwordValidation' className="text-danger">{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary">{isSubmitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>} Signup</button>
            </form>
        </>
    );
}

export default SignupForm;