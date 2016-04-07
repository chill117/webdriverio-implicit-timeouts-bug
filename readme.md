# WebDriverIO Implicit Timeout Bug

Start your local selenium instance, run `npm install`, then the following:
```
node index.js
```

The error message says:
```
element (#does-not-exist) still  existing after 340ms
```
But the element does not exist.

I've added comments to the `index.js` file which explain the key bits.
