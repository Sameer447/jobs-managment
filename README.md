Jobs Management System
This is a Vue.js project for managing jobs. Users can find jobs, and add, delete, or edit jobs. The project uses json-server to serve the jobs data as a REST API.

Features
View a list of available jobs
Add new jobs
Edit existing jobs
Delete jobs
Technologies Used
Vue.js
JSON Server
Axios (for making HTTP requests)
Bootstrap (for styling)
Installation
Clone the repository:

git clone <https://github.com/yourusername/your-vue-project.git>
cd your-vue-project
Install the dependencies:

npm install
Install JSON Server:

npm install -g json-server
Running the Application
Start the JSON Server to serve the jobs data:

json-server --watch jobs.json --port 8000
In a new terminal, start the Vue.js development server:

npm run serve
Open your browser and navigate to <http://localhost:8080> to see the application in action.

Usage
Viewing Jobs
Upon navigating to the home page, you'll see a list of available jobs fetched from the JSON Server.
Adding a Job
Click on the "Add Job" button.
Fill in the job details in the form and click "Submit".
Editing a Job
Click on the "Edit" button next to the job you want to edit.
Modify the job details in the form and click "Update".
Deleting a Job
Click on the "Delete" button next to the job you want to delete.
Confirm the deletion.
Project Structure
src/components: Contains the Vue components for the application.
src/assets: Contains the static assets such as images and CSS.
src/views: Contains the view components.
jobs.json: The JSON file that contains the initial jobs data.
package.json: Contains the project dependencies and scripts.
