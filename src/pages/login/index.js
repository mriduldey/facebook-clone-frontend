import { Formik, Form } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/inputs/logininput';

import './style.css';

const loginInfo = {
  email: '',
  password: '',
};

export default function Login() {
  const [login, setLogin] = useState(loginInfo);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" alt="" />
            <span>
              Facebook helps you connect and share with the people in your life
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik enableReinitialize initialValues={{ email, password }}>
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      placeholder="Email address or Phone number"
                      name="email"
                      onChange={handleLoginChange}
                    />
                    <LoginInput
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <button type="submit" className="btn blue_btn">
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot" className="forgot_password">
                Forgotten password?
              </Link>
              <div className="sign_splitter"></div>
              <button className="btn green_btn open_signup">
                Create Acccount
              </button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a Page</b>
              for a celebrity, brand or business.
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
}
