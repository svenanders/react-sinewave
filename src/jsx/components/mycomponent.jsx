/** @jsx React.DOM */

'use strict';

var React = require('react'),

    Mycomponent = React.createClass({
      render: function() {
        return (
          <h1 className="Mycomponent">Sine</h1>
        )
      }
    });

module.exports = Mycomponent;
