import React from "react";
import { SectionStyled } from "./Style";

const Section: React.FC = () => {
  return (
    <SectionStyled>
      <div id="first">
        <div className="img_background"></div>
        <div className="copy">
          <span>THE DIGITALOCEAN COMMUNITY</span>
          <h2>Developers supporting developers</h2>
          <p>
            Have questions, a big idea, or something to share? Our community is
            designed to help you and the open source community thrive.
          </p>
        </div>

        <div id="questions">
          <div id="text">
            <div>
              <h5>Have a question you need answered?</h5>
              <p>
                Submit a question to our Q&A platform and get help from the
                community.
              </p>
            </div>
            <div>
              <button>Ask a question</button>
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
  );
};

export default Section;
