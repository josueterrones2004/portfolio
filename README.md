# Josué Terrones — Developer Portfolio

Personal developer portfolio built to showcase my experience, technical skills, professional background and selected full-stack projects.

The website focuses on a clean, responsive and animated interface while keeping project information connected to GitHub.

## Overview

This portfolio presents my work as a **Full Stack Web Developer**, including:

- Professional experience
- Technical skills
- Education and career timeline
- Selected development projects
- GitHub repositories
- Contact information
- Downloadable CV

## Tech Stack

### Frontend

- React
- JavaScript
- Tailwind CSS
- Motion
- Vite

### Development

- Git
- GitHub
- Oxlint
- GitHub REST API

## Features

- Fully responsive layout
- Animated page sections and transitions
- Custom navigation and scrolling experience
- Interactive project cards
- Custom cursor
- Intro animation
- Downloadable CV
- GitHub profile integration
- Automatic loading of selected GitHub projects
- GitHub topic filtering for portfolio projects
- Fallback local project information if GitHub is unavailable

## GitHub Project Integration

The Projects section connects to the GitHub REST API and retrieves public repositories from my GitHub account.

Only repositories tagged with the following GitHub topic are displayed:

```text
portfolio
```

This allows projects to be added or removed from the portfolio directly through GitHub without exposing private repositories or unrelated repositories.

Project metadata such as the repository URL and deployment URL can be retrieved automatically while curated descriptions and technologies remain controlled locally.

## Project Structure

```text
portfolio/
├── public/
│   ├── Josue-Terrones-CV.pdf
│   ├── cursor-pointer.svg
│   ├── cursor.svg
│   └── jt-favicon.svg
│
├── src/
│   ├── components/
│   ├── data/
│   ├── sections/
│   ├── services/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

Clone the repository:

git clone https://github.com/josueterrones2004/portfolio.git
cd portfolio

Install dependencies:

npm install

Start the development server:

npm run dev

Build for production:

npm run build

Run the linter:

npm run lint
Selected Projects
DevBoard

Full-stack project and task management platform featuring:

Secure authentication
Project workspaces
Kanban workflows
Task creation and assignment
Project and task filtering
Responsive dashboards
MongoDB persistence
REST API backend

Repository:

https://github.com/josueterrones2004/devboard

Portfolio

This repository contains the source code for my personal developer portfolio.

It was designed and developed from scratch using React, Tailwind CSS, Motion and the GitHub REST API.

Author

Josué Terrones

Full Stack Web Developer
Tonalá, Jalisco, México

GitHub:
https://github.com/josueterrones2004

LinkedIn:
https://www.linkedin.com/in/josueterrones2004/

License

This project is intended for personal portfolio use.

The source code is publicly available for reference and demonstration purposes.