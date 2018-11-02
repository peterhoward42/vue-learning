# This is a project to help me learn Vue.

It's baseline is the hello-world example project created by the Vue CLI

My learning objectives are:

- Read and note the key ideas from the user guide.
- Try out most of the important ones.
- Try to make something simple I make up to reinforce the above.
- Make sure I can incorporate a CSS library like Bootstrap.
- Learn to hook in and use VueX appropriately.
- Revise how to organise code in a finely-grained structured way using
  ECMA-5+ modules.
- Incorporate async IO with a REST API server behind the scenes, including
  rendering indications of the fetch state of these.
- Learn how to integrate other peoples JS libraries like Plotly etc.
- Learn how to build and deploy it.
- Learn how to use Routes

# Log of Work

*  Correlate notes made with structure of CLI generated project.
*  Add and compose a trivial additional custom component. (ScratchCpt)
*  Try text interpolation inside an attribute value
o  Try using a method call as a binding expression
o  Can the function be defined externally to the methods block?
o  Re-express this as a computed prop
o  Give the componet some data and use it
o  Make sure this follows the data-must-be-a-function guideline
o  Using the fields in an object as props

o  Try out a few of the directives/coding topics from the guide.
o  Try adding another component, and composing it as a module
o  Design a tiny demo app that:
    o  Has multiple, hierachical components, and which could later
       expect to replace hard-coded state with dynamic data from a REST API.
    o  Uses some bootstrap componenents.
    o  Has some form and button input.
o  Try to make it with hard coded data.
o  Have I wanted yet to pass down whole objects in props?
o  Update one tiny piece to feed from a REST API query with the corresponding
   state held in the Vue instance itself.
o  Migrate the state management just introduced into VueX
o  Move the rest of the state into VueX
o  Try out the build/deploy suggestions.
o  Go back to my notes and the user guide to see what big thigs I've missed.
    o  Prop validation specification
    o  Routes?
