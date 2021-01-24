import React, { useEffect } from "react";
import "./Faq.css";
import M from "materialize-css/dist/js/materialize.min.js";

const Faq = () => {
  useEffect(() => {
    const tabCollapsible = document.querySelectorAll(".collapsible");
    M.Collapsible.init(tabCollapsible, {});
  }, []);

  return (
    <section className="faq">
      <div className="">
        <div className="container">
          <div className="faq-header">
            <h4 className="center">
              Hello, <span>how can we help ?</span>
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="accordion">
            <div className="collapsible-header ">
              <h5>On our short term rentals.</h5>
            </div>
            <ul className="collapsible">
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">Are they furnished?</span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Yes, our apartments are fully furnished along with an air
                    conditioning in every room, a functional washing machine and
                    dishwasher as well as living and bed room furnishing for a
                    minimalist aesthetic appeal.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    What is the least amount of days I can rent for?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    Where are your apartments located?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    Can I smoke in your apartment?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="accordion">
            <div className="collapsible-header ">
              <h5>On Home Co-Ownership</h5>
            </div>
            <ul className="collapsible">
              <li className="activ">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">How does it work?</span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Yes you can, some penalties would apply for the
                    inconvenience, however you can at any point.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    How much do I make a year if I make the minimum contribution
                    of N1,000,000 to own a home?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Yes you can, some penalties would apply for the
                    inconvenience, however you can at any point.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    How long does it take for me to eventually get the car?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Yes you can, some penalties would apply for the
                    inconvenience, however you can at any point.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    Where are your apartments located?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    Can I visit the apartment at any time?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    Do I get a free stay at the apartment?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    What is in it for Siester Living?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
              <li className="">
                <div className="collapsible-header rel">
                  <i className="material-icons add-icon">add</i>
                  <i className="material-icons remove-icon">remove</i>
                  <i class="material-icons disc-icon">lens</i>
                  <span className="question">
                    Where are your apartments located?
                  </span>
                </div>

                <div className="collapsible-body">
                  <p className="answer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    natus. Nesciunt eum qui natus, et velit eos nostrum delectus
                    quam voluptatibus ipsum ut animi repellendus, debitis
                    ducimus minima illum odit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
