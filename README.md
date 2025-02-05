# Paytm Project

"Paytm" is a full-stack web application designed for users to send and receive money from each other, leveraging the MERN stack to provide a seamless and intuitive user experience. 

## Website Preview

![Image](https://github.com/user-attachments/assets/a3cb2e82-4a0e-40bb-8327-7847b065f70f)

![Image](https://github.com/user-attachments/assets/977440bd-3af7-4173-93ba-3406e5878ee1)

![Image](https://github.com/user-attachments/assets/b29c368b-2db5-497f-b401-a419eb7aed98)

![Image](https://github.com/user-attachments/assets/2961297e-970d-4874-a55c-8407c6fe2030)

## Features of the Project

- **User Interface:**
  - Users can send money and receive from other users.
  - All the users are displayed in the Dashboard section.
  - Secured Transaction takes place between the user with the help of sessions.
  - Users must log in to access the website, and new users can sign up for an account.
  - Token authentication is considered for sending money and signup or sign in.
  - A successful transfer message is shown to the user after the transaction is completed.

## Tech Stack

- **MongoDB:**
  - MongoDB serves as the database management system, storing various data related to user details available on the platform, such as First names, Last names, username/email, and password. MongoDB's flexibility allows storing this data without a fixed schema, accommodating the diverse nature of user information.

- **React:**
  - React is utilized for building the front end of the Paytm website. It enables the creation of interactive user interfaces, allowing users to seamlessly browse through the Dashboard, view user details, and interact with the platform's features. React's component-based architecture facilitates the development of reusable UI components, ensuring consistency and efficiency across the website.

- **Node.js:**
  - Node.js powers the backend of the project, handling server-side logic and communication with the database. It enables the implementation of features such as user authentication, user management, and API endpoints for frontend-backend interaction. Node.js's event-driven, non-blocking I/O model ensures the efficient handling of concurrent operations, making the website responsive and scalable.

- **Express:**
  - Express complements Node.js by providing a minimalist web framework for building server-side applications and APIs. In this project, Express is used to define routes, middleware, and other backend functionalities. It simplifies the process of handling HTTP requests, processing data, and generating responses. Express's lightweight nature and extensive middleware ecosystem streamline backend development, accelerating the creation of a robust backend infrastructure for this project.

## Contribute to the Project

- Take a look at the existing [Issues]<!--(https://github.com/Simandhar14/Paytm-Project)--> or [create a new issue]<!--(https://github.com/Simandhar14/Paytm-Project/issues/new/choose)-->!
- [Fork the Repo]<!--(https://github.com/Simandhar14/Paytm-Project/fork)-->, create a branch for any issue that you are working on and commit your work.
- Create a **[Pull Request]<!--(https://github.com/Simandhar14/Paytm-Project/compare)-->** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes that are included in your commits.
## How to Contribute ?

**1.** Start by making a fork of the [**Paytm-Project**]<!--(https://github.com/Simandhar14/Paytm-Project)--> repository. Click on the fork  symbol at the top right corner.

**2.** Clone your new fork of the repository:

```bash
git clone https://github.com/<your-github-username>/Paytm-Project
```

**3.** Set upstream command:

```bash
git remote add upstream https://github.com/Simandhar14/Paytm-Project.git
```

**4.** Navigate to the new project directory:

```bash
cd Paytm-Project
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or local repository with the origin repository:

- In your forked repository click on "Fetch upstream"
- Click "Fetch and merge".

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes and commit:

```bash
git add .
```

```bash
git commit -m "<your_commit_message>"
```

**9.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**10.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**11.** **Congratulations!** You've made your first contribution! 🙌🏼
