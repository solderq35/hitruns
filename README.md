# HitRuns

## Site URL (Try it Yourself!)

**https://hitruns.vercel.app/**

## About

This is a mirror for the [Hitman 3 speedrun.com leaderboard](https://www.speedrun.com/hitman_3). It is intended as a backup and/or supplement to the speedrun.com leaderboards, not as a replacement. Backups of important Hitman 3 leaderboards will be hosted here, as will guides.

The site automatically updates itself periodically to match the current Hitman 3 leaderboard, which is possible through use of speedrun.com's API (more info below).

Hitruns also tends to load faster and is more mobile-friendly than the original Hitman 3 leaderboard on speedrun.com (due to cutting out a lot of unnecessary features) which is a further bonus.

### Technologies Used:

-   NodeJS and Typescript for backend.
-   Next.JS and React Bootstrap Frameworks used for front-end design (particularly for design of navbar, dropdown menus).
-   Pulled data from speedrun.com's RESTFUL api (https://github.com/speedruncomorg/api/tree/master/version1)

### Screenshot of Leaderboard page:

![Screenshot of Leaderboard](https://media.discordapp.net/attachments/833505136290299935/993949617760772206/unknown.png?width=1154&height=670)

## Usage Setup

Clone the project using `git clone` command like so:

```sh
git clone https://github.com/solderq35/hitruns.git
```

Navigate into the repository folder and install the project's dependecies using this command:

```sh
yarn install
```

When the dependencies are done installing run the development server with the following command:

```sh
yarn dev
```

The project is now up and running on port 3000.
