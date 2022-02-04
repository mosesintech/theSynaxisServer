# Roadmap

## Version 1.0.0: MVP
The first functional version of the server will have four basic features: saints, quotes, and an endpoint to receive daily saints and daily quotes.

### Saints
The fundamental data point for the whole server is a collection of saints, and information about them.
In the MVP of our server, data about each saint will include gender, whether they were clergy (bishop, priest, deacon, etc.), whether they were monastics, the year they were born and died, their feast day, and their life.
This information will help us build out a frontend that will allow us to query for particular kinds of saints, as well as construct a calendar of daily saints.
In future versions, this will also list our their locations, their royal status, their literary works, and more.

### Daily Saints
The daily saints, or synaxarion, will be a feature that will give information about the saints in a daily calendar format.
This way, the frontend app will simply have to hit our daily saints query and receive everything they need to build our thier Lives of the Saints app.
In future versions, the literary works included may also be queried.

### Saint Quotes
The words of the saints are life-giving.
This feature will give quotes of particular saints, in particular works, organized by category or tags, and in future versions will include Scriptural cross-references.
This will allow us to build a Scripture commentary API that will be intimatedly connected with the synaxarion and the words of the saints.

### Daily Quote
This feature is a no-brainer.
If we're collecting the words of the saints, it only makes sense to provide an API for a daily quote.
This feature will have options: whether a user wishes to receive daily quotes from a particular saint, on a particular topic, from a particular work, or if they wish to receive quotes based on the lives of the saints in the calendar.
In future versions, this will include Scriptural cross-references to allow ease of access between both the quotes and the Scripture reader.

## Version 1.1.0
After MVP is completed, I'll take a break to work on the frontend application.
After this, I'll hope to come back to this to add features to the API.
The first round of editions regard the Scriptures and commentary.

### Scriptures
Using an 'open source' version of the Scriptures, we'll build a Scripture API.
This will include certain search functions (by book, chapter, verse; or by word).

### Commentary
Matching the MVP saints quotes to the new Scripture API will give us an opportunity to present the Scriptures with quotations from the saints, effectively building a catena (Scriptural commentary).

### Daily Proverb
Seeing as we'll have the Scriptures and some preestablished methods for distributing daily content, it makes sense to use it in this context as well.
The Proverbs seem to be written in such a way as to be slowly digestable, proverb by proverb.
Partitioning out each proverb beforehand and randomizing them, we could have a query that will deliver a new proverb each day.
This could also be used for other parts of the Scriptures, such as the Gospels or Psalms.