What is the purpose of the React Router?
React Router enables navigational components in React applications by synchronizing the UI with the URL. It allows for dynamic routing in a web app without needing to refresh the page.

What is a single page application?
A single page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach improves the user experience by making the application more responsive.

What are some differences between client-side and server-side routing?
Client-side routing occurs when the route is handled internally by the JavaScript loaded on the page, without the need for a full page refresh. Server-side routing involves requests being sent to a server, and the server responds with a new page, requiring a page refresh.

What are two ways of handling redirects with React Router? When would you use each?

Using the <Redirect> component to automatically navigate to a different route.
Programmatically navigating using history's push or replace methods in the component.
Use <Redirect> for conditional or static redirects and history methods for more dynamic cases, like after completing a form submission.

What are two different ways to handle page-not-found user experiences using React Router?

Using a <Route> with path="*" that matches any URL not matched by earlier routes.
Utilizing the <Switch> component and placing a catch-all <Route> at the bottom to render a 404 component.
How do you grab URL parameters from within a component using React Router?
By using the useParams hook in functional components or this.props.match.params in class components, you can access URL parameters specified in the route.

What is context in React? When would you use it?
Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for sharing data that can be considered “global” for a tree of React components, such as authenticated user information or theme settings.

Describe some differences between class-based components and function components in React.

Class-based components allow the use of state and lifecycle methods directly in the component, while function components use hooks to handle state and lifecycle events.
Function components are generally simpler and more readable, especially for smaller components and those utilizing hooks for state and effects.
What are some of the problems that hooks were designed to solve?
Hooks were introduced to solve issues like the complexity of reusing stateful logic across components, the confusion around the this keyword in class components, and to provide a better way to split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).