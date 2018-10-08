import React, { Component } from 'react';
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
  onMessage = message => {
    //The callback is getting called.
    this.props.onMessage(this.props.user.username, message);
  };

  render() {
    const { messages, user } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

        <MessageHistory messages={messages} user={user} />
        <AddMessage onMessage={this.onMessage} />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  onMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;
