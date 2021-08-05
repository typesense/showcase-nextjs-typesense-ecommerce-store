# 📦 Instant E-Commerce Store Experience, powered by Typesense + Next.js

This is a demo that shows how you can use [Typesense's](https://github.com/typesense/typesense) feature set,
to build not just a search experience, but also a full-fledged product browsing experience for an ecommerce store.

See it live here: <https://showcase-nextjs-typesense-ecommerce-store.vercel.app>

## Tech Stack

The app was built using the <a href="https://github.com/typesense/typesense-instantsearch-adapter" target="_blank">
Typesense Adapter for react-instantsearch</a> and [Next.js](https://nextjs.org) for a React framework.

## Development

To run this project locally, install the dependencies and run the local server:

```shell
yarn
yarn run typesenseServer

yarn run indexer

yarn dev
```

Open http://localhost:3000 to see the app.

## Deployment

This demo is hosted on Vercel. Pushing to master of [this fork](https://github.com/jasonbosco/showcase-nextjs-typesense-ecommerce-store) will automatically trigger a deployment.

## Credits

The dataset used in this showcase is from Algolia's public set of datasets listed here: https://github.com/algolia/datasets
