import React from "react";

function Contact() {
  return (
    <section>
      <h1>Hello There!</h1>
      <p className='paragraph'>
        I would love to connect with you. Whether you are interested in bringing
        me onto your team, wanting to give or recieve some advice and input, or just want to make a new friend. Get in touch with me
        through any of the following!
      </p>
      <div className="flex">
      <div>
        <h3 className='theLinks'>
          <a href="https://www.linkedin.com/in/JosephJamesCooper7823/">
            Here is my LinkedIn account!{" "}
          </a>
        </h3>
      </div>
      <div>
        <h3 className='theLinks'>
          <a href="https://github.com/JosephJamesCoop">
            Check me out on GitHub!{" "}
          </a>
        </h3>
      </div>
      </div>
      <div className="flex">
      <div>
        <h3 className='theLinks'>
          <a href="https://app.slack.com/client/T02HY0V6YRJ/D02KDE2G9SR/user_profile/U02KGDXNKFV">
            Go ahead and Slack me here!
          </a>
        </h3>
      </div>
      <div>
        <h3 className='theLinks'>
          <a href="mailto://josephcooper7823@gmail.com">
            Maybe just email is your thing? 
          </a>
        </h3>
      </div>
      </div>
      <div>
        <h3>
          <p className='astrict'>
            *(I only make exceptions for my grandma with snail mail cause she
            slips $20 in my birthday cards)
          </p>
        </h3>
      </div>
      <br></br>
      <h1>Whatever it may be though, LETS CONNECT!</h1>
    </section>
  );
}

export default Contact;
