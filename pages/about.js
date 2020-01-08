import React, { Component } from "react";
import Link from "next/link";

class AboutPage extends Component {
  static async getInitialProps() {
    return { name: "Platzi" };
  }

  render() {
    return (
      <main>
        <h1>About {this.props.name}</h1>
        <Link prefetch href="/">
          <a>
            Ir a <em></em>
          </a>
        </Link>
        <style>{`
					h1 { color: blue; }
				`}</style>
      </main>
    );
  }
}

export default AboutPage;
