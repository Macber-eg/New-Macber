import classes from './MenuNave.module.css';
import { NavLink } from "react-router-dom";

const MenuNav = (props) =>{
    return (
      <div className={`${classes.mobile_nav__wrapper}`}>
        <div className={classes.mobile_nav__content}>
          <div className={`my-auto`}>
            <div className="container">
              <ul className={classes.main_menu__list}>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${classes.nav_link}`}
                    to={"/"}
                    onClick={props.onClick}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${classes.nav_link}`}
                    to={"/about"}
                    onClick={props.onClick}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${classes.nav_link}`}
                    to={"/services"}
                    onClick={props.onClick}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${classes.nav_link}`}
                    to={"/our-work"}
                    onClick={props.onClick}
                  >
                    Our work
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${classes.nav_link}`}
                    to={"/insights"}
                    onClick={props.onClick}
                  >
                    Insights
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${classes.nav_link}`}
                    to={"/joinMacber"}
                    onClick={props.onClick}
                  >
                    Join Macber
                  </NavLink>
                </li>
                {/* Sign up — disabled
                <li className="nav-item ">
              <NavLink
                className={`nav-link   ${classes.nav_link}`}
                to={"/signUp"}
              >
                Sign up
              </NavLink>
            </li>
            */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
export default MenuNav;