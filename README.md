# message-digest

##
message-digest is a cryptographic hash function containing a string of digits created by a one-way hashing formula.

## demo
https://belle-choucroute-16592.herokuapp.com/

POST:
curl -XPOST -H "Content-type: application/json" -d '{ "message": "service" }' 'https://belle-choucroute-16592.herokuapp.com/messages'

GET:
curl https://belle-choucroute-16592.herokuapp.com/messages/9df6b026a8c6c26e3c3acd2370a16e93fffdc0015ff5bd879218788025db0280

404:
curl -i https://belle-choucroute-16592.herokuapp.com/messages/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


##


## performance question
* What would the bottleneck(s) be in your implementation as number of requests/second increase?

* How would you scale your microservice?

