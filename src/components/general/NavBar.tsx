import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { setUserLogout } from "../../store/reducers/UserSlice";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const userImage = useAppSelector((state) => state.UserReducer.user.imageUrl);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutUser = (): void => {
    dispatch(setUserLogout());
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav className="nav" aria-label="primary-navigation">
      <div className="wrapper">
        <Link className="nav-title" to="/">
          art-gallery
        </Link>
        <ul className="nav-list">
          <li className="nav-el-picc nav-el">
            <Link className="picc-href" to="/artwork/1">
              Картина
            </Link>
          </li>
          <li className="nav-el-sc nav-el">
            <Link className="sculpture-href" to="/artwork/2">
              Скульптура
            </Link>
          </li>
          <li className="nav-el-photos nav-el">
            <Link className="photos-href" to="/artwork/3">
              Фотографии
            </Link>
          </li>
          <li className="nav-el-drafts nav-el">
            <Link className="draft-href" to="/artwork/4">
              Рисунок
            </Link>
          </li>
          <li className="nav-el-artists nav-el">Художники</li>
          <li className="nav-el nav-el-artists">
            <Link to="/userprofile">
              <img className="userImage" alt="userImage" src={userImage} />
            </Link>
            <button className="logoutButton" onClick={() => logoutUser()}>
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
