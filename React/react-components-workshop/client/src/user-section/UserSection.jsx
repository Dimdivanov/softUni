import { useEffect, useState } from 'react';
import Search from '../components/search/Search';
import Pagination from './pagination/Pagination';
import UserList from './user-list/UserList';
import UserAdd from './user-list/user-add/UserAdd';
import UserDetails from './user-details/UserDetails';
import UserDelete from './user-delete/UserDelete';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetails, setShowUserDetails] = useState(null);

    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const users = Object.values(result);

                setUsers(users);
            } catch (error) {
                console.log(error.message);
            } finally {
                setIsLoading(false);
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

    //show details
    const handleClickShowDetails = (userId) => {
        setShowUserDetails(userId);
    };

    const handleClickCloseDetails = () => {
        setShowUserDetails(false);
    };
    //show delete
    const handleClickDelete = (userId) => {
        setShowUserDeleteById(userId);
    };

    const userDeleteHandler = async (userId) => {
        try {
            await fetch(`${baseUrl}/users/${userId}`, {
                method: 'DELETE',
            });

            setUsers((oldUsers) => oldUsers.filter((user) => user._id !== userId));

            setShowUserDeleteById(null);
        } catch (error) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
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
                <UserList
                    users={users}
                    onDetails={handleClickShowDetails}
                    onDeleteClick={handleClickDelete}
                    isLoading={isLoading}
                />
                {showUserDeleteById && (
                    <UserDelete
                        onClose={() => {
                            setShowUserDeleteById(null);
                        }}
                        onUserDelete={() => {
                            userDeleteHandler(showUserDeleteById);
                        }}
                    />
                )}
                {showAddUser && (
                    <UserAdd
                        onClose={handlerClickCloseAddUser}
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
