class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: null, result: null};
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick() {
    const url = "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    fetch(url)
    .then((response)=>{return response.json()
    })
    .then((value)=>{this.state.data = value
    })
    this.result = this.state.data.query.results.channel.astronomy.sunset
    console.log(this.result)
  }

  render() {
    return (<div>
      <button onClick={this.onBtnClick}>Press this button</button>
      <h1>Рассвет на Гавайях в {this.result}</h1>
    </div>)
  }
}

ReactDOM.render(<Weather/>, document.getElementById('app'));
