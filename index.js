console.log("Chai aur code");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "ayanbeliever",
    "id": 152762063,
    "node_id": "U_kgDOCRr2zw",
    "avatar_url": "https://avatars.githubusercontent.com/u/152762063?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ayanbeliever",
    "html_url": "https://github.com/ayanbeliever",
    "followers_url": "https://api.github.com/users/ayanbeliever/followers",
    "following_url": "https://api.github.com/users/ayanbeliever/following{/other_user}",
    "gists_url": "https://api.github.com/users/ayanbeliever/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ayanbeliever/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ayanbeliever/subscriptions",
    "organizations_url": "https://api.github.com/users/ayanbeliever/orgs",
    "repos_url": "https://api.github.com/users/ayanbeliever/repos",
    "events_url": "https://api.github.com/users/ayanbeliever/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ayanbeliever/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-12-03T04:13:14Z",
    "updated_at": "2024-08-01T02:20:46Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('MdAyan')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at MdAs web</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})