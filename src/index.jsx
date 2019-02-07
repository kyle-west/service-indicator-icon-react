/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom';
import ServiceIndicatorIcon from './components/ServiceIndicatorIcon';
import './demo-styles.css'

const root = document.getElementById('root');

render((
  <div>
    <section className="parts-3 white">
      <div className="real-status">
        <h5><code>Real Status</code></h5>
        <ServiceIndicatorIcon service="github"/>
        <ServiceIndicatorIcon service="travis-ci"/>
        <ServiceIndicatorIcon service="npm"/>
        <ServiceIndicatorIcon service="sauce-labs"/>
      </div>
      <br/>
      <div className="status-demo">
        <h5><code>status="loading"</code></h5>
        <ServiceIndicatorIcon status="loading" service="github"/>
        <ServiceIndicatorIcon status="loading" service="travis-ci"/>
        <ServiceIndicatorIcon status="loading" service="npm"/>
        <ServiceIndicatorIcon status="loading" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="none"</code></h5>
        <ServiceIndicatorIcon status="none" service="github"/>
        <ServiceIndicatorIcon status="none" service="travis-ci"/>
        <ServiceIndicatorIcon status="none" service="npm"/>
        <ServiceIndicatorIcon status="none" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="minor"</code></h5>
        <ServiceIndicatorIcon status="minor" service="github"/>
        <ServiceIndicatorIcon status="minor" service="travis-ci"/>
        <ServiceIndicatorIcon status="minor" service="npm"/>
        <ServiceIndicatorIcon status="minor" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="major"</code></h5>
        <ServiceIndicatorIcon status="major" service="github"/>
        <ServiceIndicatorIcon status="major" service="travis-ci"/>
        <ServiceIndicatorIcon status="major" service="npm"/>
        <ServiceIndicatorIcon status="major" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="maintenance"</code></h5>
        <ServiceIndicatorIcon status="maintenance" service="github"/>
        <ServiceIndicatorIcon status="maintenance" service="travis-ci"/>
        <ServiceIndicatorIcon status="maintenance" service="npm"/>
        <ServiceIndicatorIcon status="maintenance" service="sauce-labs"/>
      </div>
    </section>

    <section className="parts-3 grey">
      <div className="real-status">
        <h5><code>Real Status</code></h5>
        <ServiceIndicatorIcon service="github"/>
        <ServiceIndicatorIcon service="travis-ci"/>
        <ServiceIndicatorIcon service="npm"/>
        <ServiceIndicatorIcon service="sauce-labs"/>
      </div>
      <br/>
      <div className="status-demo">
        <h5><code>status="loading"</code></h5>
        <ServiceIndicatorIcon status="loading" service="github"/>
        <ServiceIndicatorIcon status="loading" service="travis-ci"/>
        <ServiceIndicatorIcon status="loading" service="npm"/>
        <ServiceIndicatorIcon status="loading" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="none"</code></h5>
        <ServiceIndicatorIcon status="none" service="github"/>
        <ServiceIndicatorIcon status="none" service="travis-ci"/>
        <ServiceIndicatorIcon status="none" service="npm"/>
        <ServiceIndicatorIcon status="none" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="minor"</code></h5>
        <ServiceIndicatorIcon status="minor" service="github"/>
        <ServiceIndicatorIcon status="minor" service="travis-ci"/>
        <ServiceIndicatorIcon status="minor" service="npm"/>
        <ServiceIndicatorIcon status="minor" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="major"</code></h5>
        <ServiceIndicatorIcon status="major" service="github"/>
        <ServiceIndicatorIcon status="major" service="travis-ci"/>
        <ServiceIndicatorIcon status="major" service="npm"/>
        <ServiceIndicatorIcon status="major" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="maintenance"</code></h5>
        <ServiceIndicatorIcon status="maintenance" service="github"/>
        <ServiceIndicatorIcon status="maintenance" service="travis-ci"/>
        <ServiceIndicatorIcon status="maintenance" service="npm"/>
        <ServiceIndicatorIcon status="maintenance" service="sauce-labs"/>
      </div>
    </section>
    <section className="parts-3 black">
      <div className="real-status">
        <h5><code>Real Status</code></h5>
        <ServiceIndicatorIcon service="github"/>
        <ServiceIndicatorIcon service="travis-ci"/>
        <ServiceIndicatorIcon service="npm"/>
        <ServiceIndicatorIcon service="sauce-labs"/>
      </div>
      <br/>
      <div className="status-demo">
        <h5><code>status="loading"</code></h5>
        <ServiceIndicatorIcon status="loading" service="github"/>
        <ServiceIndicatorIcon status="loading" service="travis-ci"/>
        <ServiceIndicatorIcon status="loading" service="npm"/>
        <ServiceIndicatorIcon status="loading" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="none"</code></h5>
        <ServiceIndicatorIcon status="none" service="github"/>
        <ServiceIndicatorIcon status="none" service="travis-ci"/>
        <ServiceIndicatorIcon status="none" service="npm"/>
        <ServiceIndicatorIcon status="none" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="minor"</code></h5>
        <ServiceIndicatorIcon status="minor" service="github"/>
        <ServiceIndicatorIcon status="minor" service="travis-ci"/>
        <ServiceIndicatorIcon status="minor" service="npm"/>
        <ServiceIndicatorIcon status="minor" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="major"</code></h5>
        <ServiceIndicatorIcon status="major" service="github"/>
        <ServiceIndicatorIcon status="major" service="travis-ci"/>
        <ServiceIndicatorIcon status="major" service="npm"/>
        <ServiceIndicatorIcon status="major" service="sauce-labs"/>
      </div>
      <div className="status-demo">
        <h5><code>status="maintenance"</code></h5>
        <ServiceIndicatorIcon status="maintenance" service="github"/>
        <ServiceIndicatorIcon status="maintenance" service="travis-ci"/>
        <ServiceIndicatorIcon status="maintenance" service="npm"/>
        <ServiceIndicatorIcon status="maintenance" service="sauce-labs"/>
      </div>
    </section>
  </div>
), root);
