import React from 'react';

import Layout from '../../utils/Layout';
import AuthDesign from '../../components/auth/AuthDesign';
import AuthForm from '../../components/auth/AuthForm';
const RegisterPage: React.FC = () => {
  

  return (
    <Layout>
      <div className="rounded-sm flex-1 h-full border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <AuthDesign />
          <AuthForm
            heading="Register to Lojiper"
            mode="register"
          />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;