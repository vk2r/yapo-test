import React from 'react';

// Providers
import MyTheme from './infrastructure/providers/UseTheme';

// Pages
import Characters from './presentation/components/pages/Characters';

function App() {
  return (
    <div className="marvel-app">
      <MyTheme>
        <Characters />
      </MyTheme>
    </div>
  );
}

export default App;
