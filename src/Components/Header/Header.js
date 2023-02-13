import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../Assets/OlxLogo';
import Search from '../../Assets/Search';
import Arrow from '../../Assets/Arrow';
import SellButton from '../../Assets/SellButton';
import SellButtonPlus from '../../Assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';


function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
            </div>
          </div>
         <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
         </div>
         <div className="loginPage">
          {user ? `Welcome ${user.displayName}` : 
            <span onClick={()=>{
              history.push('/login')
            }}>Login</span>
          }
          <hr /> 
          </div>
          {user && <span className='logoutpage' onClick={()=>{
            firebase.auth().signOut();
            history.push('/login')
          }}>Logout</span>}
          <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              history.push('/create')
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;