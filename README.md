# Preact route async

[![npm](https://img.shields.io/npm/v/preact-route-async.svg)](http://npm.im/preact-route-async)
[![gzip size](http://img.badgesize.io/https://unpkg.com/preact-route-async/dist/preact-route-async.js?compression=gzip)](https://unpkg.com/preact-route-async/dist/preact-route-async.js)

**Asynchronous** loading for Preact Router. For _440B_.

Inspired by [preact-async-route](https://github.com/prateekbh/preact-async-route). Bundled with [📦 Microbundle](https://github.com/developit/microbundle)

# Install

```
npm install --save preact-route-async
```

# Usage

```
import Router from 'preact-router';
import Route from 'preact-route-async';

<Router>
  <Route path="/" component={Home} />
  <Route
    path="/user"
    user={user}
    getComponent={() => import('./pages/user.js')}
  />
</Router>
```

# Options

Props and children wil automatically be passed to the fetched Component.
The library also passes the `path` property, coming from `preact-router` to the Component.

# Demo

Code demo [can be found here](https://codesandbox.io/s/k20z33l3w7)

# License

[MIT](https://oss.ninja/mit/mjanssen/)
