# Project Title: LIRI

# Features: 
## Welcome to LIRI - an app that function like the SIRI on your Iphone.

# Concept:## LIRI is a language interpretation and recognition interface. Liri is a command line node app that take in parameters and gives you back data.



# API Reference: 
```js
# Spotify API keys
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
# Twitter API keys
TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```



# Installation: 

	• We Navigated to the root of this project and ran `npm init -y` &mdash in order to initialize a `package.json` file. The `package.json` was required to install third party npm packages and saving their version numbers. 
	• We created a .gitignore file in order to tell git not to track these files, and don't commit them to Github.
	• We created a JavaScript file name `keys.js`.
	• We also added a `.env` file. This file is use by the `dotenv` package to set what are known as environment variables to the global `process.env` object in node. The values are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github &mdash. The API key information stays private.
	• If someone want to clone this app from github and run it themselves, they would need to supply their own `.env` file for it to work.
	• We set the Twitter API keys
	• A `random.txt` file was created and included the following info. Inside * spotify-this-song,"I Want it That Way"
	• A JavaScript file was name `liri.js`.
	• At the top of the liri.js file we included the following information: 
	require("dotenv").config(); (to read and set any environment variables with the dotenv package.
	• To retrieve the data that will power this app, we send requests to the Twitter, Spotify and OMDB APIs.

# What Each Command Should do:
	• `node liri.js my-tweets - will show my last 20 tweets from
	• `node liri.js spotify-this-song '<song name here>'` - will show the artist's name, the song's name, A preview link of the song from Spotify and the album that the song is from


// I wasn't able to complete the following: 

	• `node liri.js movie-this '<movie name here>'` - will output the following info. To the terminal/bash window
		* Title of the movie.
		* Year the movie came out.
		* IMDB Rating of the movie.
		* Rotten Tomatoes Rating of the movie.
		* Country where the movie was produced.
		* Language of the movie.
		* Plot of the movie.
		* Actors in the movie.
	• `node liri.js do-what-it-says` - 
	
	* Using the `fs` Node package, LIRI takes the text inside of random.txt and then use it to call one of LIRI's commands.
	

* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
