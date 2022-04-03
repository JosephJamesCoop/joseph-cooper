import React from "react";
import family from "../../../assets/cover/Family.jpg";

function About() {
  return (
    <section id="about-me" class="bio">
      <h2>About Me</h2>
      <img
        className="family"
        src={family}
        alt="Joseph Cooper with his wife Erin and their two dogs, Rosie and Rango."
      />
      <div class="info">
        <div class="my-info">
          <h3>Personal</h3>
          <p className="paragraph">
            My name is Joseph Cooper and I currently reside in Independence, OR.
            I am the 7th of 8 kids and grew up in a family of entrepreneurs. I
            have always loved to be challenged and test the status-quo. I am a
            critical yet analytical thinker who enjoys having my skills and
            abilities challenged every day. I enjoy getting outside to go on
            hikes or weekend camping trips with my wife and two dogs. I enjoy
            music, going to concerts and overall just like to have a good time
            with my friends and family.
          </p>
        </div>
        <div class="my-info">
          <h3>Background</h3>
          <p className="paragraph">
          I got my first job when I was 12 years old cleaning houses when
          Peoplee moved out. I later worked my way into retail where I have
          been a manager for the past 8 of my 10 years in retail, most
           recently with BestBuy. Due to wanting to be challenged in a new way
           and seeking a more long term satisfaction in my work, I started my
           training to become a Full Stack Web Developer. I have recently
           completed The Full Stack Web Development bootcamp offered through
           the University of Oregon. It has allowed me to develop technical
           skills in JavaScript, CSS and HTML. Throughout this bootcamp I have
           been able to advance my Technical Skills and create PWA (Progressive
           Web Applications) and other apps using Node.js, React, GraphQL,
           MongoBD, MySQL. NoSQL, and MERN (MongoDB, Express.js, React,
           Node.js). I am a critical thinker who pays attention to detail and
           adds excitement and creativity to everything I do. Because of my
           love for math, I enjoy problem solving, debugging, modularizing and
           providing solutions or insight to others. I work well in a team and
           can naturally guide a team to success, I also excel on my own and
           enjoy a good challenge of my strengths and weaknesses. I have found
           my passion as a full stack web developer and am excited to work in
           an environment that challenges me everyday. I am here to overcome
           company obstacles and create a more profitable and sustainable work
           environment as a full stack web developer.{" "}
          </p>
        </div>
        <div class="my-info">
          <h3>Future</h3>
          <p className="paragraph">
            I want to be challenged, due to my attention to detail and creative
            thinking I want to create new projects and improve on existing ones.
            I enjoy debugging and finding ways to improve usage and efficiency
            of existing applications. I want to work in a strong team
            environment that supports, challenges and adds value to each other's
            work and lives every day. I want to be a part of something big and
            be able to make a difference with the work I provide. I want to be
            your next asset.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
