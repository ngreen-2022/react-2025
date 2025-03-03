import React from 'react';

import UsersList from '../components/UsersList/UsersList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Nicholas Green',
        image: '',
        places: 3
    }]

    return <UsersList items={USERS} />
}

export default Users;