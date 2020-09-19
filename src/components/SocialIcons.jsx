import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitter, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function SocialIcons() {
    return (

        <div className="footer_social_icons ">
            <ul>
                <li><a href="https://twitter.com/kamrulhasan325"> <i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100006429803429"> <i><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                <li><a href="https://www.linkedin.com/in/kamrul-hasan-b510a4144/"> <i><FontAwesomeIcon icon={faLinkedinIn} /></i></a></li>
                <li><a href="https://github.com/KamrulHasan-Seu"> <i><FontAwesomeIcon icon={faGithub} /></i></a></li>
            </ul>
        </div>

    )
}

export default SocialIcons
