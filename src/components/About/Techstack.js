import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {

  DiPython,
  DiGit,

  DiAndroid,
} from "react-icons/di";
import {
  SiFirebase,

  SiFlutter,
  SiApple,
  SiRedux,
  SiDart,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techItems = [
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <SiRedux />, name: "Bloc (Placeholder)" },
    { icon: <SiRedux />, name: "Provider (Placeholder)" },
    { icon: <SiRedux />, name: "Riverpod (Placeholder)" },
    { icon: <SiRedux />, name: "GetX (Placeholder)" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiAndroid />, name: "Android" },
    { icon: <SiApple />, name: "iOS" },
    
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((item, idx) => (
        <Col xs={6} md={2} className="tech-icons" key={idx}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem" }}>{item.icon}</div>
            <div style={{ marginTop: "5px", fontSize: "0.9rem" }}>{item.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
