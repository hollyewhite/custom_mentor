# NEWS & EVENTS COMPONENT
Users can access *Custom Mentor* **blog** and **event** postings as well as **news** articles relevant to their interests from an external source.

Users with proper authorization are able to **compose** new posts.

### How to run the prototype:
`git pull origin news-feed`

`git checkout news-feed`

`cd blog-component`

`npm install`

`mongod` - starts local MongoDB instance

`npm start` - component is available at http://localhost:3000/

### Sub Components:
1. Blog/Events page
2. News Feed
3. Blog Composer
4. Nav (between sub components)

## Blog/Events Page
#### All Blog/event posts are served as json responses from backend db
Mongo used for quick prototype - could easily integrate with current backend

JSON response:
```json
{
	"blogs": [
    	{
        	"title": "String",
            "date": "DateString",
            "content": "HTML String"
        }
    ]
}
```

#### JSON response is rendered client-side
Using jQuery/AJAX for prototype but this could easily be rendered in React/Axios

The posts are ordered by date (most recent first)

The blog components take advantage of the Bootstrap Card:
* Card Header - Post title and date + Button to show rest of post
* Card Body - HTML Body of card (hidden until 'show more' button clicked)
* Card Footer - Placeholder links for social media interaction

## Reddit News Page
Display news articles based on user search term.

Prototyped using Reddit as a news source. There are many options available for news sources. RSS was also considered for this prototype.

News links are rendered with jQuery in the prototype but this could easily be transferred to React

When page is loaded, all trending Reddit stories from front page of Reddit are appended.

On search all articles relevant to keyword are displayed as well as their subreddits.

## Composer Page
This page is for users who are authorized to create new posts that will appear on the Blogs/Events Page.

On the frontend: 
* A text editor is displayed using [QuillJS](https://quilljs.com/) via CDN (handles conversion from text in editor to HTML)
* A field for the user to enter a post title
* A submit button

The *submit button* sends JSON post data to backend DB and redirects to the blog/events page.

Post JSON format:
```json
	{
    	"title": "String",
        "content": "HTML String"
    }
```

On the backend:
* Receive a new post JSON
* Add the post to the DB (with Mongoose for prototype)
