import React from 'react';
import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"abby nextjs" + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text="Main" />
        <A href={'/users'} text="Users" />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;