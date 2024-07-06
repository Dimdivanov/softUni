import Search from '../components/search/Search';
import Pagination from './pagination/Pagination';
import UserList from './user-list/UserList';

export default function UserSection() {
    return (
        <>
            <section className="card users-container">
                <Search />
                <UserList />
                {/* New user button  */}
                <button className="btn-add btn">Add new user</button>
                <Pagination />
            </section>
        </>
    );
}
