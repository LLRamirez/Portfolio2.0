import { Image } from "react-bootstrap";
import React from "react";

export default function about(){

    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();

    return(
        <div class="text-center">
        <div>
            <h1>Title</h1>

            <h1>Blog Publish date: {cMonth}/{cDay}/{cYear}</h1>
        </div>    
            <div>
                <Image alt="" src="https://getwallpapers.com/wallpaper/full/1/0/c/1344537-kitty-cat-wallpaper-1920x1280-meizu.jpg"/>
                <p> you serious?!! furrildooo? Text and stories aquiiiiii</p>
            </div>
        </div>
    )
}
