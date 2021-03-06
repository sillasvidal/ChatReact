import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import io from 'socket.io-client';

import {
  Container,
  Header,
  HeaderText,
  Body,
  ContainerBottom,
  InputMessage,
  ButtonSubmitMessage,
} from './styles';

const Chat: React.FC = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState('');

  let socket;

  useEffect(() => {
    socket = io.io('http://10.0.0.108:3333');

    socket.on('previousMessages', messages => {
      setChatMessages(messages);
    });

    socket.on('receivedMessage', function (message) {
      setChatMessages([...chatMessages, message]);
    });
  }, [chatMessages]);

  const handleSendMessage = useCallback(() => {
    const messageObject = {
      author: 'Sillas',
      message: chatMessage,
    };

    console.log(messageObject);

    socket.emit('sendMessage', messageObject);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText>Nome usuário</HeaderText>
      </Header>

      <Body>
        {chatMessages.map(chatmessage => (
          <HeaderText>{chatmessage}</HeaderText>
        ))}
      </Body>

      <ContainerBottom>
        <InputMessage value={chatMessage} onChangeText={setChatMessage} />
        <ButtonSubmitMessage onPress={handleSendMessage}>
          <Icon name="send" size={50} color="#000" />
        </ButtonSubmitMessage>
      </ContainerBottom>
    </Container>
  );
};

export default Chat;
