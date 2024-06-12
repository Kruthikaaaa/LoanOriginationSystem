// // import FontAwesome from '@expo/vector-icons/FontAwesome';
// // import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// // import { useFonts } from 'expo-font';
// // import { Stack } from 'expo-router';
// // import * as SplashScreen from 'expo-splash-screen';
// // import { useEffect } from 'react';
// // import 'react-native-reanimated';

// // import { useColorScheme } from '@/components/useColorScheme';

// // export {
// //   // Catch any errors thrown by the Layout component.
// //   ErrorBoundary,
// // } from 'expo-router';

// // export const unstable_settings = {
// //   // Ensure that reloading on `/modal` keeps a back button present.
// //   initialRouteName: '(tabs)',
// // };

// // // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// // export default function RootLayout() {
// //   const [loaded, error] = useFonts({
// //     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
// //     ...FontAwesome.font,
// //   });

// //   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
// //   useEffect(() => {
// //     if (error) throw error;
// //   }, [error]);

// //   useEffect(() => {
// //     if (loaded) {
// //       SplashScreen.hideAsync();
// //     }
// //   }, [loaded]);

// //   if (!loaded) {
// //     return null;
// //   }

// //   return <RootLayoutNav />;
// // }

// // function RootLayoutNav() {
// //   const colorScheme = useColorScheme();

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <Stack>
// //         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// //         <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
// //       </Stack>
// //     </ThemeProvider>
// //   );
// // }

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// import { Slot, router } from 'expo-router';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';
// import Header from '../components/customComponents/header';

// export default function DdeFormHeader() {
//   return (
//   <View>
//     {/* <View style={styles.container}>
//       <Header/>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() =>console.log("fghj")}>
//           <View style={styles.card}>
//             <Text style={styles.cardText}>Applicant Info</Text>
//             <Ionicons name="person" size={20} color="maroon" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => router.push('LoanInfo')}>
//           <View style={styles.card}>
//             <Text style={styles.cardText}>Loan Info</Text>
//             <FontAwesome name="dollar" size={20} color="green" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => router.push('GeneralInfo')}>
//           <View style={styles.card}>
//             <Text style={styles.cardText}>General Info</Text>
//             <Ionicons name="information-circle" size={20} color="blue" />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => router.push('DocumentsUpload')}>
//           <View style={styles.card}>
//             <Text style={styles.cardText}>Documents Upload</Text>
//             <Ionicons name="document" size={20} color="black" />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View> */}
//     <Slot/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f8f8',
//     marginTop:30,
    
//   },
//   headerContainer: {
//     flexDirection: 'row', // Ensure horizontal alignment
//     justifyContent: 'space-around',
//     alignItems: 'left',
//     // padding: 10,
//   },
//   card: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 5,
//     marginHorizontal: 10, // Add horizontal margin to space out cards
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 3,
//     width: 90,
//     height: 60,
//   },
//   cardText: {
//     marginBottom: 5,
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
// });

