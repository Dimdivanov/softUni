import { useEffect, useState } from 'react';
import Search from '../components/search/Search';
import Pagination from './pagination/Pagination';
import UserList from './user-list/UserList';
import UserAdd from './user-list/user-add/UserAdd';
import UserDetails from './user-details/UserDetails';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetails, setShowUserDetails] = useState(null);

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

    //post user data and show user add
    const handlerClickAddUser = () => {
        setShowAddUser(true);
    };

    const handlerClickCloseAddUser = () => {
        setShowAddUser(false);
    };

    const handlerClickAddUserSave = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        const createdUser = await response.json();
        setUsers((oldUsers) => [...oldUsers, createdUser]);
        setShowAddUser(false);
    };
    //show details
    const handleClickShowDetails = (userId) => {
        setShowUserDetails(userId);
    };

    const handleClickCloseDetails = () => {
        setShowUserDetails(false);
    };

    return (
        <>
            <section className="card users-container">
                <Search />
                {showUserDetails && (
                    <UserDetails
                        user={users.find((user) => user._id === showUserDetails)}
                        onClose={handleClickCloseDetails}
                    />
                )}
                <UserList users={users} onDetails={handleClickShowDetails} />
                {showAddUser && (
                    <UserAdd
                        onClose={handlerClickCloseAddUser}
                        onSave={handlerClickAddUserSave}
                    />
                )}
                <button className="btn-add btn" onClick={handlerClickAddUser}>
                    Add new user
                </button>
                <Pagination />
            </section>
        </>
    );
}
