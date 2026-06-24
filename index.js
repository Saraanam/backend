console.log("Sara Anam");

require('dotenv').config()

const express = require('express');
const app = express()
const port = 3000

const githubData = {
    "login": "Saraanam",
    "id": 153576816,
    "node_id": "U_kgDOCSdlcA",
    "avatar_url": "https://avatars.githubusercontent.com/u/153576816?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Saraanam",
    "html_url": "https://github.com/Saraanam",
    "followers_url": "https://api.github.com/users/Saraanam/followers",
    "following_url": "https://api.github.com/users/Saraanam/following{/other_user}",
    "gists_url": "https://api.github.com/users/Saraanam/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Saraanam/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Saraanam/subscriptions",
    "organizations_url": "https://api.github.com/users/Saraanam/orgs",
    "repos_url": "https://api.github.com/users/Saraanam/repos",
    "events_url": "https://api.github.com/users/Saraanam/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Saraanam/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sara Anam ",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "DSA • Web3 • Problem Solving",
    "twitter_username": "SaraAnam441138",
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2023-12-12T03:22:19Z",
    "updated_at": "2026-06-15T14:28:08Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('saraanam')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Code&Deploy</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})