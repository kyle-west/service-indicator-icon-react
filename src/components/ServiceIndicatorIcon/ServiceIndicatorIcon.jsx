import { Component } from 'react';
import styles from "./assets/styles.module.css";

import githubIcon from './assets/github.png';
import travisIcon from './assets/travis-ci.png';
import npmIcon from './assets/npm.png';
import sauceIcon from './assets/sauce-labs.png';

const config = {
  "github": {
    icon: githubIcon,
    statusUrl: "https://www.githubstatus.com/api/v2/status.json"
  },
  "travis-ci": {
    icon: travisIcon,
    statusUrl: "https://www.traviscistatus.com/api/v2/status.json"
  },
  "npm": {
    icon: npmIcon,
    statusUrl: "https://status.npmjs.org/api/v2/status.json"
  },
  "sauce-labs": {
    icon: sauceIcon,
    statusUrl: "https://status.saucelabs.com/api/v2/status.json"
  }
}

export default class ServiceIndicatorIcon extends Component {
  constructor (props) {
    super(props);

    this.company = props.service;
    this.config = config[this.company];
    this.status = props.status || "loading";
    this.selfUpdate = !(props.status);

    this.state = {
      icon: this.config.icon,
      company: props.service,
      status: {
        indicator: props.status || "loading", 
        description: "Component is in static mode, and will not self update"
      }
    }
  }

  componentDidMount () {
    if (this.selfUpdate) {
      setInterval(this.fetchData.bind(this), 10000);
      this.fetchData();
    }
  }

  fetchData () {
    window.fetch(this.config.statusUrl).then(r => r.json()).then(data => {
      this.setState({status: data.status});
    })
  }

  render() {
    let {icon} = this.state;
    let {status} = this.state;
    return (
      <div className={styles.component} title={status.description}>
        <img src={icon} alt={status.indicator} className={styles[status.indicator]}/>
      </div>
    );
  }
}
