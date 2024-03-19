import React from 'react';

const DynamicCard = ({ title, total, members, vsLastWeek, imageSrc }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      padding: "16px",
      fontSize: "2rem",
      fontWeight: "bold",
      width: "250px",
      height: "auto",
      backgroundColor: "#FFFFFF",
      paddingLeft: "20px",
      border: "1px solid #E4E7EC",
      borderRadius: "15px",
      color: "#1F2937",
      fontFamily: "Inter",
    }}>
      <div style={{ fontSize: "14px", color: "#475367", fontFamily: "Inter", fontWeight: "500", paddingBottom: "5px", paddingTop: "5px",}}>
        {title}
      </div>
      <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        {total} <span style={{
          fontFamily: "Inter",
          fontSize: "15px",
          fontWeight: "500",
        }}>{members}</span>
      </div>
      <div style={{ fontSize: "12px", color: "#036B26", paddingTop: "3px", fontFamily: "Inter", fontWeight: "800" }}>
        {vsLastWeek} <span style={{
          fontFamily: "Inter",
          fontWeight: "500",
        }}>vs. last week</span>
      </div>
      <img src={imageSrc} style={{
        width: "20%",
        height: "auto",
        position: "relative",
        left: "150px",
        bottom: "55px",
        marginBottom: "-40px",
      }} />
    </div>
  );
};

export default DynamicCard;