import "./Contact.css";


const contactLinks = [
  {
    title: "EMAIL",
    value: "mallickdisha186@gmail.com",
    link: "mailto:mallickdisha186@gmail.com"
  },

  {
    title: "GITHUB",
    value: "github.com/PDisha-01",
    link: "https://github.com/PDisha-01"
  },

  {
  title: "LINKEDIN",
  value: "linkedin.com/in/disha-mallick",
  link: "https://www.linkedin.com/in/dishamallick/"
},

  {
    title: "LOCATION",
    value: "Bokaro Steel City, Jharkhand",
    link: "#"
  }
];


const Contact = () => {


return (

<section 
className="contact"
id="contact"
>


<div className="contact-header">


<p>
CONNECT / CONTACT
</p>


<h1>
LET'S BUILD
<span> TOGETHER</span>
</h1>


<div className="contact-line"></div>


<p className="contact-desc">

Have an opportunity, project idea,
or collaboration in mind?
I would love to connect and create something meaningful.

</p>


</div>



<div className="contact-terminal">


<div className="terminal-top">

<span></span>
<span></span>
<span></span>

</div>



<div className="terminal-body">
<form
  className="contact-form"
  action="
https://formspree.io/f/meajovzv"
  method="POST"
>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />


  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />


  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />


  <textarea
    name="message"
    placeholder="Your Message"
    rows="5"
    required
  />


  <button type="submit">
    SEND MESSAGE →
  </button>


</form>

<p className="terminal-command">
disha@portfolio:~$ contact
</p>



{
contactLinks.map((item,index)=>(


<div 
className="contact-entry"
key={index}
>


<div className="contact-label">
{item.title}
</div>


<a 
href={item.link}
target="_blank"
 rel="noopener noreferrer"
>
{item.value}
</a>


</div>


))
}



</div>


</div>


</section>

);

};


export default Contact;