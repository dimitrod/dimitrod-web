# dimitrod.com

A basic portoflio website made using SvelteKit and Express.js.

## Running it locally 

### Frontend

1. Clone the repo
2. ```cd dimitrod-web/frontend```
3. ```npm install```
4. Change the fetch URL in ```repo/frontend/src/routes/contact/page.svelte``` to ```localhost:5000/api/v1/contact/?email=```
5.```npm run dev```
6. Open site at localhost:PORT (see the terminal/console)

### Backend

1. Clone the repo (skip if you already have it)
2. ```cd dimitrod-web/backend```
3. ```npm install```
4. Create an .env file in repo/backend
5. Put your GMail Username and App-Password in this format in it:<br>
    GMAIL_APP_USER=...<br>
    GMAIL_APP_PASSWORD=...
6. ```node index```

## API endpoints

You can GET all posts as a JSON-object at:
```/api/v1/portfolio-posts```

You can GET a single post (if you have the slug) as a JSON-object at:
```/api/v1/portfolio-posts/[slug]``` e.g. ```/api/v1/portfolio-posts/erdulator```

You can send a mail to a proxy-email by using POST at:
```/api/v1/contact/?email=...&subject=...&message=...```
