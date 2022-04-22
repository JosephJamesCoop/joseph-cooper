import React from "react";
import AllergyFree from "../../../assets/group/AllergyFree.jpg";
import MallDirect from "../../../assets/group/MallDirect.jpg";
import Thoughts from "../../../assets/individual/Thoughts.jpg";
import Budget from "../../../assets/individual/Budget.jpg";
import RegEx from "../../../assets/snippets/RegEx.jpg";
import Ecomm from "../../../assets/snippets/E-Commerce.jpg";

function MyWork() {
  return (
    <section>
      <h1>Here is some of my work!</h1>
      <p className="astrict">
        *Feel free to explore the content a little more by clicking the image to
        launch the app or click the title to take you to the repository.
      </p>

      <h2 className="top">Group Projects</h2>
      <div className="flex">
      <div className="myWork">
          <a href="https://mall-direct.herokuapp.com/">
            <img
              className="myWork"
              src={MallDirect}
              alt="Preview of Mall Direct App"
            />
          </a>
          <h5 className="left">
            <a href="https://github.com/knharman/mall-directory">
              Mall Direct{" "}
            </a>
          </h5>
        </div>
        <div className="myWork">
          <a href="https://afk-network.herokuapp.com/">
            <img
              className="myWork"
              src={AllergyFree}
              alt="Preview of The Allergy Free Kitchen App"
            />
          </a>
          <h5 className="left">
            <a href="https://github.com/JosephJamesCoop/the-allergy-free-kitchen">
              The Allergy Free Kitchen{" "}
            </a>
          </h5>
        </div>
      
      </div>
      <h2 className="top">Individual Work</h2>
      <div className="flex">
        <div className="myWork">
          <a href="https://deep-thoughts.herokuapp.com/">
            <img
              className="myWork"
              src={Thoughts}
              alt="Preview of Deep Thoughts App."
            />
          </a>
          <h5 className="left">
            <a href="https://github.com/JosephJamesCoop/deep-thoughts">
              Deep Thoughts{" "}
            </a>
          </h5>
        </div>
        <div className="myWork">
          <a href="https://in-hand-budget-tracker.herokuapp.com/">
            <img
              className="myWork"
              src={Budget}
              alt="Preview of In Hand Budget Tracker App."
            />
          </a>
          <h5 className="left">
            <a href="https://github.com/JosephJamesCoop/in-hand-budget-tracker">
              In Hand Budget Tracker{" "}
            </a>
          </h5>
        </div>
      </div>
      <h2 className="top">Backend Snippets</h2>
      <p className="astrict">*These are code viewing only</p>
      <div className="flex">
        <div className="myWork">
          <p>
            <img
              className="myWork"
              src={Ecomm}
              alt="Words that read E-Commerce"
            />
          </p>
          <h5 className="left">
            <a href="https://github.com/JosephJamesCoop/E-Commerce_Back_End_Platform">
              E-Commerce Back End{" "}
            </a>
          </h5>
        </div>
        <div className="myWork">
          <p>
            <img className="myWork" src={RegEx} alt="Words that read RegEx" />
          </p>
          <h5 className="left">
            <a href="https://gist.github.com/JosephJamesCoop/e21bbfe767c7e48e5c8142a8c65b7a87">
              RegEx (Regular Expression){" "}
            </a>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default MyWork;
