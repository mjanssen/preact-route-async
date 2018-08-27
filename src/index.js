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
  constructor(props) {
    super();
    this.state = { A: false };
    const { getComponent } = props;
    if (getComponent) this.f(getComponent);
  }

  componentDidUpdate() {
    if (this.state.A === false && this.props.getComponent) {
      this.f(this.props.getComponent);
    }
  }

  f(getComponent) {
    getComponent().then(C => this.setState({ A: C.default || C }));
  }

  render(props, state) {
    const { getComponent, component } = props;
    const { A } = state;

    if (getComponent && A === false) return null;
    const p = _objectWithoutProperties(props, ['getComponent', 'url', 'matches']);

    if (component) return h(component, p);
    if (A) return h(A, p);

    return null;
  }
}

export default Route;
