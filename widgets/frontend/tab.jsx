import React from 'react';


class Tab extends React.Component{
  constructor(props){
    // debugger
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  bringFront(key, event){
    this.setState( {selectedTab: key });
  }

  isFront(idx){
    if (this.state.selectedTab === idx) {
      return 'tab-show';
    } else {
      return 'tab-hide';
    }
  }

  generateTabs() {
    return this.props.arr.map((tab, idx) => {
      return (
        <div className={this.isFront(idx)}>
          <section onClick={this.bringFront.bind(this, idx)} key={idx} className='tab-header'>{tab.title}</section>
          <section className='tab-content'>{tab.content}</section>
        </div>
      );
    });
  }

  render(){
    // debugger
    const allTabs = this.generateTabs();

    return(
      <div>
          <h1>Tabs</h1>
          <div className='tab-all'>
            {allTabs}
          </div>
      </div>
    );
  }
}


export default Tab;
