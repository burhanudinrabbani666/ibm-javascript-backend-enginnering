# Intro to software development

### Basics of Website Interaction

- Users access websites through browsers by entering URLs, which request data from servers.
- Servers respond with HTML (structure), CSS (style), and JavaScript (interactivity) to display the website.

### Static and Dynamic Content

- Websites contain static elements stored on servers and dynamic elements generated on request.
- Dynamic content often involves data from databases or other systems to enhance user experience.

### Front-End and Back-End Development

- Front-end development involves client-side technologies like HTML, CSS, and JavaScript that users interact with.
- Back-end development handles server-side logic, functionality, authentication, and database interactions.
- Full-stack developers work with both front-end and back-end technologies.

### Development Tools

- Developers use code editors and Integrated Development Environments (IDEs) to write, build, and debug code.
- Popular tools include Sublime Text, Atom, VS Code, Visual Studio, Eclipse, and NetBeans, often integrated with version control systems like Git.

## Learning Front-End Development

### Website Structure and Styling

- HTML is used to create the physical structure of a website, including elements like text, links, images, and buttons.
- CSS is used to style the website, providing uniformity in colors, fonts, layouts, and ensuring cross-browser and device compatibility.

### Adding Interactivity and Advanced Styling

- JavaScript adds interactivity to websites, such as making buttons functional and enabling dynamic content.
- Advanced styling languages like SASS and LESS extend CSS capabilities, allowing for more organized and efficient style management.

### Responsive and Reactive Design

- Reactive websites adapt their content based on the device or screen size, showing different versions for PCs or mobile devices.
- Responsive design automatically resizes and adjusts the website layout to fit the device screen, maintaining usability and features.

### JavaScript Frameworks for Front-End Development

- Angular, maintained by Google, helps render HTML pages quickly with built-in routing and validation tools.
- React.js, developed by Facebook, is a library for building UI components but requires additional tools for routing.
- Vue.js focuses on the view layer, offering flexibility and scalability, and can function as either a library or a full framework.

### Continuous Evolution of Front-End Development

- Front-end developers must continuously update websites to keep up with evolving technologies.
- Websites need to work seamlessly across multiple browsers, operating systems, and devices to provide a consistent user experience.

---

The content explains the role and importance of back-end development in web and Cloud applications.

### Role of Front-End and Back-End Developers

- Front-end developers create the user interface using HTML, CSS, and JavaScript, focusing on what users see and interact with.
- Back-end developers manage server infrastructure, process user requests, supply data, and ensure secure services behind the scenes.

### Back-End Developer Responsibilities

- Handle data processing for user inputs such as login, searches, and payments.
- Manage user account authentication, authorization, and secure storage of sensitive information.
- Create and maintain APIs, routes, and endpoints to connect front-end requests to back-end services.

### Technologies and Skills for Back-End Development

- Use programming languages like JavaScript (Node.js, Express) and Python (Django, Flask).
- Work with databases using SQL and Object Relational Mapping (ORM) tools.
- Understand server-side routing and how to handle different types of client requests securely.

Overall, back-end development is essential for the functionality, security, and data management of websites and Cloud applications, requiring collaboration with front-end developers and proficiency in various technologies.

## Teamwork and Squads

### Definition and Benefits of Teamwork

- A team is a group working together towards a common goal, combining diverse skills and talents.
- Teamwork fosters creativity, knowledge sharing, better quality code, reduced stress, and a broader understanding of the project.

### Teamwork Practices in Software Engineering

- Teams hold kick-off meetings to plan projects, assign tasks, and set goals.
- Regular meetings, code reviews, walkthroughs, and retrospectives help maintain progress and improve future projects.

### Squads in Agile Development

- Squads are small teams (up to 10 members) used in Agile methodologies.
- Typically include a squad leader, software engineers, and possibly UX designers, sometimes practicing pair programming for collaboration.

## Pair Programming

### Pair Programming Styles

- Driver/navigator style: One developer types code (driver) while the other reviews and guides (navigator), with regular role swaps to maintain engagement.
- Ping-pong style: Incorporates test-driven development where one writes a failing test and the other writes code to pass it, swapping roles for each task.
- Strong style: The navigator (usually more experienced) directs the driver, who implements ideas without interruption, ideal for mentoring junior developers.

### Benefits of Pair Programming

- Enhances knowledge sharing and skill development, including technical and soft skills like communication and problem-solving.
- Results in higher quality code with fewer errors and bugs, and enables continuous code review during development.

### Challenges of Pair Programming

- Requires sustained focus, which can be tiring, and scheduling can be impacted by personal commitments.
- Risk of one partner dominating the process or personality clashes affecting collaboration.
- Can create a noisy environment when multiple pairs work in the same space.

# Tools in software development

### Version Control Systems

- Track changes in source code, record who made changes and when, and resolve conflicts, which is crucial for team collaboration and useful even for solo developers.
- Git and GitHub are popular tools that manage code repositories, support branching for focused development, and merging changes back into the main codebase.

### Libraries

- Collections of reusable code that provide specific functions or features, allowing developers to save time by not building from scratch.
- Examples include jQuery for JavaScript DOM manipulation, email-validator for validating email addresses, and Apache Commons Proper for reusable Java components.

### Frameworks

- Provide a standardized structure or skeleton for building applications, dictating program architecture and flow.
- Frameworks require early selection and impose a specific workflow, often calling developer code rather than the other way around, a concept known as inversion of control.
- Examples include AngularJS and Vue.js for JavaScript web apps, and Django for Python web development. Frameworks often include their own libraries and promote standardized, efficient app development.

### CI/CD Practices

- Continuous Integration (CI) automates frequent code integration and testing to ensure components work together smoothly.
- Continuous Delivery (CD) follows CI by deploying code changes automatically to testing or staging environments.

### Build Tools

- Build tools automate compiling source code into binaries, managing dependencies, and packaging code.
- They help coordinate complex projects with multiple developers by automating tasks like downloading dependencies, running tests, and deployment.

### Packages and Package Managers

- Packages bundle app files, installation instructions, and metadata for easy distribution.
- Package managers handle finding, installing, updating, and uninstalling software packages while managing dependencies and verifying package integrity.

## bSoftware Stacks

### Definition and Components of Software Stacks

- A software stack includes programming languages, frameworks, and tools that work together to support application execution, with higher layers serving user tasks and lower layers interacting with hardware.
- Common components include front-end technologies (UI tools, frameworks) and back-end technologies (web servers, databases, operating systems).

### Examples of Software Stacks

- Python-Django stack uses Python and Django framework, suitable for large-scale web apps.
- Ruby on Rails stack combines Ruby language with a server-side framework, good for data transfer and front-end development.
- ASP.NET stack uses Microsoft technologies like ASP.NET MVC, IIS, SQL Server, and Azure.
- LAMP stack (Linux, Apache, MySQL, PHP) is an early, open-source stack for websites and cloud apps.
- MEAN stack (MongoDB, Express.js, Angular.js, Node.js) is JavaScript-based and platform agnostic.
- Variants like MERN (React instead of Angular) and MEVN (Vue.js instead of Angular) offer different front-end frameworks.

### Advantages and Challenges of Selected Stacks

- MEAN stack benefits from using a single language (JavaScript) and open-source resources but may struggle with large-scale apps and relational data needs.
- MEVN stack shares MEAN’s advantages but has fewer reusable libraries due to Vue.js being newer.
- LAMP stack is well-supported and flexible in swapping components but less platform agnostic and uses multiple languages across front-end and back-end.

Overall, software stacks vary in complexity and components, chosen based on application needs, developer skills, and environment.
