# The PERN Stack

A simple guide to the four technologies that make up the PERN stack.

## 1. P - PostgreSQL (The Database)

**What it is:** An object-relational database system.
**What it does:** Stores all your application's data (like user profiles, products, and messages) in structured tables.

## 2. E - Express (The Server Framework)

**What it is:** A web application framework for Node.js.
**What it does:** Handles the logic on the server. It manages "routes" (URL paths), processes requests from the frontend, and talks to the database.

## 3. R - React (The Frontend)

**What it is:** A JavaScript library for building user interfaces.
**What it does:** Creates what the user sees and interacts with in the browser. It sends requests to Express to get or save data.

## 4. N - Node.js (The Runtime)

**What it is:** A JavaScript runtime environment.
**What it does:** Allows you to run JavaScript on your computer/server (instead of just in the browser). It powers both Express and the tools used to run React.

---

### 🔄 How they work together

1. **React** sends a request (e.g., "Get user data") to the server.
2. **Node.js** runs the **Express** server, which receives the request.
3. **Express** asks **PostgreSQL** for the specific data.
4. **PostgreSQL** gives the data back to Express.
5. **Express** sends the data back to **React** to display it.
