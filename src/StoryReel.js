import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzrvAvZ5GBddcQF-XrGpdOik5iUfmi1AVMNETkAN2&s" 
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ526ETzwk-TL1CJHpxnEvsj0QLG8M7taYhEcLvXCs1jg&s" 
        title="Shrey Pat" />
    </div>
  )
}

export default StoryReel