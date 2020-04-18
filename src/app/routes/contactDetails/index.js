import React from "react";
import Store from "../../redux/store";
import "../../style/css/style.css";
import "../../style/css/style.css";

const ContactDetails = props => {
  let { store } = Store;
  const { currentContact = {} } = store.getState();
  const tableStyle = {
    fontFamily: ["arial", "sans-serif"],
    borderCollapse: "collapse",
    width: "100%"
  };

  const tdStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px"
  };
  const { name, email, subject, text } = currentContact;
  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <span>Contact Details</span>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={tdStyle}>Name</th>
              <th style={tdStyle}>Email</th>
              <th style={tdStyle}>Subject</th>
              <th style={tdStyle}>Message</th>
            </tr>
            {name ? (
              <tr style={{ backgroundColor: "#dddddd" }}>
                <td style={tdStyle}>{name}</td>
                <td style={tdStyle}>{email}</td>
                <td style={tdStyle}>{subject}</td>
                <td style={tdStyle}>{text}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ContactDetails;
