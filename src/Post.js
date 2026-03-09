import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import { ExpandMoreOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UpdownButton } from '@lyket/react';
import { ClapButton } from '@lyket/react';
import { useStateValue } from './StateProvider';
import db from './firebase';

function Post({profilePic, image, username, timestamp, message}) {
    const [{user}, dispatch] = useStateValue();
    const [countUp, setCountUp] = useState(0);
    const [countDown, setCountDown] = useState(0);

    const handleLike = e => {
        e.preventDefault();

        db.collection('LandD').add({
            likes: countUp,
            dislikes: countDown
        })

        setCountDown("");
        setCountDown("");
    };

  return (
    <div className='post'>
        <div className='post__top'>
            <Avatar src={profilePic} className="post__avatar"/>
            <div className='post__topInfo'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>


        <div className='post__bottom'>
            <p>{message}</p>
        </div>


        <div className='post__image'>
            <img src={image} alt="" />
        </div>


        <div className='post__options'>
            <div className='post__option'>
            <Button onClick={() => setCountUp(countUp + 1)}>
            <ThumbUpIcon />{`${countUp === 0 ? `` : countUp}`}
            </Button>
            <Button onClick={() => setCountDown(countDown + 1)}>
            <ThumbDownIcon />{`${countDown === 0 ? `` : countDown}`}
            </Button>
            {handleLike}
            
            </div>

            <div className='post__option'>
                <NearMeIcon/>
                <p>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post