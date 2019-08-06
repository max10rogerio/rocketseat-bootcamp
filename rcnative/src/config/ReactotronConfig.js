import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'React Native Demo',
  })
    .useReactNative()
    .connect()
  console.tron = tron

  tron.clear()
}
