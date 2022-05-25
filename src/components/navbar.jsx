import React, {Component} from "react";

const NaveBar = ({totalCounters}) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge bg-pill bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  )
}

class Navbar extends Component {
    state = {}

    render() {
      return(
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                      Navbar <span className="badge bg-pill bg-secondary">{this.props.totalCounters}</span>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navbar;