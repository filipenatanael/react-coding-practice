# "Rails-style" Organization

"Rails style" of organizing your folder structure  for you app.

```txt
Frontend
   - Components
	      - component1.js
	      - component2.js
	      - component3.js
   - Actions
	      - action1.js
	      - action2.js
   - Reducers
    		  - reducer1.js
   - Util
   - Store
```

### Other ways to folder structure

```
├── dashboard
│ ├── actions.js
│ ├── index.js
│ └── reducer.js
└── nav
 ├── actions.js
 ├── index.js
 └── reducer.js
```

# Duck Style

The front end team at CrowdRiff found this awesome article by Alex Moldovan. It outlines a strategy called ‘Ducks’ which lays out a way to organize a React/Redux file system at a large scale.

The basic idea behind Ducks is to create a file structure that is scalable and easy to follow. Using Redux to manage state results in copious numbers of actions that are used in multiple components and a state structure that is several levels deep. As a result, an efficient way of importing functionality into multiple files/components is key to avoiding errors.

The Ducks methodology is also useful for reasoning about what each part of your application is doing. It’s very clear where actions originate and what reducers are dealing with what types.

Ducks also creates a consistent and easy pattern for imports/exports in your file system, eliminating errors and allowing for ease of use across many components.

Using the Ducks architecture, a ‘Modal’ component would have the following file structure:

📁 modal
-- 📁 ducks
   -- 📁 tests
   -- 📄 actions.js
   -- 📄 reducer.js
   -- 📄 types.js
   -- 📄 operations.js
-- 📄 index.js
-- 📄 Modal.jsx
-- 📄 Modal.scss
-- 📁 tests

[Scaling your Redux App with ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
[React/Redux File Architecture: Ducks It Up!](https://medium.com/building-crowdriff/react-redux-file-architecture-ducks-it-up-6b32eaaba341)