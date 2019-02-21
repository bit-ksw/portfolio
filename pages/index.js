import React from "react";
import BaseLayout from "../components/Layouts/BaseLayout";
import axios from "axios";
import SuperComponent from "../components/SuperComponent";

class Index extends SuperComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "I am Index P333age"
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  updateTitle() {
    this.setState({ title: "I am updated Index Page" });
  }
  render() {
    const { title } = this.state;
    const { userData, initialData } = this.props;
    console.log(userData);
    return (
      <BaseLayout>
        <h1>I am header subtitle</h1>
        <h2>{title}</h2>
        <h2>{initialData}</h2>
        <button onClick={() => this.updateTitle()}>Change</button>
      </BaseLayout>
    );
  }
}

export default Index;
