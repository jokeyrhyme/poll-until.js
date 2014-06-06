# poll-until.js

last resort in lieu of events or promises

```javascript
/**
 * @param {Function} condition a function that returns `true` or `false`
 * @param {Number} [interval=197] the amount of time to wait between tests
 * @param {Function} callback a function to invoke when the condition returns `true`
 * @returns {Function} call this to stop early (but no earlier than first check)
 */
function pollUntil(condition, interval, callback)`
```
