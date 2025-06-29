import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋 Hi, I’m <span className="purple">Abdullah Mir</span> – a Flutter Developer with over 4 years of experience building high-quality, cross-platform mobile applications for Android and iOS.
            <br />
            <br />
            I specialize in creating fast, responsive, and visually engaging apps using Flutter and Dart. From sleek UI design aligned with Material and Cupertino standards to seamless backend integration with Firebase and RESTful APIs, I deliver robust mobile solutions tailored to business needs.
          </p>

          <p style={{ textAlign: "justify" }}><strong>🔧 My Core Expertise Includes:</strong></p>
          <ul style={{ textAlign: "justify" }}>
            <li> Full-cycle app development using Flutter SDK</li>
            <li> Scalable state management with Provider, Bloc, and Riverpod</li>
            <li> Firebase services integration: Authentication, Firestore, Analytics, and Messaging</li>
            <li> Rigorous testing with Flutter Test, Mockito, and integration tools</li>
            <li> CI/CD implementation with GitHub Actions, Codemagic, and Bitrise</li>
            <li> Agile workflows and collaborative version control using Git</li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Over the years, I’ve contributed to a wide range of successful mobile products — from startup MVPs to enterprise-level applications — known for their intuitive design, reliability, and performance.
            <br />
            <br />
            Whether building from the ground up or enhancing existing apps, I’m passionate about writing clean, maintainable code that translates into seamless user experiences.
          </p>

          <p style={{ textAlign: "justify" }}>
            🚀 Always eager to tackle new challenges, I enjoy working in collaborative environments where innovation meets impact.
            <br />
            <br />
            Let’s connect if you're looking to turn mobile app ideas into fully realized digital experiences!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
