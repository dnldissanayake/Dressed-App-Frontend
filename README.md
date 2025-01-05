# Dressed Frontend Application

This is a React-based frontend application for the Dressed platform. The application is containerized using Docker for easy deployment and development.

## Prerequisites

Before running this application, make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (v16 or higher) - Optional, only needed for local development
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - Optional, only needed for local development

## Running with Docker

1. Clone the repository:
2. cd dressed-frontend
3. Run `docker build -t dressed-frontend .`
4. Run `docker run -p 3000:3000 dressed-frontend`
5. Access the application:
Open your browser and navigate to `http://localhost:3000`

To stop the container, press `Ctrl+C` in the terminal or run: