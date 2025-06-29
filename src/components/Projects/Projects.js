import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Angle AI"
              description="Angle AI is an innovative voice-activated assistant app that makes life easier.
Simply hold the animated circle and speak your commands naturally.
Book rides, order food, and make appointments effortlessly.
Watch videos, listen to music, and control entertainment with ease.
Schedule meetings and manage your calendar all through voice commands.
You can also switch to texting and chat with the agent anytime.
Supports a wide range of tasks, combining convenience and flexibility.
Smart AI understands context and responds quickly to your needs.
No complicated menus — just speak or type to get things done.
Perfect for busy users who want hands-free control.
Seamlessly integrates with popular apps and services.
Offers personalized suggestions based on your habits.
Secure and privacy-focused to keep your data safe.
User-friendly design with an engaging animated interface.
Makes everyday tasks faster, simpler, and more fun.
Ideal for work, travel, and daily routines.
Angle AI transforms your voice into powerful action.
Experience the future of smart assistance today."
     
              demoLink="https://drive.google.com/file/d/1OXjnW9NjZCF70gCDqms1xwEjscn4mkt9/view?usp=drive_link"
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Potolo"
              description="Potolo is a user-friendly ride-hailing and parcel delivery app for everyday convenience.
Users can book rides or request local deliveries in just a few taps.
Live driver tracking, ETA updates, and fare estimates enhance transparency.
Supports multiple payment options including wallet and cards.
Users can save locations, view ride/delivery history, and manage profiles.
Push notifications provide real-time updates throughout the service.
Secure and simple login flow ensures a smooth user experience.
Built with cross-platform support and a lightweight, responsive UI.
Focused on fast, safe, and reliable urban transportation and delivery."
     
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Potolo Driver"
              description="Potolo Driver is a professional ride and delivery management app for registered drivers.
Allows drivers to accept ride and parcel delivery requests in real time.
Includes GPS-based navigation, smart route optimization, and live tracking.
Offers in-app earnings tracking, trip history, and performance insights.
Drivers receive instant notifications for new requests and cancellations.
Features secure login, ID verification, and editable driver profiles.
Built with a driver-first UI for quick, reliable operation.
Optimized for Android and iOS using a scalable backend.
Designed to maximize efficiency, safety, and driver satisfaction."
     
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="List-n-Buy"
              description="List-n-Buy is a powerful all-in-one marketplace app for everything you need.
Buy groceries, household essentials, and daily use items in a few taps.
Shop for furniture, home appliances, and decor with ease.
Browse a wide range of cars, bikes, and their parts or accessories.
Find and purchase books across genres and educational levels.
Whether it’s a light bulb or a luxury sofa, it’s all here.
Intuitive search and filters help you find exactly what you need.
Secure payment options and trusted sellers ensure safe transactions.
Real-time tracking keeps you updated on your orders.
Users can create lists, save favorites, and get deal alerts.
Multi-category browsing makes shopping seamless and enjoyable.
Ideal for individuals, families, and businesses alike.
Supports multiple delivery and pickup options.
All-in-one shopping, just a tap away.
With List-n-Buy, if it exists—you can buy it."
     
              demoLink="https://drive.google.com/file/d/18aEdVJsM0TVt3kVePnfNSbB59qrLIRvl/view?usp=drive_link"
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Founder Fusion"
              description="Founder Fusion is a powerful crypto trading app designed for smooth and secure digital asset exchange.
Trade a wide range of cryptocurrencies with real-time market data at your fingertips.
Advanced trading tools help users analyze trends and execute strategies effectively.
Monitor your portfolio with detailed performance metrics and charts.
Fast and secure transactions ensure your trades are executed instantly.
Set custom alerts for price changes, market news, and trade opportunities.
Integrated wallet supports multiple cryptocurrencies with robust security.
Access educational resources to improve your trading skills.
User-friendly interface tailored for both beginners and professional traders.
Stay updated with the latest crypto news and market insights.
Manage your assets anytime, anywhere with mobile convenience.
Supports low fees and competitive spreads for cost-effective trading.
Ideal for investors looking to grow their crypto portfolio confidently.
Founder Fusion makes crypto trading accessible, secure, and efficient."
     
              demoLink="https://drive.google.com/file/d/1UuS-2kavq7Xm4Ev337cWRa_gjj8pNUjN/view?usp=drive_link"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Seyyah Mobile"
              description="Seyyah Mobile is a smart eSIM app designed for seamless global connectivity.
