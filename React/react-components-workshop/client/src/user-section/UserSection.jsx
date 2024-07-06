import { useEffect, useState } from 'react';
import Search from '../components/search/Search';
import Pagination from './pagination/Pagination';
import UserList from './user-list/UserList';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const users = Object.values(result);

                setUsers(users);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, []);

    return (
        <>
            <section className="card users-container">
                <Search />
                <UserList users={users}/>
                {/* New user button  */}
                <button className="btn-add btn">Add new user</button>
                <Pagination />
            </section>
        </>
    );
}
