import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {css} from '@emotion/react';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';

// components
import HeaderComponent from 'Src/components/HeaderComponent';
import FooterComponent from 'Src/components/FooterComponent';

// styles
const buttonShowUpdateStyle = css`
  margin-right: 20px;
`;

const UserPage = () => {
  const dispatch = useDispatch();
  const {user: userAuth} = useSelector((state) => state.auth);

  // validate
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Vui lòng nhập đúng định dạng email.')
      .required('Vui lòng nhập email.'),
    password: yup
      .string()
      .required('Vui lòng nhập pasword'),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp'),
  });

  // local states
  const [isUpdate, setIsUpdate] = useState(false);

  // form
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const handleShowUpdate = (e) => {
    e.preventDefault();
    setIsUpdate(true);
  };

  const onSubmit = (data) => {
    console.log(data, 'data')
  }

  return (
    <>
      <HeaderComponent />

      <div className='uk-section uk-section-default'>
        <div className='uk-container'>
          <form className='uk-text-center container'>
            <div className='uk-width-1-1 uk-margin row'>
              <h1 className='col-12'>Thông tin người dùng</h1>
            </div>

            <div className='uk-width-1-1 uk-margin row'>
              <label
                className='uk-form-label col-4 d-flex align-items-center justify-content-center'
                htmlFor='email'
              >Email</label>
              <input
                id='email'
                className='uk-input uk-form-large uk-border-pill col-8'
                type='email'
                disabled
                value={userAuth?.email}
              />
            </div>

            <div className='uk-width-1-1 uk-margin row'>
              <label
                className='uk-form-label col-4 d-flex align-items-center justify-content-center'
                htmlFor='fullname'
              >Tên đầy đủ</label>
              <input
                id='fullname'
                className='uk-input uk-form-large uk-border-pill col-8'
                type='text'
                name='fullname'
                disabled={!isUpdate}
                defaultValue={userAuth?.fullname}
                {...register('fullname')}
              />
              {errors?.fullname && <span className='uk-form-danger'>{errors.fullname.message}</span>}
            </div>

            <div className='uk-width-1-1 uk-margin row'>
              <label
                className='uk-form-label col-4 d-flex align-items-center justify-content-center'
                htmlFor='username'
              >Tên hiển thị</label>
              <input
                id='username'
                className='uk-input uk-form-large uk-border-pill col-8'
                type='text'
                name='username'
                disabled={!isUpdate}
                defaultValue={userAuth?.username}
                {...register('username')}
              />
              {errors?.username && <span className='uk-form-danger'>{errors.username.message}</span>}
            </div>

            <div className='uk-width-1-1 uk-margin row'>
              <label
                className='uk-form-label col-4 d-flex align-items-center justify-content-center'
                htmlFor='birthday'
              >Ngày sinh</label>
              <input
                id='birthday'
                className='uk-input uk-form-large uk-border-pill col-8'
                type='date'
                name='birthday'
                disabled={!isUpdate}
                defaultValue={userAuth?.birthday}
                {...register('birthday')}
              />
              {errors?.birthday && <span className='uk-form-danger'>{errors.birthday.message}</span>}
            </div>

            <div className='uk-width-1-1 uk-text-center'>
              <button
                className='uk-button uk-button-large'
                css={buttonShowUpdateStyle}
                onClick={handleShowUpdate}
              >Chỉnh sửa</button>

              <button
                className='uk-button uk-button-primary uk-button-large'
                onClick={handleSubmit(onSubmit)}
              >Cập nhật</button>
            </div>
          </form>
        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default UserPage;
