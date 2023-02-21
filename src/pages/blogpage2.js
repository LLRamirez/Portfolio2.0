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
                <Image alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F415505-baby-grumpy-cat-kitten.jpg&f=1&nofb=1&ipt=6c0496f661d6343a5e782ed201a74c1bd77e9527592986ddcab9fa0d029b31e7&ipo=images"/>
                <p> you serious?!! furrildooo? Text and stories aquiiiiii</p>
            </div>   
        </div>
    )
}
