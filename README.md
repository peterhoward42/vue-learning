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
- Refresh how to use web storage
- Refresh use of underscore and similar

# Log of Work

*  Correlate notes made with structure of CLI generated project.
*  Add and compose a trivial additional custom component. (ScratchCpt)
*  Try text interpolation inside an attribute value
*  Try using a method call as a binding expression
*  Can the function be defined externally to the methods block? - better single line delegation
*  Re-express this as a computed prop
*  Give the componet some data and use it
*  Try adding another component, and composing it as a module
*  Design a tiny demo app that:
    *  Has multiple, hierachical components, and which could later
       expect to replace hard-coded state with dynamic data from a REST API.
    *  Uses some bootstrap componenents.
    *  Has some form and button input.
    *  Appearance
    *  Component breakdown
        *  AppContainer
        *  PostcodeApp
        *  InputBlock
        *  OutputBlock
*  Try to make skeleton where the cpts are just divs with a paragraph in.
    *  Replace ScratchCpt? = yes but comment out
    *  Container has w3.css container in hosting the PostcodeApp
        *  Research template
        *  Introduce new component AppContainer called from App.vue - calling on scratchcpt
        *  Add container template round content
    *  PostcodeApp is just a paragraph
    *  Add in input block and output block
*  Bring in bootstrap and hard coded content
    *  Title in big
    *  Input label, box and error
    *  Output labels * 4 with fixed output
    *  How layout output labels?
    *  How layout input label and box?
    *  How get input box to show up?
    *  Make message red
    *  Give input box default contents
    *  Give it state to show or hide error message
    *  Make the lat long values come from data
    *  not yet recog should be a prop in parent
        *  make it a prop in input class
        *  make it data in postcode cpt
        *  template it from postcode cpt with ref to data
        *  make it a prop in output class
        *  make rendering in input conditional on prop
        *  make rendering in output conditional on prop
        *  check got right way round
    *  Collapse some redundant divs
    *  Comments
    *  Lat and long must be state of postcode app and be passed
       to output as props
        *  Give postcode the state
        *  Define output to receive as props
        *  Pass lat/long to output as attribs
        *  Debug
    *  Handle event on postcode input keystroke
    *  Make function to:
        *  How push this into a generic js function /module?
            *  Get a function to be recognized and called
            *  Improve getting composite response and using it
            *  Comment getLatLong

o  Upgrade getLatLong() to fetch from REST api (sync)
    o  Use axios foo.then.bar idiom
o  Migrate the state management just introduced into VueX
o  Move the rest of the state into VueX
o  Upgrade to async fetch of data and show spinner
o  Upgrade UX to that of postcode finder
o  Try out the build/deploy suggestions.
o  Go back to my notes and the user guide to see what big thigs I've missed.
    o  Prop validation specification
    o  Routes?
    o  What about lodash or underscore, and express?
