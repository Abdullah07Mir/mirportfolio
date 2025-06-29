import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,

} from "react-icons/si";
import { DiAndroid } from "react-icons/di"; // ✅ Android Studio icon

function Toolstack() {
  const tools = [
    { icon: <DiAndroid />, name: "Android Studio" }, // ✅ Added
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
 
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={6} md={2} className="tech-icons" key={index}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem" }}>{tool.icon}</div>
            <div style={{ marginTop: "5px", fontSize: "0.9rem" }}>{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
