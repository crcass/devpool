# Devpool

![Devpool](/client/public/devpool.jpg)

## Technology

This app was built with [React](https://reactjs.org/), [React Redux](https://react-redux.js.org/), [Redux-Saga](https://redux-saga.js.org/), [Redux Form](https://redux-form.com/), [React Router](https://reacttraining.com/react-router/), [Firebase](https://firebase.google.com/), [Express.js](https://expressjs.com/), [Node.js](https://nodejs.org/en/), [Axios](https://www.npmjs.com/package/axios), [MySQL](https://www.mysql.com/), [Sequelize](http://docs.sequelizejs.com/), & [styled-components](https://www.styled-components.com/). This app consumes the [GitHub API](https://developer.github.com/v3/)

## Concept

A website that provides a place for recruiters to see students enrolled in a coding bootcamp, see the students' most recent GitHub repositories, leave comments for individual students, and post jobs. The students can see comments left for them by recruiters, see posted jobs, and save them for later.

## Motivation

This project was an exercise to build a larger-scale, full-stack React website. I wanted to use this as an opportunity to become more familiar with libraries and tools that are being used in modern React apps.

## Design Process

I started by focusing on getting the GitHub API working correctly with Redux-Sagas & Axios. Initially, the student data was stored in a JSON object for the sake of simplicity. Once the API calls were working correctly, I moved the student data from a JSON object to a MySQL table.

I added the commenting feature and jobs listing next, and then worked on authentication. From there getting the student's side of the app was fairly simple, as many of the features work in a similiar way. I made sure to include the ability for new user's to be able to add their info to our database when they log in for the first time. This is essential for populating the user's GitHub repositories, comments, and posted/saved jobs.

For styling, I wanted to keep it simple and functional. Everything is coded by hand and no libraries are used. The styling is very basic but functional.

## Known Issues

- Auth state does not persist on refresh.
- Error messages are not handled
- Styling needs to be refined.

Please report as you find more issues!

♥︎ cc
