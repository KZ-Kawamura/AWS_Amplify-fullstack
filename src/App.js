import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


function App(signOut) {
  return (
    <View className="App">
      <Card>

        <img src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We no have Auth!!!!!</Heading>
        <h1>Hello React</h1>
      </Card>
        <h1>Hello React</h1>
      <Button onClick={signOut}>Sign OUT</Button>
        <h1>KZS</h1>
    </View>
  );
}

export default withAuthenticator(App);
