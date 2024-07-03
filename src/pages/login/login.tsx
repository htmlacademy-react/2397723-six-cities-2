import React, { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-ts';
import { login } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus, CityName } from '../../const/const';
import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { changeActiveCity } from '../../store/app-data/app-data';
import { getAuthorizationStatus } from '../../store/user-data/user-data.selectors';

export default function Login(): React.JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const cities = Object.values(CityName);
  const randomCity = cities[Math.floor(Math.random() * cities.length)];

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(login({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (<Navigate to={AppRoute.Main} />);
  }

  const changeCityHandler = () => {
    dispatch(changeActiveCity(randomCity));
  };

  return (
    <>
      <Helmet title='Login' />
      <div className="page page--gray page--login">
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Main} onClick={changeCityHandler}>
                  <span>{randomCity}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