Buy and activate eSIM data plans instantly without needing a physical SIM card.
Perfect for travelers—stay connected in multiple countries with ease.
Browse affordable data packages from different regions and providers.
Quick setup with QR code scanning or in-app activation.
Manage multiple eSIM profiles directly from your phone.
Track data usage in real-time and receive low-data alerts.
Secure, fast, and hassle-free mobile internet access anywhere.
No roaming charges or hidden fees—pay only for what you need.
Supports a wide range of eSIM-compatible smartphones.
User-friendly interface makes plan selection and activation simple.
Ideal for digital nomads, tourists, and business travelers.
Seyyah Mobile keeps you connected, wherever you go."
     
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Champions of the Future"
              description="Champions of the Future is a comprehensive app tailored for golf enthusiasts and professionals.
Organize and manage golf tournaments with ease, including match scheduling and scoring.
Book golf venues and tee times at your favorite courses seamlessly.
Buy or rent a wide range of golf accessories and equipment directly through the app.
Stay updated with live match results, player rankings, and upcoming events.
Connect with other golfers to share tips, join groups, and build your community.
Access expert tutorials and golf-related content to improve your game.
User-friendly design ensures quick navigation and smooth experience.
Perfect for casual players, professional golfers, and golf clubs.
Integrated payment options make booking and purchases simple and secure.
Track your progress and participate in challenges and leaderboards.
Receive notifications for event updates and special offers.
Supports both individual players and golf event organizers.
All your golf needs, from playing to shopping, covered in one app.
Champion brings the entire golf world to your fingertips."
     
              demoLink="https://drive.google.com/file/d/1oCNq2344wYXAabTmpQy9JvM5EKwP1OuS/view?usp=drive_link"
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Skilled Talk"
              description="Skilled Talk is a professional networking app designed to connect skilled individuals across industries.
Build a detailed profile showcasing your experience, skills, and achievements.
Connect with professionals, colleagues, and potential employers.
Share updates, insights, and career milestones to grow your presence.
Search for jobs, internships, and freelance opportunities tailored to your field.
Join industry-specific groups and discussions to expand your knowledge.
Employers can post openings and discover talent through advanced filters.
Private messaging enables direct, meaningful professional conversations.
Stay informed with curated career content and news.
Highlight certifications, projects, and recommendations on your profile.
Smart algorithms suggest connections and job matches.
Ideal for job seekers, recruiters, entrepreneurs, and freelancers.
User-friendly interface for seamless browsing and engagement.
Safe and secure platform for career development.
Skilled Talk is where professionals grow, connect, and succeed.

"
               demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>  

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Y-Fitness"
              description="Y-Fitness is a complete fitness app for both gym and home workouts.
It offers guided exercises with step-by-step videos for proper form.
Users can build custom workout plans based on personal goals.
Includes a diet planner to support healthy eating habits.
Track your meals easily using the built-in barcode scanner.
Provides daily fitness tips and progress tracking features.
Adaptable for beginners and advanced users alike.
Supports weight loss, muscle gain, and general wellness.
Clean, user-friendly interface for a smooth experience.
Helps build discipline and consistency in your fitness journey.
All-in-one tool for workouts, nutrition, and progress monitoring.
Y-Fitness keeps your health goals within reach."
               demoLink="https://drive.google.com/file/d/1TNpQyIButdIHDwfc6ejPAXE0hASrT1uo/view?usp=drive_link"
            />
          </Col>  
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="mSwali"
              description="mSwali is an engaging quiz app designed to test and reward your knowledge.
