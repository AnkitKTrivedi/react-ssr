import React from "react";

import "../../style/css/style.css";
import { addContact } from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Contact = props => {
  const [name, nameInput] = useInput({
    type: "text",
    placeholder: "Your Name"
  });
  const [email, emailInput] = useInput({
    type: "email",
    placeholder: "Your Email"
  });
  const [subject, subjectInput] = useInput({
    type: "text",
    placeholder: "Subject"
  });
  const [text, textInput] = useTextInput({
    type: "text",
    placeholder: "Message"
  });

  const sendMessage = () => {
    let { addContact, history } = props,
      param = {};
    param = { name: name, email: email, subject: subject, text: text };
    addContact(param);
    history.push("/contactDetails");
  };

  const subheading = {
    fontSize: "13px",
    fontWeight: 700,
    display: "block",
    marginBottom: "5px",
    textTransform: "uppercase",
    color: "#fbb901",
    letterSpacing: "3px"
  };

  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <span style={subheading}>Contact</span>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 600
          }}
        >
          Contact Me
        </h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="row block-9">
          <div className="col-md-7 order-md-last d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
              {nameInput}
              {emailInput}
              {subjectInput}
              {textInput}
              <div className="form-group">
                <button
                  className="btn btn-primary py-3 px-5"
                  onClick={sendMessage}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-5 d-flex">
            <div className="row d-flex contact-info mb-5">
              <div className="col-md-12 ftco-animate">
                <div className="box p-2 px-3 bg-light d-flex">
                  <div className="icon mr-3">
                    <span className="icon-map-signs" />
                  </div>
                  <div>
                    <h3 className="mb-3">Address</h3>
                    <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function useInput({ type, placeholder }) {
  const [value, setValue] = React.useState("");
  const input = (
    <div className="form-group">
      <input
        className="form-control"
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
  return [value, input];
}

function useTextInput({ type, placeholder }) {
  const [value, setValue] = React.useState("");
  const input = (
    <div className="form-group">
      <textarea
        name=""
        id=""
        cols="30"
        rows="7"
        className="form-control"
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
  return [value, input];
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addContact }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Contact);
