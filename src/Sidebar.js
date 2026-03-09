import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import { useStateValue } from "./StateProvider";


function Sidebar() {
  

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <iframe>
        <SidebarRow src={user.photoURL} title={user.displayName}/>
        <a href="https://covid19.who.int/" target="_blank" rel="noopener noreferrer"><SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Info Centre"/></a>
        <a href="https://www.youtube.com/results?search_query=art+videos" target="_blank" rel="noopener noreferrer"><SidebarRow Icon={VideoLibraryIcon} title="Videos"/></a>
        <a href="https://www.deviantart.com/" target="_blank" rel="noopener noreferrer"><SidebarRow src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8FzEcAy0AAy0P7/fxW0mxa029q1X5v1oLY8d3V8Nvx+vMMykYAyjoAyjax5rsAxyWj4azo9etK0GUmzE2M3ZoAyC6W3qK86cRd03N/3JHE7MyE25PO7tNj1Hrd8uJxmQdwAAACjklEQVRoge3bYXLiMAwF4GInJSFxoCXQ0hS4/y2b7XamOyCLjJ6k7I+8A/DVYKe25Dw9LVmyZMl/noaIl92HeJNQFj70S7e6TXSym3vazf5Is9kbYthe9inMZr9Tw/axiz7OZr8RE83JfqVpF3tNTTQfu97RtIe9Jyeai709Zmh7u6HXl4t9yExyB/uaHbW9fckP29o+M/TquJV9aHG4rB+nyk+0cdh74YCKMoUJYejVrpbaz9zHTkmohLSCnV5ns9OblIbt2MvXF2p372IatcNJTqN2J11fuJ0+ABq0A3QChezuBaEhO7YQDdndMJsNrS/URtYXZqdPkJbbsYcrPGJbulFSsOMe3x9K7eMZpqV2WOO01N5plBJldjoo0DI7tioHEZGd8PUltUOpQo/2XVl4zINhK6yv71xrIkPP0eKDyKR8csdO+UFkSq5k6fIn4EbpUfaZQtqfIAeRCRmyFaUxR3CjxCdTsf2bID3oTwvREfnn10Y3Smwado5DB5GHqTi7HerNfbS+C7aiNIZ4Cqr1x0pmfeX+HCV7+2DYhnbRSv6d69hMxdbabnKtAQc71xFxsM/cg9zWLrIdEXs73xExt5mOiLnNbpRs7Vo0x3VssrXtYw/cjsHYljzIlWx2o2RrN+IfG7epqyNOdg1846gtX1+wTV8dcbHZg4ixnbk64mHnro542BU00SA7e3Xk+2OnNImTuLbKbZRiX03JQWizGyW1ihKZomSGnS6WNF/bi9fZbJ2KrchW6IiIbYWOiNQWXx1RsMVXR3BbpSMitG0rtqxtvb4Y27hiy9rI1RHQhlvbgN1tZrONK7as3fm8vFA83+/WjDsiv/YptjdZ9T40+bqI0xsbS5YsWSLPF6IWKUmPF6NJAAAAAElFTkSuQmCC" title="Deviant Art"/></a>
        </iframe>
    </div>
  )
}

export default Sidebar