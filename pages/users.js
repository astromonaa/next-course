import { useState } from 'react'
import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const users = ({ users }) => {

  return (
    <MainContainer keywords={'USERS'}>
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) =>

            <Link href={`/users/${user.id}`} key={user.id}>
              <li>
                {user.name}
              </li>
            </Link>
          )}
        </ul>
      </div>
    </MainContainer>
  );
};

export default users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: { users }
  }
}