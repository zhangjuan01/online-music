import React from 'react';
import {GlobalStyle} from "./style";
import {renderRoutes} from 'react-router-config'
import {IconStyle} from "./assets/iconfont/iconfont";
import routes from './routes/index'
import {HashRouter} from "react-router-dom";

function App() {
  return (
      <HashRouter>
          <div className='App'>
              <GlobalStyle />
              <IconStyle />
              {renderRoutes(routes)}
          </div>
      </HashRouter>

  );
}

export default App;
