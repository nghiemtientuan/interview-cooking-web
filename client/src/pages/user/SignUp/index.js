import React from 'react';
import {css} from '@emotion/react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {pathUrl} from 'Src/routes/routes';
import {app} from 'Src/utils/app';

// auth
import {auth} from 'Src/auth'

import signUpImage from 'Public/assets/img/sign-up.png';

// styles
const signUpImageStyle = css`
  background: url('${signUpImage}');
`;

const SignUp = () => {
  const navigate = useNavigate();

  // validate
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Vui lòng nhập đúng định dạng email.")
      .required("Vui lòng nhập email."),
    password: yup
      .string()
      .required('Vui lòng nhập pasword'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp'),
  });

  // local states
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const {email, password, confirm_password} = data;
    if (password !== confirm_password) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.error('Register success!');
      navigate(pathUrl.user.HomePage)
    } catch (error) {
      toast.error('Register success!');
      console.error('[Auth] register error: ', error);
    }
  };

  return (
    <div className='uk-grid-collapse' data-uk-grid>
      <div className='uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center' data-uk-height-viewport>
        <div className='uk-width-3-4@s'>
          <div className='uk-text-center uk-margin-bottom'>
            <a className='uk-logo uk-text-primary uk-text-bold' href={pathUrl.user.HomePage}>{app.name}</a>
          </div>

          <div className='uk-text-center uk-margin-medium-bottom'>
            <h1 className='uk-h2 uk-letter-spacing-small'>Create an Account</h1>
          </div>

          <div data-uk-grid className='uk-child-width-auto uk-grid-small uk-flex uk-flex-center uk-margin'>
            <div>
              <a href='#' data-uk-icon='icon: facebook' className='uk-icon-button uk-icon-button-large facebook'></a>
            </div>

            <div>
              <a href='#' data-uk-icon='icon: google-plus'
                 className='uk-icon-button uk-icon-button-large google-plus'></a>
            </div>

            <div>
              <a href='#' data-uk-icon='icon: linkedin' className='uk-icon-button uk-icon-button-large linkedin'></a>
            </div>
          </div>

          <div className='uk-text-center uk-margin'>
            <p className='uk-margin-remove'>Or use your email for registration:</p>
          </div>

          <form className='uk-text-center'>
            <div className='uk-width-1-1 uk-margin'>
              <label className='uk-form-label' htmlFor='email'>Email</label>
              <input
                id='email'
                className='uk-input uk-form-large uk-border-pill uk-text-center'
                type='email'
                placeholder='tom@company.com'
                name='email'
                {...register('email')}
              />
              {errors?.email && <span className='uk-form-danger'>{errors.email.message}</span>}
            </div>

            <div className='uk-width-1-1 uk-margin'>
              <label className='uk-form-label' htmlFor='password'>Password</label>
              <input
                id='password'
                className='uk-input uk-form-large uk-border-pill uk-text-center'
                type='password'
                placeholder='Min 8 characters'
                name='password'
                {...register('password')}
              />
              {errors?.password && <span className='uk-form-danger'>{errors.password.message}</span>}
            </div>

            <div className='uk-width-1-1 uk-margin'>
              <label className='uk-form-label' htmlFor='password'>Confirm Password</label>
              <input
                id='password'
                className='uk-input uk-form-large uk-border-pill uk-text-center'
                type='password'
                placeholder='Min 8 characters'
                name='confirm_password'
                {...register('confirm_password')}
              />
              {errors?.confirm_password && <span className='uk-form-danger'>{errors.confirm_password.message}</span>}
            </div>

            <div className='uk-width-1-1 uk-text-center'>
              <button
                className='uk-button uk-button-primary uk-button-large'
                onClick={handleSubmit(onSubmit)}
              >Sign Up
              </button>
            </div>

            <div className='uk-width-1-1 uk-margin uk-text-center'>
              <p className='uk-text-small uk-margin-remove'>
                By signing up you agree to our <a className='uk-link-border' href='#'>terms</a> of service.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div
        className='uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light'
        data-uk-height-viewport
      >
        <div
          className='uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-overlay uk-border-rounded-large uk-width-1-1 uk-height-xlarge uk-flex uk-flex-middle uk-flex-center'
          css={signUpImageStyle}
        >
          <div className='uk-padding-large'>
            <div className='uk-text-center'>
              <h2 className='uk-letter-spacing-small'>Welcome Back</h2>
            </div>

            <div className='uk-margin-top uk-margin-medium-bottom uk-text-center'>
              <p>Already signed up, enter your details and start cooking your first meal today</p>
            </div>

            <div className='uk-width-1-1 uk-text-center'>
              <a href={pathUrl.user.SignIn} className='uk-button uk-button-primary uk-button-large'>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
