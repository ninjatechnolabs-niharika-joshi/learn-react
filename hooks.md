- React hooks are simple js function which is a utility function
- written by FB developers written to make state management in React
- HOOKS ARE MADE FOR FUNCTIONAL COMPONENTS

Two very imp hooks:
useState() : Super powerful state variables
useEffect() : 


UseState: ()

- Whenever a state updates, react rerenders the component
- useState returns a pair
- used for creating localstate variables in functional body component
- do not create in if else
- create at top of component body
-LOCAL STATE VARIABLES INSIDE FUNCTIONAL COMPONENT
- CALL ON THE TOP not in conditions nested functions or loops



UseEffect: 
- useEffect (()=>{},[]) // callback function, dependency array
- useEffect always returns a function which is called when the component is unmounted
- every time component renders, useeffect is called, it changes depending on dependency array
- only callback function is required in useeffect 
- if there is no dependency array, useffect is called on every render
- if dependency array is [] (empty array) it will only be called, only called on initial render and just once (when comp is called for first time)

- dependency array:
For ex: you added below state hook
const [depend, setDepend] = useState(1)

useEffect(()=>{},[depend])

so whenever depend changes, useffect will be called 