# BookSharingApp

A Simple web application to share your books with other readers.

[![dependencies Status](https://david-dm.org/michaelBenin/react-ssr-spa/status.svg)](https://david-dm.org/kmjayadeep/booksharingapp) [![devDependencies Status](https://david-dm.org/kmjayadeep/booksharingapp/dev-status.svg)](https://david-dm.org/michaelBenin/react-ssr-spa?type=dev) 
[![NSP Status](https://nodesecurity.io/orgs/kmjayadeep/projects/9cd81d33-4d6f-4a30-83d4-533064e1212c/badge)](https://nodesecurity.io/orgs/kmjayadeep/projects/9cd81d33-4d6f-4a30-83d4-533064e1212c)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)



## Development Guide

#### Prerequisites

* nodejs
* mongodb
* npm or yarn package manager


### Setup

* Clone this repository

```bash
git clone https://github.com/kmjayadeep/booktradingclub.git
```

* Install Dependencies

```bash
yarn
```

or

```bash
npm install
```

* Setup Google Login

  * Create a Project in [Google Cloud Api Console](https://console.developers.google.com/apis/dashboard)
  * Create a new Credential for Web Application
  * Add *http://localhost:3000* to Authorized origin
  * Add *http://localhost:3000/api/auth/login/google/callback* to Authorized Callback URL
  * If deploying to a cloud provider, add correponding URLs too
  * Copy ClientId and ClientSecret for next step





* Setup Environment Variables

Copy .env.sample file in the root folder to .env and fill appropriate values

| Variable               | Description             | Default Value  |
| ---------------        |:-----------------------:| -----:			|
| DB_URL    			 | Mongodb Database URL    | none 			|
| JWT_SECRET    		 | Secret for encoding JWT | thisisasecret  |
| COOKIE_SECRET			 | For Securing Cookies    |    asecret 	|
| GOOGLE_CLIENT_ID 		 | Google Client ID        |    none		|
| GOOGLE_CLIENT_SECRET 	 | Google Client Secret    |    none	    |
