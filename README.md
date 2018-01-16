# Resiliency Map V2

## Installation

After cloning the repo to your local machine:
- If using a local MongoDB server make sure it's running.
- Rename `.env.example` to `.env` and update the MongoDB connection string if needed.
- `npm run init` - installs dependencies for both server and client.
- `npm run dev` - starts the backend api server and the frontend React client.


The API Server should now be running at `localhost:5000` and the React App at `localhost:3000`.

Note: Currently, the frontend is just the default install from Create React App and does nothing.

Alternatively, the frontend and backend can be started separately with `npm run server` and `npm run client`.
