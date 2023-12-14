# HitRuns

## Site URL (Try it Yourself!)

**https://hitruns.vercel.app/**

## About

This is a mirror for the [Hitman 3 speedrun.com leaderboard](https://www.speedrun.com/hitman_3). It is intended as a backup and/or supplement to the speedrun.com leaderboards, not as a replacement. Backups of important Hitman 3 leaderboards will be hosted here, as will guides.

The site automatically updates itself periodically to match the current Hitman 3 leaderboard, which is possible through use of speedrun.com's API (more info below).

Hitruns also tends to load faster and is more mobile-friendly than the original Hitman 3 leaderboard on speedrun.com (due to cutting out a lot of unnecessary features) which is a further bonus.

For a quick summary of the top times of each Hitman 3 speedrun category, as well as sum-of-bests, check out [Hitruns Top Times](https://hitruns-top-times.vercel.app/).

### Technologies Used:

-   Used Next.JS [serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions) ([getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props), to be precise) for the backend.
-   Next.JS and React Bootstrap Frameworks used for front-end design (particularly for design of navbar, dropdown menus).
-   Pulled data from speedrun.com's RESTFUL api (https://github.com/speedruncomorg/api/tree/master/version1)
-   Deployed on Vercel

### Screenshot

![Screenshot of Leaderboard](https://media.discordapp.net/attachments/833505136290299935/993949617760772206/unknown.png?width=1154&height=670)

## Site Setup

### Dependencies

You will need NodeJS version `18` or newer

How to change NodeJS version:

- See https://github.com/coreybutler/nvm-windows or https://github.com/nvm-sh/nvm
- `nvm install 18`
- `nvm use 18`

### Installation

- `yarn install` to install required node modules.
- `yarn dev` to open the dev environment to preview the website (http://localhost:3000).
- `yarn build` to build the website locally (needed if you want to test the search function before deployment).
