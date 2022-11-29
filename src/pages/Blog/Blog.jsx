import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto mt-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>The Four Kinds of React State to Manage</p>
                    <ol>
                        <li>1.Local state</li>
                        <li>2.Global state</li>
                        <li>3.Server state</li>
                        <li>4.URL state</li>
                    </ol>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>he Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                    <p className="font-bold my-3">Syntax:</p>
                    <div className="mockup-code">
                        <pre><code>ChildObject.__proto__ = ParentObject</code></pre>
                    </div>
                </div>

            </div>

            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>

            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p className="font-bold">React</p>
                    <p>Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.</p>

                    <p className="font-bold">Angular</p>
                    <p>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.</p>

                    <p className="font-bold">Vue</p>
                    <p>Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;