# message-digest

## demo
https://belle-choucroute-16592.herokuapp.com/

## Description
Message-digest is a cryptographic hash service which takes a string message and coverts to SHA-256 hash. It is a RESTful service using Express server hosting API endpoints.

The server stores key in a safe place. Hashes if '/message' route POST request contains a string in request body, then persists Initialization Vector:SHA-256 hash in MongoDB document.
* SHA-256 hash is assigned as _id
* IV is saved onto an array of transactions as _id_t

If more than POST occurs on an indentical string, in the example { "message": "foo }, the following IV:SHA-256 hashes would be generated:
* `f439b565a3e936ed876d0b783da7757:2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`
* `1701ac3b8db007c90603e14ed30cd19:2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae`

If GET occurs on /message/, findById hashed value in MongoDB; if GET with invalid or nonexistent hash value, return 404 error message.
* { "digest": "message" } as viewed on client with GET request is represented using a Mongoose virtual attribute.

## Usage

POST:
* `curl -XPOST -H "Content-type: application/json" -d '{ "message": "service" }' 'https://belle-choucroute-16592.herokuapp.com/messages'`

GET:
* `curl https://belle-choucroute-16592.herokuapp.com/messages/9df6b026a8c6c26e3c3acd2370a16e93fffdc0015ff5bd879218788025db0280`

404:
* `curl -i https://belle-choucroute-16592.herokuapp.com/messages/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
