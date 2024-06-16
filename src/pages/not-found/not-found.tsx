import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './not-found.css';
import { AppRoute } from '../../const/const';
import { Helmet } from 'react-helmet-async';

export default function NotFound(): React.JSX.Element {
  const navigate = useNavigate();
  navigate(AppRoute.NotFound);
  return (
    <>
      <Helmet title='Not Found' />
      <div className="not-found-container">
        <div className="not-found-information">
          <div className='information--text error'>404</div>
          <div className='information--text'>We really searched, but didn&apos;t find this page</div>
          <Link className='button form__submit' to='/'>Home</Link>
        </div>
        <img className="not-found-image" src="img/not-found.webp" alt="" />
      </div>
    </>
  );
}
