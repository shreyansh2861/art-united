import React from 'react';
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StoreFrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from './StateProvider';

function Header() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="header">
        <div className="header__left">
            <img src="https://cdn.pixabay.com/photo/2016/05/26/14/39/parrot-1417286_1280.png" alt=""/>
            <div className="header__input">
                <SearchIcon/>
                <input placeholder='Search' type="text"/>
            </div>
        </div>
        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon fontSize="large"/>
            </div>
            
            <div className="header__option">
                <StoreFrontOutlinedIcon fontSize="large"/>
            </div>
            
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>

        </div>
    </div>
  )
}

export default Header