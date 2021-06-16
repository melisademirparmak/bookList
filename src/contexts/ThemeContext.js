import React from 'react';

export const ThemeContext = React.createElement();

class ThemeContextProvider extends React.Component {
  state = {};

  render() {
    return (
      <ThemeContext value={this.state}>{this.props.children}</ThemeContext>
    );
  }
}
