import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // 通过使用原生API，显式地聚焦text输入框
    this.textInput.focus();
  }

  render() {
    // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />

      </div>
    );
  };
};
ReactDOM.render(<CustomTextInput />, document.getElementById('root'));
registerServiceWorker();
