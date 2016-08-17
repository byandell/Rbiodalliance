HTMLWidgets.widget({

  name: "Rbiodalliance",

  type: "output",

  factory: function(el, width, height) {

    // create our sigma object and bind it to the element
    var bio = Browser(el.id);
    
    // I don't really know how to configure this.
    // see attempt at lib/release-0.13/biodalliance.js
    // somehow need to understand how javascript communicates.
    
    return {
      renderValue: function(x) {

        el.innerText = x.chr;
        // apply settings
         for (var name in x)
          bio.settings(name, x[name]);

        // update the biodalliance object
        biodalliance(
          bio,           // biodalliance object
          function() {
            // need to call refresh to reflect new settings and data
            bio.refresh();
          }
        );
      },

      resize: function(width, height) {

        // forward resize on to biodalliance renderers
        for (var name in bio.renderers)
          bio.renderers[name].resize(width, height);
      },

      // Make the sigma object available as a property on the widget
      // instance we're returning from factory(). This is generally a
      // good idea for extensibility--it helps users of this widget
      // interact directly with biodalliance, if needed.
      s: bio
    };
  }
});
