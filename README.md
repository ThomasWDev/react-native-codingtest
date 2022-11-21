# The Graph SpaceX

This is a React app interview challenge. Please fork this repo, and push your code to a branch in your forked repo (following the instructions below).

In this exercise you will create a spacex launch table that has sorting, search and pagination. Data will be available at the endpoint provided in the .env file.

Designs can be found [here](https://zpl.io/DlRA7eW). You will receive login credentials separately in order to access the designs and associated assets.

1. You can find the playground to see the schema and make queries [here](https://api.spacex.land/graphql/).
2. For this challenge we will query the Entity called `launchesPast`.
3. After you get all of the past launches, render them in a table with the columns as in Designs.
4. Clicking a row of the table should take you to a detail screen of that launch.
5. All columns should be sortable in `asc/desc` order. Default order should be by Launch's `launch_year`. Make use of GraphQL queries.
6. Search should only be implemented for Launch's `mission_name`. Make sure to use a GraphQL query.

# Notes

- Make sure to implement the UI/UX according to the Designs provided. We highly value attention to detail.
- Please use Apollo client with hooks to query the data (packages should already be installed - check `package.json`).

# Setup and Development

1. Fork this repo `git@github.com:hanekedesign/react-native-coding-exercise.git`
2. Make sure you are inside of the repo you just cloned, by running `cd react-native-coding-exercise`
3. Run `yarn` to install all dependencies
4. Run `expo start` to start the app
