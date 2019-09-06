- [ ] Why would you use class component over function components (removing hooks from the question)?

    Functional components can't use state and lifecycle methods, they are stateless.

- [ ] Name three lifecycle methods and their purposes.

     1.componentDidMount() – Birth of your component, called as soon as the component is mounted and ready. This is a good place to initiate API calls.
	 2.componentDidUpdate() – Growth (update) of your component, can compare previous props to current props to check if there has been a change in props.
	 3.componentWillUnmount() – Clean up and death of your component, for example: clearing timers, cancelling api calls, or clearing any caches in storage.

- [ ] What is the purpose of a custom hook?

    Custom hooks make it easy to share and reuse small pieces of code.

- [ ] Why is it important to test our apps?

	Testing ensures that functionality and usability issues are few and far between.