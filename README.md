# dimitrod.com

A basic portfolio website made using SvelteKit and Express.js.
<br><br>

## Running it locally 

### Frontend

1. Clone the repo
2. ```cd dimitrod-web/frontend```
3. ```npm install```
4. Change the fetch URL in ```repo/frontend/src/routes/contact/page.svelte``` to ```localhost:5000/api/v1/contact/?email=```
5. ```npm run dev```
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
<br><br>

## API endpoints

You can GET all posts as a JSON-object at:<br>
```/api/v1/portfolio-posts```

You can GET a single post (if you have the slug) as a JSON-object at:<br>
```/api/v1/portfolio-posts/[slug]``` e.g. ```/api/v1/portfolio-posts/erdulator```

You can send a mail to a proxy-email by using POST at:<br>
```/api/v1/contact/?email=...&subject=...&message=...```
<br><br>

## New posts

Create a new markdown file under <br>
```/dimitrod-web/frontend/static/portfolio-posts```<br>

with the following content:
```
---
title: [Title of your post]
blurb: [This will show up on the portfolio page, keep it short]
type: [gallery, video or image]
image_small: '[This will be the main image]'
big: '[either a big image, video or a comma-separated list of images]'
---

Here you can write a long description.
```
<br>
The name of the markdown-file will become the URL-slug. The images (main, big image and gallery images) should be saved in a folder with the same name as the markdown file at:<br>

```/dimitrod-web/frontend/static/images/[name_of_markdown_file]```<br>

the video file should be saved at:<br>
```/dimitrod-web/frontend/static/video/[name_of_markdown_file]```<br>



