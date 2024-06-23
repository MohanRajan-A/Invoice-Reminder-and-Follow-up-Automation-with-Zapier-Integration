# Invoice Reminder and Follow-up Automation with Zapier Integration
 # Invoice Reminder and Follow-up Automation System

This project is a complete system to automate sending past-due invoice reminders and follow-up sequences. The system includes a backend microservice built with Node.js and a frontend built with React. Users can log in using Google OAuth, view their due invoices, and trigger automation actions through Zapier.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Additional Features](#additional-features)

## Features

- Google OAuth authentication
- View due invoices
- Trigger automation actions with Zapier

## Requirements

- Node.js 
- npm 
- MongoDB
- A Zapier account
      Note(- inside webhook.js file give your zapier URL)


Running the Application

Start the Backend
cd backend
node index.js

Start the Frontend
cd frontend
npm start


Make sure to replace placeholders such as `your_google_client_id`, `your_google_client_secret`, `your_mongo_db_uri`, and `your_zapier_webhook_url` with your actual credentials and URLs.



