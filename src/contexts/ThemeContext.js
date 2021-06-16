import React from 'react';

export const ThemeContext = React.createElement();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    dark: { bg: '#222529', txt: '#d65f5f', hover: 'rgba(231,76,60,0.9)' },
    light: { bg: '#f8f9fa', txt: '#222529', hover: 'rgba(254,209,54,0.8)' },
  };

  render() {
    return (
      <ThemeContext value={{...this.state}}>{this.props.children}</ThemeContext>
    );
  }
}
