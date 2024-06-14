import React from 'react';
import Layout from '../../utils/Layout';
import AuthDesign from '../../components/auth/AuthDesign';
import AuthForm from '../../components/auth/AuthForm';

const LoginPage: React.FC = () => {
 
  return (
    <Layout>
      <div className="rounded-sm border flex-1 h-full border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <AuthDesign />
          <AuthForm
            heading="Login to Lojiper"
             mode="login"
          />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;