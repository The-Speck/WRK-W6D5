import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    // this.time = new Date();
    this.state = {
      time: new Date()
    };
  }

  tick(){
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount(){
    setInterval(this.tick.bind(this), 1000);
  }

  fullDate(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];
    const dateName = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(',');
    const month = monthNames[this.state.time.getMonth()];
    const day = dateName[this.state.time.getDay()];
    const dateNum = this.state.time.getDate();
    const year = this.state.time.getFullYear();

    const stringDate = `${day} ${month} ${dateNum}, ${year}`;
    return stringDate;
  }

  fullTime() {
    const zone = this.state.time.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
    const hour = this.state.time.getHours() % 12;
    const min = this.state.time.getMinutes();
    const sec = this.state.time.getSeconds();

    const stringTime = `${hour} : ${min} : ${sec} ${zone}`;
    return stringTime;
  }

  render(){

    return (
      <div className="clock">
        <ul>
          <li>Time</li>
          <li>{this.fullTime()}</li>
        </ul>

        <ul>
          <li>Date</li>
          <li>{this.fullDate()}</li>
        </ul>

      </div>
    );
  }
}



export default Clock;
