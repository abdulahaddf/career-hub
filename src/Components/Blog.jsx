import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center bg-gray-100 h-32">
        Welcome to my Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-5 py-10">
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">When should you use context API?</h1>
          <p>
            You should use Context API in React when you need to manage global
            state, avoid prop drilling in deeply nested component trees, apply
            common themes or styles to multiple components, or manage
            accessibility settings. Context API provides a convenient way to
            share data or settings across components without passing props
            explicitly, making your code more efficient and maintainable.
            However, use it judiciously and avoid abusing it for all types of
            state management.
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">What is a custom hook?</h1>
          <p>
          A custom hook in React is a reusable JavaScript function that encapsulates logic and state management for components. It follows the "use" naming convention and can be used in functional components to abstract away complex logic, like data fetching or form handling. Custom hooks promote code reusability, separation of concerns, and improved code organization, maintainability, and testability. They are created with built-in React hooks and provide a powerful way to share logic across a React application, making components more focused and understandable. Custom hooks are a valuable tool for writing efficient and modular code in React applications.
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">What is useRef?</h1>
          <p>
            useRef is a powerful React hook that provides a way to create and
            manage a mutable reference to a value that persists across
            re-renders of a component. The returned ref object has a current
            property which can be used to store and access values that won't
            trigger component re-renders. useRef is commonly used for a variety
            of use cases, such as accessing DOM elements, storing mutable data,
            managing timers or intervals, and interacting with third-party
            libraries. It's a versatile tool that can help optimize performance
            and improve the functionality of your React components.
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">What is useMemo?</h1>
          <p>
            useMemo is a versatile React hook that provides a way to optimize
            performance in your components by memoizing the result of a
            computation and caching it for subsequent renders. It can be
            particularly useful for expensive operations that are
            resource-intensive, such as complex data transformations, filtering,
            or sorting, where recalculating the same result on every render can
            degrade performance. useMemo is commonly used in various scenarios,
            such as optimizing child components, avoiding redundant network
            requests, and optimizing computationally intensive tasks. For
            example, when you have child components that depend on the output of
            a computation in the parent component, useMemo can be used to
            memoize the computation and prevent unnecessary re-rendering of the
            child components if the computation result has not changed, thus
            improving performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
