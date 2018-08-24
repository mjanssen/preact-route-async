import { h, Component } from 'preact';

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

class Route extends Component {
  constructor() {
    super();
    this.state = { AsyncComponent: false };
  }

  componentWillMount() {
    const { getComponent } = this.props;

    if (getComponent) {
      getComponent.then(C => this.setState({ AsyncComponent: C.default || C }));
    }
  }

  render(props, state) {
    const { getComponent, Component } = props;
    const { AsyncComponent } = state;

    if (getComponent && AsyncComponent === false) return null;
    const p = _objectWithoutProperties(props, ['getComponent', 'url', 'matches']);

    if (Component) return h(Component, p);
    if (AsyncComponent) return h(AsyncComponent, p);

    return null;
  }
}

export default Route;
