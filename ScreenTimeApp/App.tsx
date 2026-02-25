/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { useEffect, useState } from 'react';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const { ApprovalModule } = NativeModules;

console.log('NativeModules:', NativeModules);

function App() {
  const [status, setStatus] = useState('Checking...');

 useEffect(() => {
    ApprovalModule.getApprovalStatus()
      .then((response: { approved: any; }) => {
        if (response.approved) {
          setStatus('Screen Time Approved ✅');
        } else {
          setStatus('Screen Time Not Approved ❌');
        }
      })
      .catch((error: any) => {
        console.log("error : ", error)
        setStatus('Error fetching approval');
      });
  }, []);

  return (
    <SafeAreaProvider>
       <View style={styles.container}>
      <Text style={styles.text}>{status}</Text>
    </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  },
});

export default App;
