import React, { useState } from "react";

const Header = ({ setSelectedItem }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Define selectedOption here

  const [displayPopup, setDisplayPopup] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedItem(option);
    setSelectedOption(option); // Update the selectedOption
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "#F9FAFB",
        display: "flex",
        borderBottom: "2px solid #EBEBEB",
      }}
    >
      <div
        style={{
          paddingTop: "40px",
          display: "flex",
        }}
      >
        <img
          src="https://i.imgur.com/Pl12qLg.png"
          alt="social logo"
          style={{
            width: "auto",
            height: "50%",
            paddingLeft: "40px",
            paddingRight: "30px",
          }}
        />
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            marginTop: "5px",
            color: "#344054",
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          <img
            src="https://i.imgur.com/sEo9JLc.png"
            style={{
              width: "auto",
              height: "50%",
              paddingRight: "0px",
              marginTop: "-2px",
            }}
          />
          <li
            style={{
              marginLeft: "-20px",
              marginRight: "20px",
              paddingBottom: "55px",
              paddingRight: "0px",
              paddingLeft: "30px",
              borderBottom:
                selectedOption === "Dashboard" ? "2px solid #2831FF" : "none",
              cursor: "pointer", // Make the text clickable
            }}
            onClick={() => handleOptionClick("Dashboard")} // Click handler
          >
            Dashboard
          </li>
          <img
            src="https://i.imgur.com/PSN2osC.png"
            style={{
              width: "auto",
              height: "50%",
              paddingRight: "0px",
              paddingLeft: "20px",
            }}
          />
          <li
            style={{
              marginLeft: "-20px",
              marginRight: "20px",
              paddingBottom: "55px",
              paddingRight: "10px",
              paddingLeft: "30px",
              borderBottom:
                selectedOption === "Analytics" ? "2px solid #2831FF" : "none",
              cursor: "pointer", // Make the text clickable
            }}
            onClick={() => handleOptionClick("Analytics")} // Click handler
          >
            Analytics
          </li>
          <img
            src="https://i.imgur.com/0OPYD5W.png"
            style={{
              width: "auto",
              height: "60%",
              paddingRight: "0px",
              marginTop: "-4px",
            }}
          />
          <li
            style={{
              marginLeft: "-25px",
              marginRight: "20px",
              paddingBottom: "55px",
              paddingRight: "10px",
              paddingLeft: "35px",
              borderBottom:
                selectedOption === "Members" ? "2px solid #2831FF" : "none",
              cursor: "pointer", // Make the text clickable
            }}
            onClick={() => handleOptionClick("Members")} // Click handler
          >
            Members
          </li>
          <img
            src="https://i.imgur.com/Jql1aeV.png"
            style={{ width: "auto", height: "50%", paddingRight: "0px" }}
          />
          <li
            style={{
              marginLeft: "-25px",
              marginRight: "20px",
              paddingBottom: "55px",
              paddingRight: "10px",
              paddingLeft: "35px",
              borderBottom:
                selectedOption === "API" ? "2px solid #2831FF" : "none",
              cursor: "pointer", // Make the text clickable
            }}
            onClick={() => handleOptionClick("API")} // Click handler
          >
            API
          </li>
        </ul>
        <div
          style={{
            paddingLeft: "50px",
            position: "fixed",
            top: "0",
            right: "30px",
            paddingTop: "35px",
          }}
          onMouseOver={() => setDisplayPopup(true)}
          onMouseLeave={() => setDisplayPopup(false)}
        >
          <img
            src="https://i.imgur.com/BuToqJu.png"
            style={{ height: "auto", width: "40px", borderRadius: "50%" }}
          />
          {displayPopup && (
            <div
              style={{
                position: "absolute",
                top: "80px",
                right: "0px",
                backgroundColor: "#FFFFFF",
                padding: "10px",
                border: "1px solid #D1D5DB",
                borderRadius: "5px",
                color: "#1F2937",
                fontFamily: "Inter",
                width: "150px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                style={{
                  fontWeight: "500",
                  marginBottom: "5px",
                  color: "#4B5563",
                }}
              >
                Elijah Gray
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  marginBottom: "5px",
                }}
              >
                engray@usc.edu
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  marginBottom: "5px",
                }}
              >
                Sign Out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;