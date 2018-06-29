import React from 'react';
import Clock from './clock';
import Tab from './tab';

const Root = () => {
  return (
    <div className='widget'>
      <div className='widget-clock'>
        <Clock />
      </div>
      <div className='widget-tab'>
        <Tab arr={[
          {title: 'one', content: 'I am the first' },
          {title: 'two',content: 'Second pane here'},
          {title: 'three', content: 'Third pane here'}
        ]} />
      </div>
    </div>
  );
};


export default Root;
