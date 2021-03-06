import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.View`
  height: 10%;
  background: #28262e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-weight: bold;
`;

export const Body = styled.ScrollView`
  height: 80%;
`;

export const ContainerBottom = styled.View`
  background: #28262e;
  height: 8%;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  margin: 5px 10px;
`;

export const InputMessage = styled.TextInput`
  background: #28262e;
  width: 80%;
  color: #666360;
  border-radius: 10px;
`;

export const ButtonSubmitMessage = styled.TouchableOpacity`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff9000;
  border-radius: 60px;
  margin: 6px 6px;
`;