The main screen features four quiz modes: Basic, Pro, Practice, and Timed.
Users purchase coins to participate in any quiz category.
Each quiz challenges your skills and sharpens your thinking.
Earn coins for high scores and improve your overall ranking.
Global leaderboard shows your position among all users.
Coins won from quizzes can be converted into real money.
Withdraw your earnings securely through supported payment methods.
Stay updated with real-time notifications for rewards and updates.
View your full transaction history within the app.
Supports learning while making it fun and competitive.
Perfect for quiz lovers who enjoy both learning and earning.
User-friendly design for smooth navigation and gameplay.
Build your skills, rise in rank, and get rewarded.
mSwali makes quizzes exciting, competitive, and profitable."
               demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Savey"
              description="Savey is a smart expense management app designed to track your daily spending.
Simply connect your bank card to automatically monitor all transactions.
The app categorizes your expenses to give you a clear financial overview.
Set monthly spending limits and receive alerts when you’re close to them.
Get reminders for important upcoming payments so you never miss a due date.
Savey helps you stay in control of your budget effortlessly.
Visualize your financial habits with dynamic, animated bars and graphs.
Quick insights make it easy to adjust spending and save more.
Secure, real-time data keeps you updated on your financial health.
Ideal for students, professionals, and families alike.
User-friendly design makes managing money simple and stress-free.
Track, plan, and grow your savings with confidence.
With Savey, every expense counts — and is accounted for."

              demoLink="https://drive.google.com/file/d/1zrSJiZ_W5nr5OFQwQbGDZNQF6Mbf4Ci8/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Getus"
              description="Getus is a social app built for connecting around events in France.
Log in using your phone number to start chatting instantly.
Join group chats related to specific events and locations.
Solo one-on-one chats are also supported for private conversations.
Location-based suggestions help you discover relevant event groups.
Create your own groups or join friends’ groups with ease.
Perfect for festivals, meetups, and community gatherings.
Real-time messaging keeps you connected before, during, and after events.
Getus brings people together through shared experiences."
               demoLink="https://drive.google.com/file/d/1xWUhexXwWvvDSTW-uY5zgPQcoAK95Hr9/view?usp=drive_link"
            />
          </Col> 


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Pentrem"
              description="Pentrem is an all-in-one app for everything automotive.
Book rides quickly and conveniently from your phone.
Schedule car repairs and maintenance with trusted service providers.
Shop for car accessories and spare parts in one place.
Easily compare and purchase car insurance plans.
Track all your vehicle needs through a single dashboard.
Secure payments and verified vendors ensure peace of mind.
Designed for car owners, drivers, and auto enthusiasts.
Fast, reliable, and user-friendly experience.
Save time by managing all car-related tasks in one app.
Pentrem simplifies the way you move and maintain your vehicle."
     
              demoLink="https://drive.google.com/file/d/1vudBkw8AQbFkUxjWSXgB8ccT7Z1tL3qh/view?usp=drive_link"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="KalpX"
              description="KalpX is a dedicated app for managing and attending dance classes.
It features three main sections tailored for students, teachers, and admins.
The student section provides access to class schedules and video lessons.
Students can interact with their dance teachers through in-app chat.
They can also receive updates, practice materials, and class reminders.
The teacher section allows instructors to upload videos and class content.
Teachers can communicate with students and manage class updates easily.
They can track student progress and schedule upcoming sessions.
The admin section oversees the entire platform’s operations.
Admins manage users, content uploads, schedules, and class coordination.
Ensures smooth communication between teachers and students.
Clean UI and role-based access keep the app simple and efficient.
Built for dance schools, studios, and independent instructors.
Supports all dance forms and class formats (online/offline).
Notifications keep everyone updated in real-time.
KalpX blends learning, teaching, and management in one place.
A complete digital hub for the world of dance."
     
              demoLink="https://drive.google.com/file/d/1OLCZCY-jTE0XjjXmJROk2lwYTur1KaJQ/view?usp=drive_link"
            />
          </Col>

           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Political"
              description="Political is a modern app designed for secure voting and public surveys.
