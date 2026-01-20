Why useState is used and not normal variables?
- because when we use normal js variable names there is no way for react to know that the variable has changed and re-render the component.
- So we use state variables to tell react that the variable has changed and re-render the component.
- when state variable changes react will re-render the component.
- whenever state variable updates, react will trigger reconcillation process to update the component.

reconcillation process:
- react will compare the previous and new virtual DOM.
- react will update the real DOM based on the comparison.
- dom manupilation is pretty expensive and react does it very efficiently.
React Fiber: 
- React Fiber is a new reconciliation algorithm that was introduced in React 16.
- It is a new way to schedule updates to the DOM.
- It is a new way to update the DOM.