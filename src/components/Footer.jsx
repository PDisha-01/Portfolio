import "./Footer.css";


const Footer = () => {


return (

<footer className="footer">


<div className="footer-line"></div>



<div className="footer-content">


<div className="footer-brand">

<h2>
DISHA mallick
<span>.</span>
</h2>


<p>
AI • ML • FULL STACK DEVELOPER
</p>


</div>




<div className="footer-links">


<a 
href="https://github.com/"
target="_blank"
rel="noopener noreferrer"
>
GITHUB
</a>


<a 
href="https://linkedin.com/"
target="_blank"
rel="noopener noreferrer"
>
LINKEDIN
</a>


<a 
href="mailto:your-email@gmail.com"
>
EMAIL
</a>


</div>



</div>




<div className="footer-bottom">


<p>
© 2026 Disha Mallick. All rights reserved.
</p>


<p>
Built with React & curiosity
</p>


</div>



</footer>

);

};


export default Footer;