It allows users to participate in polls with just a few taps.
The app calculates voting and survey percentages in real-time.
Age-wise and region-wise ratios are automatically analyzed.
Advanced probability models help predict outcomes and trends.
All essential features for voting and survey processes are included.
Designed for transparency, accuracy, and ease of use.
Supports multiple languages for wider accessibility.
Ideal for political events, opinion polls, and community decisions.
User-friendly interface ensures smooth participation.
Admins can easily create, manage, and monitor surveys.
Political brings powerful digital tools to democratic engagement."
              demoLink="https://drive.google.com/file/d/17SFah_XmqX2oeDo_XZTfvsxWis1c8Wyt/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Rota Go"
              description="Rota Go is a workplace management app for companies and organizations.
It helps track employee attendance quickly and accurately.
Managers can assign tasks and oversee project progress in real-time.
Each employee can view their duties and deadlines clearly.
The app ensures smooth coordination between teams and departments.
Product-related plans are organized and assigned through the platform.
Centralized control helps managers streamline workflow and productivity.
Ideal for remote and in-office teams alike.
Rota Go keeps organizational operations running efficiently."
              demoLink="https://drive.google.com/file/d/1vQ0K5IuJMIlhiF2xB1OmJBJ4YCkqNuMN/view?usp=drive_link"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bunny"
              description="Bunny is a fun and entertaining app that transforms your voice into multiple character voices.
Record your voice easily with just a tap.
Choose from a variety of voice effects, including animal sounds and cartoon characters.
Perfect for pranks, storytelling, or creative projects.
Instantly hear your voice changed in real-time.
Share your transformed recordings with friends on social media.
User-friendly interface makes voice changing quick and simple.
Explore endless fun with unique and funny voice filters.
Great for kids, content creators, and anyone who loves a laugh.
Regular updates add new voices and effects.
Safe and free to use with no complicated setup.
Bunny brings your voice to life in the most playful way."
              demoLink="https://drive.google.com/file/d/1e0JSlgU5GXbY2nuUjomG9xuUNFfcgGfq/view?usp=drive_link"              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Swipe Pro"
              description="Swipe Pro is a smart note-taking app with intuitive swipe gestures.
Easily add, organize, or remove important notes with a simple swipe.
Stay on top of tasks with customizable notification alerts.
Designed for quick access and effortless note management.
Perfect for reminders, to-do lists, or daily thoughts.
Clean interface makes navigation fast and clutter-free.
Swipe Pro keeps your priorities just a swipe away."
          
              demoLink="https://drive.google.com/file/d/1Wuvb9c85N0itOp53C4nSzfWvADE2_wca/view?usp=drive_link" 
              //<--------Please include a demo link here
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Trading App"
              description="Trading App provides a seamless platform for buying and selling stocks, commodities, and other assets.
Access real-time market data and live price updates.
Execute trades quickly with an easy-to-use interface.
Track your portfolio performance with detailed charts and analytics.
Set custom alerts for price movements and news.
Supports multiple asset types and markets globally.
Secure transactions with advanced encryption and authentication.
Educational tools help users make informed trading decisions.
Compatible with both beginners and experienced traders.
Manage your investments anytime, anywhere on mobile or desktop.
This app makes trading efficient, transparent, and accessible."
          
              demoLink="https://drive.google.com/file/d/15bad36PNwwrrH80z8c9KUS5TGlYcX9wr/view?usp=drive_link" 
              //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ThroxScan"
              description="ThroxScan is a healthcare app designed to simplify medical report analysis.
Users can scan patient reports to get instant, AI-powered results.
The app offers medical suggestions based on scanned data.
It helps users understand their health conditions more clearly.
ThroxScan also supports booking appointments with doctors directly.
All health data is securely stored for easy access and tracking.
A smart tool for faster, more informed healthcare decisions."
               demoLink="https://drive.google.com/file/d/1dho6MoC97LqMOAY-YWjGIAv291C-25ot/view?usp=drive_link"
            />
          </Col>
          
          
        
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Digital Payment App"
              description="This app is a secure and convenient digital payment solution for everyday transactions.
