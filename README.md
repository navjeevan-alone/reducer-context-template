# Ready to use Context api & useReducer react Template.

### Use :

1.  If you have initiated project then just copy `./src/reducers ` &
    `./src/contexts` folder & `./src/index.js` from code
2.  If not then just copy all the files and install _node modules_ from
    npm/yarn.
    (command : `npm init -y`)

### Features :

- **Easy to use** : It is designed so that don\'t need to write same
  code for every project
- **Scalable** : Written in well manner that it is easy to scale
- **Proper folder structure** : Standard folder structure makes it
  easy to manage
- **Test component** : Given for demo purpose

### Note :

- This template should be use to quickly setup context + reducer in
  raw/new project. Still, You can directly copy & paste **context &
  reducers** folder & **Index.js** file at any time.

- Optional : component folder is also given with Test component

### Quick copy:

- For components in components folder copy following line. (For any other locations change path accordingly)

```
import { useStateValue } from "../contexts/StateContext";
```

- Paste at the top level of functional components to use context values. (You can destructure state as per required.)

```
const [state, dispatch] = useStateValue();
```

------------------------------------------------ **Thanks** ------------------------------------------------

#### Created with ❤ & 😊 by _Navjeevan Alone_
