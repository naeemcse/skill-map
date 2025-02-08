# Skill Map 🗺️

**Skill Map** is a cutting-edge platform designed to connect users with location-based professionals and service providers seamlessly. Built using the **MERN stack (MongoDB, Express.js, React, Node.js)**, **Next.js**, and **MySQL**, this project offers a robust and scalable solution for finding and interacting with service providers. The platform also integrates **Google Maps API** for easy location-based searches and provides features like **one-to-one chatting**, **rating and review systems**, and more. Skill Map won **1st place** at the **NSTU Project Showcase 2024**!

---

## Features ✨

- **Location-Based Professional Hunting**: Find professionals and service providers near you using Google Maps API integration.
- **One-to-One Chatting**: Communicate directly with service providers through the platform.
- **Rating and Review System**: Rate and review service providers to help others make informed decisions.
- **Google Maps Integration**: Easily locate service providers with interactive maps.
- **User-Friendly Interface**: Built with **Next.js** and **Tailwind CSS** for a smooth and responsive user experience.
- **Secure Authentication**: Utilizes **JWT (JSON Web Tokens)** and **bcryptjs** for secure user authentication.
- **Real-Time Notifications**: Stay updated with real-time alerts and notifications.

---

## Technologies Used 🛠️

- **Frontend**: 
  - Next.js
  - React
  - Tailwind CSS
  - Framer Motion (for animations)
  - Tiptap (for rich text editing)
- **Backend**:
  - Node.js
  - Express.js
  - Prisma (ORM for MySQL)
- **Database**:
  - MySQL
- **Authentication**:
  - JWT (JSON Web Tokens)
  - bcryptjs (for password hashing)
- **APIs**:
  - Google Maps API (for location-based services)
  - Uploadthing (for file uploads)
- **Other Tools**:
  - Nodemailer (for email notifications)
  - React Hot Toast (for notifications)
  - Lucide React (for icons)

---

## Installation 🚀

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/naeemcse/skill-map.git
   cd skill-map
2.   ** Install dependencies**: 
```bash
npm install
```
3. **Set up environment variables**:
Create a .env file in the root directory and add the following variables:

```env
DATABASE_URL="mysql://your-database-connection-string"
JWT_SECRET="your-jwt-secret-key"
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
NODEMAILER_EMAIL="your-email"
NODEMAILER_PASSWORD="your-email-password"
```
4. **Set up the database**:
Run the following command to migrate the database schema:
```bash
npx prisma migrate dev
```
5. **Run the development server**:
```bash
npm run dev
```
Open the app:
Visit http://localhost:3000 in your browser.

### Project Structure 📂
```
skill-map/
├── components/         # Reusable React components
├── pages/              # Next.js pages
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets (images, fonts, etc.)
├── styles/             # Tailwind CSS and custom styles
├── utils/              # Utility functions and helpers
├── .env.example        # Example environment variables
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore file
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

### Contributing 🤝

We welcome contributions! If you'd like to contribute to Skill Map, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bugfix.
3. **Commit your changes**.
4. **Push your branch** and open a pull request.

---

### License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Acknowledgments 🙏

- **NSTU Project Showcase 2024** for providing the platform to showcase this project.
- **Google Maps API** for enabling location-based services.
- **Prisma** for simplifying database management.
- **Tailwind CSS** for making styling a breeze.

---

### Contact 📧

For any inquiries or feedback, feel free to reach out:

- **Email**: csenajmulislamnaeem@gmail.com
- **GitHub**: [naeemcse](https://github.com/naeemcse)

---

Thank you for checking out **Skill Map**! We hope this platform makes finding and connecting with professionals easier and more efficient. 🌟
