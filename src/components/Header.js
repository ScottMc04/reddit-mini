import logo from '../media/logo.png';
import { setFilter, selectFilter } from '../features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter);
    const navigate = useNavigate();

    const handleFilter = e => {
        navigate("/r/popular");
        dispatch(setFilter(e.target.value));
    }

    return (
        <div className="App">
            <body>
                <nav>
                    <div className='click' onClick={() => navigate(-1)}>
                        <img src={logo} alt="logo" />
                        <h1 id="reddit-mini">Reddit Mini</h1>
                    </div>
                    <input type="text" placeholder='Search' onChange={handleFilter} className='search' value={currentFilter}></input>
                </nav>
            </body>
        </div>
    )
}

export default Header;