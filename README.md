# Simple Token Launch

This codebase can be used to as an exercise for interviewing developers interested in working with Solidity.

# Initialize
This was developed using Node 8.2.1, Truffle 3.4.5 and TestRPC 4.0.1.

```
npm install -g truffle
npm install
truffle compile
```
# Front End
Template created using create-react-app

```
npm start
```

# The tests
To run the tests, simply `npm run test`.

## Task:

Update the smart contracts to allow for pausing and unpausing the token contract.  You should think through which methods such a contract should have, security implications (i.e. who can pause/unpause) and make sure that your code is adequately tested. The code provided is only a foundation for this exercise, you should review it and make it your own.

Once in place, add a button to the frontend that allows appropriate user to pause or unpause the contract.

Submit a PR to the repo when done.