Send and receive money instantly using just a mobile number or QR code.
Pay bills, recharge mobile phones, and top-up accounts with ease.
Supports bank transfers and wallet payments all in one place.
Offers real-time transaction notifications for complete transparency.
Built-in security features protect your financial information.
User-friendly interface designed for fast and hassle-free payments.
Access transaction history and manage your finances on the go.
Ideal for individuals, businesses, and service providers.
Works seamlessly across different devices and networks.
This app simplifies how you handle money digitally."
               demoLink="https://drive.google.com/file/d/12O26GA21CKvzjc7TeGHWQhM0VtSSyAWf/view?usp=drive_link"
            />
          </Col>  
          
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="eSchool"
              description="eschool is a comprehensive online learning platform for students of all ages.
It offers virtual classrooms where students can attend live lessons from anywhere.
Access a wide range of courses across different subjects and grade levels.
Interactive video lessons and digital study materials enhance learning.
Students can submit assignments and receive feedback directly through the app.
Teachers can create classes, share resources, and track student progress.
Built-in chat and discussion forums encourage student-teacher interaction.
Supports personalized learning paths to meet individual needs.
Flexible scheduling allows students to learn at their own pace.
Secure and user-friendly platform designed for effective remote education.
eschool brings quality education to your fingertips."
               demoLink="https://drive.google.com/file/d/1xVzLZKiFVGAwKRT_jyFg97l8l7EENXVk/view?usp=drive_link"
            />
          </Col>   
          


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="DDF"
              description="DDF is a health app where doctors provide personalized weekly nutritional diet plans.
Users receive tailored diet suggestions based on their health needs.
Chat directly with nutritionists and doctors for guidance and support.
Book appointments easily through the app for consultations.
Track your diet progress and updates in one place.
Access detailed meal plans and nutritional information anytime.
Designed to promote healthier eating habits and lifestyle changes.
Secure and user-friendly platform for effective communication.
Ideal for anyone looking to improve their diet with expert help.
Stay motivated with regular check-ins and personalized advice.
DDF makes managing your nutrition simple and effective."
               demoLink="https://drive.google.com/file/d/1WPzhZHoRbdeXkWaTvOWRWiC3khnVqGD1/view?usp=drive_link"
            />
          </Col> 
          
          
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Front Runner"
              description="Front Runner is a project management app designed to streamline teamwork.
Create groups for each project with all involved members.
Assign tasks easily to specific team members.
Track progress and deadlines in real-time.
Collaborate through group chats and updates within the app.
Visual dashboards provide clear project overviews.
Helps managers monitor workload and productivity.
Ideal for teams of all sizes and industries.
Keeps projects organized and on schedule.
Front Runner makes managing projects simple and efficient."
               demoLink="https://drive.google.com/file/d/1kLaXzEhqOP0ngsjTofldxtufHdBMtq9c/view?usp=drive_link"
            />
          </Col>     
          
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Kasani"
              description="Kasani Fish is a specialized app for buying and selling fish.
Users can make appointments for scheduled purchases or sales.
The app connects buyers and sellers with verified listings.
Offers secure deals with proper packaging options.
Built-in barcode scanner ensures product tracking and authenticity.
Ideal for fish markets, suppliers, and individual buyers.
Smooth, fast, and organized seafood trading experience.
Kasani Fish simplifies the entire fish trade process.

"
               demoLink="https://drive.google.com/file/d/1ZqAHPfBgbgj3xAwsOjup-q0TgmMXtiaj/view?usp=drive_link"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Kamaoo"
              description="Kamaoo is a smart recruitment app connecting job seekers with employers.
Users can browse jobs, apply instantly, and track application status.
Companies can post openings and manage applicants easily.
AI-powered matching ensures relevant job recommendations.
Supports profiles with resumes, skills, and experience highlights.
Ideal for part-time, full-time, and freelance opportunities.
Kamaoo makes finding and hiring talent faster and smarter."
               demoLink="https://drive.google.com/file/d/1QSuV1rOieITwAhm7XrgvrcvG28xNfdJU/view?usp=drive_link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
