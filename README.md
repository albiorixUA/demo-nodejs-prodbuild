# demo-nodejs-prodbuild

## Description

This is a Node.js project with TypeScript, Express, for development and production builds.

## Prerequisites

- Node.js (>=16.20.2)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/demo-nodejs-prodbuild.git

## Development

To run the project in development mode with automatic reloading:

```bash
npm run dev
```

## Building for Production
To build the project for production:

```bash
npm run prod
```
This command sets the NODE_ENV to production, compiles TypeScript files using tsc, and then starts the server using the compiled JavaScript files.