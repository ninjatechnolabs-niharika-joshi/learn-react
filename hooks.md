React hooks are simple js function which is a utility function
written by FB developers written to make state management in React

Two very imp hooks:
useState() : Super powerful state variables
useEffect() : 


UseState: ()

- Whenever a state updates, react rerenders the component
- useState returns a pair
- used for creating localstate variables in functional body component
- do not create in if else
- create at top of component body


UseEffect: 
- useEffect (()=>{},[]) // callback function, dependency array
- useEffect always returns a function which is called when the component is unmounted
- every time component renders, useeffect is called, it changes depending on dependency array
- only callback function is required in useeffect 
- if there is no dependency array, useffect is called on every render
- if dependency array is [] (empty array) it will only be called, only called on initial render and just once (when comp is called for first time)

- dependency array