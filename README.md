# School Management System

This is a basic school management system built using Node.js, Express.js, MySQL, Sequelize, Vue.js, and Bootstrap.

## Technology Stack

-   **Frontend:** Vue.js, Bootstrap
-   **Backend:** Node.js, Express.js
-   **Database:** MySQL
-   **Additional Libraries:** Axios, Vue Router, Vuex (not fully implemented)

## Setup

### Backend

1.  Navigate to the backend directory:

    ```bash
    cd backend
    ```
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Create a MySQL database named `school_db`.
4.  Update the `config/database.js` file with your MySQL credentials.
5.  Run the server:

    ```bash
    node server.js
    ```

### Frontend

1.  Navigate to the frontend directory:

    ```bash
    cd frontend
    ```
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Run the development server:

    ```bash
    npm run serve
    ```

## API Endpoints

The backend exposes the following API endpoints:

-   `GET /api/students`: Get all students.
-   `POST /api/students`: Add a new student.
-   `GET /api/students/:id`: Get a student by ID.
-   `PUT /api/students/:id`: Update a student.
-   `DELETE /api/students/:id`: Delete a student.

## Components

The frontend includes the following components:

-   `StudentList.vue`: Displays a list of students.
-   `AddStudent.vue`: Allows adding new students.

## Routing

The frontend uses Vue Router for navigation:

-   `/students`: Displays the `StudentList` component.
-   `/add-student`: Displays the `AddStudent` component.

## Additional Notes

-   This is a basic implementation and can be extended with more features.
-   The frontend uses Bootstrap for styling.
-   The backend uses Sequelize for database interaction.
