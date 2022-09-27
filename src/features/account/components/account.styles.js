import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: {
    uri: "https://images.unsplash.com/photo-1612015560621-202b739dde31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  padding-bottom: 15px;
  margin-top: 2%;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 200px;
  height: 50px;
  justify-content: center;
  align-self: center;
  box-shadow: 10px 5px 5px black;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  color: white;
  margin-top: 65%;
  box-shadow: 10px 5px 5px black;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;