
import { StyleSheet, Text, View } from 'react-native';
import ReduxApp from './basics/ReduxApp';
// import CrudApp from './crud/CrudApp';

export default function App() {
  return (
    <View style={styles.container}>
      <ReduxApp />
      {/* <CrudApp /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
