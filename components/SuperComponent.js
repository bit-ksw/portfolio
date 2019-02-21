import React from "react";
import BaseLayout from "../components/Layouts/BaseLayout";

class SuperComponent extends React.Component {
  constructor(props) {
    super(props);
    this.someVariable = "Just some variale";
  }

  alertName(title) {
    alert(title);
  }

  render() {
    return (
      <div>
        <BaseLayout>
          <h1> Blogs</h1>
        </BaseLayout>
      </div>
    );
  }
}

export default SuperComponent;
