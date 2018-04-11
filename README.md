# React Blocks

React Blocks is a ui library inspired by Material UI Design .

This library is in early stages, any help or suggestion would be appreciated .


#### Install:


#### usage:


```scss
/* ltr only css */
$context-direction: "ltr"

/* rtl only css */
$context-direction: "rtl"

/* both direction (throughout html dir attribute) */
$context-direction: "both"

/* import react-blocks  */
@import "~react-blocks/src/react-blocks.scss"
```

```jsx
import React from 'react';
import Button from 'react-blocks/dist/Button';
...
const PrimaryFlatButton = (props) => (
	<Button className="primary" labels="Confirm" />
)
const PrimaryRaisedButton = (props) => (
	<Button className="primary" raised labels="Confirm" />
)

```

## For Developer And Api Review

#### Prepare setup
```sh
git clone 'todo:url'
cd react-blocks
npm install
```

#### Run react-style guide (for api)
```sh
npm run styleguide
```

#### Run demo app
```sh
npm start
```

#### Build
```sh
npm run build
```
