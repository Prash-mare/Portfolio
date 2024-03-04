import { useState } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import '../style/app.scss'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SlSocialGithub} from 'react-icons/sl'
import {SiLeetcode} from 'react-icons/si'
import {IoIosMail} from 'react-icons/io'

const Header=()=>{
    

    return (
        <>
       <main>
<div className="sign">
    <p>pr</p>
</div>
<div className="links">
    <ul>
    <li><a href="">home</a></li>
    <li><a href="">about</a></li>
    <li><a href="">projects</a></li>
    <li><a href="">contact</a></li>
    </ul>
</div>
<div className="social">
    <a href=""><TiSocialLinkedin/></a>
    <a href=""><SlSocialGithub/></a>
    <a href=""><SiLeetcode/></a>
    <a href=""><IoIosMail/></a>


</div>
       </main>
        </>
    )
}
export default Header;