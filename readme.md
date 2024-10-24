# Reminders API

## Description

The Reminders API is a simple RESTful service that allows users to create and manage recurring reminders. Users can add reminders, retrieve them based on their user ID, and receive notifications at specified times. The API is built with Node.js, Express, and MongoDB using Mongoose for data modeling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Create a Reminder](#create-a-reminder)
  - [Fetch Reminders](#fetch-reminders)
- [License](#license)
# Reminders API

## Description

The Reminders API is a simple RESTful service that allows users to create and manage recurring reminders. Users can add reminders, retrieve them based on their user ID, and receive notifications at specified times. The API is built with Node.js, Express, and MongoDB using Mongoose for data modeling.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing reminders.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **TypeScript**: Superset of JavaScript for type safety.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)


## Requirements
1. node (>= 20)
2. mongodb-community@8.0
    - https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#std-label-install-mdb-community-macos 
    - ```bash
    brew install mongodb-community@8.0
   ```



## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd api
   ```


2. Install dependencies:

   ```bash
   npm install
   ```

## Usage
1. Startup Mongodb:
    ```bash
   brew services start mongodb-community@8.0
   ```

2. Startup API:
    ```bash
   npm run start
   ```

## Environment Variables
The api runs with default values but if you need to update the env vars the current format is:
PORT=3000
MONGO_URI=mongodb://localhost:27017/reminderApp

## Endpoints
1. GET /reminders/<userId>:

```bash
curl --location 'http://localhost:3000/reminders/<userId>'
```
    - used to get a specific users reminders by userId

1. POST /reminders:

```bash
curl --location 'http://localhost:3000/reminders' \
--header 'Content-Type: application/json' \
--data '{
    "userId" : "123",
    "reminderText" : "Walk Dog",
    "reminderDateTime" : "2020-07-30T18:00:00.000Z"

}'
```
    - used to get a specific users reminders by userId


## Nice to Have

1. An endpoint to update if the user has been previously notified about this reminder
    a. This would also include updating the reminder
2. Change /reminders/{userId} endpoint to include a date range so we can paginate data
3. An endpoint to delete reminders
