# Prompt-A-Chat is an AI prompt sharing website where users can search, create and edit prompts they want to share with the internet
### App Link: https://prompt-a-chat-h5ynvd9ht-dd-dengs-projects.vercel.app
![Prompt-A-Chat_LandingPage](https://github.com/ddssamu3l/prompt-a-chat/assets/72890797/806a5d71-07ff-4bc2-931e-44c5e959a926)


### Video Demo on YouTube: https://www.youtube.com/watch?v=6cpMVrPWkZQ

## Technical Details
This app is centered around a database and user-authentication system. NextAuth is the framework used to track sessions and user info to determine and grant user access.

To make a post, the user is taken to a /create page where a forum takes in the nessicary information required to make post. Once the user hits the "submit" button, the different variables in text areas are bundled and sent to my MongoDB database, where they will be stored together under a "post" object. 

To display the posts on the front page, query features of MongoDB are used to obtain posts with specific qualities. For instance, when the user types in the search bar, Prompt-A-Chat will start looking into the database to see which posts match the search parameters in terms of post content, author name, title name and #tag. Posts with matching qualities are filtered from the database and shown in a column on the front page of the app.

## Tech Stack
- Next.js 14
- NextAuth
- Google cloud
- MongoDB
- TailwindCSS

