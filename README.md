# 🛡️ CyberSentinel: OEM Vulnerability Scripting Tool

**CyberSentinel** is a powerful vulnerability monitoring tool designed to automate the process of tracking critical and high-severity vulnerabilities in software, hardware, and firmware from Original Equipment Manufacturers (OEMs). The platform scrapes OEM and relevant sites, alerting users in real time about vulnerabilities via email, Slack, WhatsApp, Teams, and other communication channels. This system helps prevent the risk of missing critical updates, offering users a proactive approach to vulnerability management.

## 📝 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🛠️ Project Overview

**CyberSentinel** was developed to resolve a growing problem in the IT industry: ensuring that users are instantly informed about critical vulnerabilities in their software and hardware. It helps organizations and individuals stay protected from threats by continuously monitoring OEM and relevant sites for vulnerability updates and automatically notifying users when vulnerabilities are discovered.

### Problem Solved:
- **Automated Monitoring**: No need to manually track security updates and patches. CyberSentinel handles everything.
- **Real-Time Alerts**: Users are notified immediately about vulnerabilities in their products via multi-channel alerts, including email, Slack, Teams, and WhatsApp.
- **Secure Access**: Users can securely log in and manage their monitored products.
- **AI Chatbot Support**: Get instant support and guidance about vulnerabilities through an integrated AI chatbot.

### Solution Uniqueness:
- **Customizable Monitoring**: Users can define specific keywords, software names, hardware names, and firmware IDs to target vulnerability searches.
- **Real-Time Collaboration with OEMs**: The tool interacts with OEM websites to provide up-to-the-minute details about vulnerabilities.
- **60% Completion**: The tool is already 60% complete with continuous improvements and feature additions.

---

## 🎨 Features

### User-Facing Features:
- **Product Listing**: Users can list their software, hardware, and firmware by name or keyword for continuous monitoring.
- **Automated Web Scraping**: The system automatically scrapes OEM sites to search for critical vulnerabilities related to listed products.
- **Email Alerts**: Vulnerability alerts are sent to users via email when high-severity issues are found.
- **Multi-Channel Alerts**: Notifications via WhatsApp, Teams, and Slack ensure that alerts are delivered through users’ preferred channels.
- **AI Chatbot**: Provides instant guidance on reported vulnerabilities, offering support and further information.

### Admin Features:
- **Dashboard with Charts**: Visualize vulnerability trends and monitoring status.
- **User Management**: Manage user roles and permissions.
- **Profile Management**: Users can update their profile information, activity logs, and passwords.
- **Help Center & FAQ**: Documentation and assistance for users.

---

## 🛠️ Technologies

- **Frontend**: React.js, Tailwind CSS, Framer Motion (for animations), and React Router DOM.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (to store product details and vulnerability reports).
- **Web Scraping**: Python (using Selenium and BeautifulSoup).
- **Authentication**: JSON Web Token (JWT) for secure access.
- **Email Alerts**: Nodemailer (for sending email notifications).
- **Multi-Channel Alerts**: Integrations with Slack, WhatsApp, Teams.
- **AI Chatbot**: Integrated AI system for user support.
  
---

## 🚀 Getting Started

To get **CyberSentinel** up and running locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Yarn**: [Download Yarn](https://classic.yarnpkg.com/en/docs/install)
- **MongoDB**: Set up a local or cloud MongoDB instance.
- **Python**: [Download Python](https://www.python.org/downloads/) (for web scraping scripts).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/brittytino/CyberSentinel.git
   cd Windows-Clone
   ```

2. **Install Frontend & Backend Dependencies**:

   ```bash
   yarn install
   ```

3. **Start the Development Server**:

   ```bash
   yarn start
   ```

4. **Start the Backend Server** (in another terminal):

   ```bash
   cd backend
   yarn start
   ```

The application will automatically open in your browser at [http://localhost:3000](http://localhost:3000).

### Web Scraping Setup:
1. **Install Python Dependencies**:

   Navigate to the `web-scraper` directory and install the necessary Python packages:
   
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Web Scraper**:

   Start the scraper script to continuously monitor vulnerabilities:

   ```bash
   python scraper.py
   ```

---

## 💻 Usage

1. **Login/Register**: Users need to create an account and log in to access the portal.
2. **Product Listing**: Add your software, hardware, or firmware for monitoring.
3. **Real-Time Monitoring**: Once products are listed, the platform continuously monitors OEM sites and sends alerts when new vulnerabilities are detected.
4. **Alerts & Notifications**: You’ll receive an email and multi-channel notifications (Slack, WhatsApp, Teams) whenever a critical vulnerability is discovered.

---

## 🤝 Contributing

We welcome contributions from developers of all levels. Here’s how you can help:

1. **Fork the Repository**: Create a new branch for your feature or bug fix.
2. **Submit a Pull Request**: Ensure your code follows the project’s guidelines.
3. **Review and Approval**: Your pull request will be reviewed and merged if it meets the project standards.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For questions or feedback, feel free to reach out:
- **Email**: [brittytino08@gmail.com](mailto:brittytino08@gmail.com)
- **Instagram**: [@brittytino](https://www.instagram.com/brittytino)
- **GitHub**: [brittytino](https://github.com/brittytino)

---

<div align="center">
  <strong>Stay Ahead of Vulnerabilities with CyberSentinel! 🛡️</strong>
</div>

--- 
