import React from 'react';
import AllergyFree from "../../assets/group/AllergyFree.jpg";
import Portland from "../../assets/group/Portland.jpg";
import Thoughts from "../../assets/individual/Thoughts.jpg";
import Budget from "../../assets/individual/Budget.jpg";
import RegEx from "../../assets/snippets/RegEx.jpg";
import Ecomm from "../../assets/snippets/E-Commerce.jpg";

function MyWork() {
  return (
    <section>
      <h1>Here is some of my work!</h1>
      <p>
        Feel free to explore the content a little more by clicking the image to launch the app or click the title to take you to the repository.
      </p>

      <h2>Group Projects</h2>
      <div> 
        <a href="https://www.linkedin.com/in/JosephJamesCooper7823/">
          <img src={AllergyFree} alt="Joseph Cooper with his wife Erin and their two dogs, Rosie and Rango." />
        </a>
        <h3>
          <a href="https://www.linkedin.com/in/JosephJamesCooper7823/">
            The Allergy Free Kitchen{" "}
          </a>
        </h3>
      </div>
      <div> 
        <a href="https://www.linkedin.com/in/JosephJamesCooper7823/">
          <img src={Portland} alt="Joseph Cooper with his wife Erin and their two dogs, Rosie and Rango." />
        </a>
        <h3>
          <a href="https://www.linkedin.com/in/JosephJamesCooper7823/">
            Your Portland Itinerary{" "}
          </a>
        </h3>
      </div>

      <h2>Individual Work</h2>
      <div> 
        <a href="https://deep-thoughts.herokuapp.com/">
          <img src={Thoughts} alt="Joseph Cooper with his wife Erin and their two dogs, Rosie and Rango." />
        </a>
        <h3>
          <a href="https://github.com/JosephJamesCoop/deep-thoughts">
            Deep Thoughts{" "}
          </a>
        </h3>
      </div>
      <div> 
        <a href="https://in-hand-budget-tracker.herokuapp.com/">
          <img src={Budget} alt="Joseph Cooper with his wife Erin and their two dogs, Rosie and Rango." />
        </a>
        <h3>
          <a href="https://github.com/JosephJamesCoop/in-hand-budget-tracker">
            In Hand Budget Tracker{" "}
          </a>
        </h3>
      </div>

      <h2>Backend Snippets</h2>
      <p>These are code viewing only</p>
      <div> 
        <p>
          <img src={Ecomm} alt="Words that read E-Commerce" />
        </p>
        <h3>
          <a href="https://github.com/JosephJamesCoop/E-Commerce_Back_End_Platform">
            E-Commerce Back End{" "}
          </a>
        </h3>
      </div>
      <div> 
        <p>
        <img src={RegEx} alt="Words that read RegEx" />
        </p>
        <h3>
          <a href="https://gist.github.com/JosephJamesCoop/e21bbfe767c7e48e5c8142a8c65b7a87">
            RegEx (Regular Expression) Tutorial{" "}
          </a>
        </h3>
      </div>
</section>
  );
}

export default MyWork;