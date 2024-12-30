Blind Matching Site Overview
The Blind Matching Site is a web application built using Spring Boot, HTML, CSS, Bootstrap, and JavaScript. The platform matches users based on their gender and preferences in a "blind" manner. The project demonstrates user management functionalities with professional and responsive design.

Features
User Registration and Login pages.
Dynamic matching algorithm to connect users based on preferences.
Form validation and interactivity using JavaScript.
Responsive design styled with CSS and Bootstrap.
Modular and clean codebase.
Tech Stack
Backend: Spring Boot
Frontend: HTML, CSS, Bootstrap, JavaScript
Database: MySQL
Build Tool: Maven
Folder Structure

blind-matching-site/
├── src/
│   ├── main/
│   │   ├── java/com/example/blindmatch/   # Java backend code
│   │   ├── resources/
│   │   │   ├── templates/                # HTML files
│   │   │   ├── static/css/               # CSS files
│   │   │   ├── static/js/                # JavaScript files
│   │   │   └── application.properties    # Application configuration
├── pom.xml                               # Maven dependencies
├── README.md                             # Documentation
└── database/                             # SQL script for database setup
Setup Instructions
Step 1: Clone the Repository

git clone https://github.com/kartik/matchmee
cd matchmee
Step 2: Configure the Database
Open src/main/resources/application.properties.

Update the MySQL database credentials:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/matching_site
spring.datasource.username=your_username
spring.datasource.password=your_password
Create the database using the SQL script:



mysql -u your_username -p < database/schema.sql
Step 3: Build and Run the Application


mvn spring-boot:run
Access the application at http://localhost:8080.

Step 4: Serve Static Files (Optional)
To serve the static templates and test responsiveness, open any .html file in the templates folder using your browser.

Key Functionalities
1. User Registration
Validates username, email, and password.
Provides real-time feedback for input errors.
2. Login Page
Allows users to log in using valid credentials.
Displays appropriate error messages for invalid inputs.
3. Matching Algorithm
Matches users based on their gender and preferences stored in the database.
Future Enhancements
Add Spring Security for authentication and role-based access.
Include a real-time chat feature for matched users using WebSocket.
Implement advanced matching algorithms with more preferences.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

