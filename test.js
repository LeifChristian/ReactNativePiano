import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import { Button, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native'
// import Switchy from './switch'
// import { WebView } from 'react-native-webview';
// import { StatusBar } from 'expo-status-bar';

let pitches = [];
let time = [];
let click=false;
let ass = false;
let toggle=false;
let recording = false;
let recordingStartTime
let pitchesTime = [];
let playingBack = false;

const Switchy = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState); console.log(isEnabled)};

  return (
//     <View>
<>

 <TouchableOpacity onPressIn={() => {[toggleSwitch(), record()]}} style={[]}>
   <Text style={isEnabled ? styles.Redtrols : styles.Controls}>{isEnabled ? 'Recording' : "Record"}</Text>
   </TouchableOpacity>

<TouchableOpacity onPressIn={() => {playback2(), (isEnabled ? toggleSwitch() : '')}} style={[]}>
<Text style={styles.Play}>Play</Text>
</TouchableOpacity>
</>
// {/* 
//       <Switch
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       /> */}

//       <Button title = {isEnabled.toString()} onPress = {toggleSwitch} style = {styles.beet}></Button>

//     </View>
  );
}

const C = ({ onPress, title }) => ( 
  <TouchableOpacity onPressIn={() => {playThings0('1')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Csharp = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings1('2')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const D = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings2('3')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Dsharp = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings3('4')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const E = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings4('5')}} style={[styles.appButtonContainer, styles.EB]}>
    <Text style={null}>{title}</Text>
  </TouchableOpacity>
);

const F = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings5('6')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Fsharp = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings6('7')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const G = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings7('8')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const Gsharp = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings8('9')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const A = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings9('10')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Asharp = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings10('11')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const B = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings11('12')}} style={[styles.appButtonContainer, styles.EB]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const C1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings12('13')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Csharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings13('14')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const D1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings14('15')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Dsharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings15('16')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const E1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings16('17')}} style={[styles.appButtonContainer, styles.EB]}>
    <Text style={styles.EB}>{title}</Text>
  </TouchableOpacity>
);

const F1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings17('18')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Fsharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings18('19')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const G1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings19('20')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Gsharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings20('21')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const A1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings21('22')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Asharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings22('23')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const B1 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings23('24')}} style={[styles.appButtonContainer, styles.EB]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const C2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings24('25')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={[styles.appButtonText, styles.C2]}>{title}</Text>
  </TouchableOpacity>
);

const Csharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings25('26')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const D2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings26('27')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Dsharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings27('28')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const E2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings28('29')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const F2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings29('30')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Fsharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings30('31')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const G2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings31('32')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Gsharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings32('33')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const A2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings33('34')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Asharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings34('35')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const B2 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings35('36')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const C3 = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playThings36('37')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const Record = ({ onPress, title }) => (
  
  <TouchableOpacity onPressIn={() => {record()}} style={[]}>
    <Text style={styles.Controls}>Record</Text>
  </TouchableOpacity>
);
const Play = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {playback2()}} style={[]}>
    <Text style={styles.Play}>Play</Text>
  </TouchableOpacity>
);
const Clear = ({ onPress, title }) => (
  <TouchableOpacity onPressIn={() => {clearit()}} style={[]}>
    <Text style={styles.Clear}>Clear</Text>
  </TouchableOpacity>
);


export default function App() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {setIsEnabled(previousState => !previousState); console.log(isEnabled)};


  if(isEnabled) {  return (
    <>
      <View style={styles.container }>
       <C />
        <Csharp/>
        <D/>
        <Dsharp/>
        <E/>
        <F/>
        <Fsharp/>
        <G/>
        <Gsharp/>
        <A/>
        <Asharp/>
        <B/>
      
        <C1/>
        <Csharp1/>
        <D1/>
        <Dsharp1/>
        <E1/>
        <F1/>
        <Fsharp1/>
        <G1/>
        <Gsharp1/>
        <A1/>
        <Asharp1/>
        <B1/>
        <C2/>

        {/* <View onTouchStart={onUpIn} onTouchEnd={onUpOut}>

  <A2/>
  
  
</View>


<View onTouchStart={onUpIn} onTouchEnd={onUpOut}>

  <Asharp2/>
 
</View>
 */}
        
      </View>
      <View style = {styles.container1}>
          {/* <Button style = {styles.fuckbutton} title = 'Record' onPressIn={() => {record()}}></Button> */}

          <View>
        <TouchableOpacity onPress={() => [toggleSwitch()]}><Text style = {isEnabled ? styles.LoHi : styles.HiLo} >{isEnabled? ">": "<"}</Text></TouchableOpacity>
        </View>
          <Switchy/><Clear/>

          {/* <Button  title={isEnabled? "LOW" : "HIGH"} onPress={() => {toggleSwitch()}}></Button> */}


          <TouchableOpacity onPress={() => [toggleSwitch()]}><Text style = {styles.LoHi} >{isEnabled? "<": ">"}</Text></TouchableOpacity>

          {/* <Button title = "Play" onPressIn={() => {playback2()}}>RealTime</Button>
          <Button title = "Clear" onPressIn={() => {clearit()}}>Clear</Button> */}
          {/*  with touchableOpacity: --> <Record/><Play/><Clear/> */}
      </View>
    </>
  );}  

  else {return (    <>
    <View style={styles.container }>
      <C1/>
      <Csharp1/>
      <D1/>
      <Dsharp1/>
      <E1/>
      <F1/>
      <Fsharp1/>
      <G1/>
      <Gsharp1/>
      <A1/>
      <Asharp1/>
      <B1/>
      <C2/>
      <Csharp2/>
      <D2/>
      <Dsharp2/>
      <E2/> 
      <F2/>
      <Fsharp2/>
      <G2/>
      <Gsharp2/>
      <A2/>
      <Asharp2/>
      <B2/>
      <C3/>



      {/* <View onTouchStart={onUpIn} onTouchEnd={onUpOut}>

<A2/>


</View>


<View onTouchStart={onUpIn} onTouchEnd={onUpOut}>

<Asharp2/>

</View>
*/}
      
    </View>
    <View style = {styles.container1}>
        {/* <Button style = {styles.fuckbutton} title = 'Record' onPressIn={() => {record()}}></Button> */}

        <View>
        <TouchableOpacity onPress={() => [toggleSwitch()]}><Text style = {isEnabled ? styles.LoHi : styles.HiLo} >{isEnabled? ">": "<"}</Text></TouchableOpacity>
        </View>
        <Switchy/><Clear/>

        {/* <Button title={isEnabled ? "LOW" : 'HIGH'} onPress={() => {toggleSwitch()}}></Button> */}

        {/* <Button title = "Play" onPressIn={() => {playback2()}}>RealTime</Button>
        <Button title = "Clear" onPressIn={() => {clearit()}}>Clear</Button> */}
        {/*  with touchableOpacity: --> <Record/><Play/><Clear/> */}

<View>
        <TouchableOpacity onPress={() => [toggleSwitch()]}><Text style = {isEnabled ? styles.LoHi : styles.HiLo} >{isEnabled? "<": ">"}</Text></TouchableOpacity>
        </View>

    </View>
  </>)}

}

const styles = StyleSheet.create({

  appButtonContainer: {
    elevation: 8,
    width: "2%",
    marginLeft: '1  %',
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: .1
  },

  appButtonText: {
    fontSize: 1,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(50, 144, 144)',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '-4%'
  },

 container1: {
    // display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(50, 144, 144)',
    alignItems: 'center',
    justifyContent: 'center',
  },

sharp : { color: 'black', backgroundColor: 'black', height: '29.9%', marginTop: "-18.4%", width: '5.8%', marginLeft: "-2.1%", marginRight: '-2.%', zIndex: 2 },
natural: { padding: "1%",color: 'white', backgroundColor: 'white', height: '58%', width: '6.8%', marginLeft: '-.1%', marginRight: '.5%' },

EB: {color: 'white', backgroundColor: 'white', height: '58%', width: '6.8%', marginLeft: '-.1%', marginRight: '1%' },


// B: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%',},
// C: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%',},
// E: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%', },
// F: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%', },


Controls: {backgroundColor: 'rgb(54, 118, 228)', padding: 3, borderRadius: 6, marginLeft: "2%", marginRight: "2%", textAlign: 'center', fontSize: 28},
Redtrols: {backgroundColor: 'red', padding: 3, borderRadius: 6, marginLeft: "2%", marginRight: "2%", textAlign: 'center', fontSize: 28},
Play: {backgroundColor: 'rgb(42, 210, 42)', padding: 3, borderRadius: 6, marginLeft: "2%", marginRight: "2%", textAlign: 'center', fontSize: 28},
Clear: {backgroundColor: 'lightgrey', padding: 3, borderRadius: 6, marginLeft: "2%", marginRight: "2%", textAlign: 'center', fontSize: 28},

LoHi: {backgroundColor: 'rgb(42, 210, 177)', padding: 3, borderRadius: 6, marginLeft: "2%", marginRight: "2%", textAlign: 'center', fontSize: 28},
HiLo: {backgroundColor: 'red', padding: 3, borderRadius: 6, marginLeft: "2%", marginRight: "2%", textAlign: 'center', fontSize: 28},
});

let playThings0 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key01.mp3`));
     await sound.playAsync();
   
    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings1 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key02.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings2 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key03.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings3 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key04.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings4 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key05.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings5 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key06.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings6 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key07.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings7 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key08.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings8 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key09.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings9 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key10.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings10 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key11.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings11 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key12.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings12 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key13.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings13 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key14.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings14 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key15.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings15 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key16.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings16 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key17.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings17 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});;
     await sound.loadAsync(require(`./audio/key18.mp3`));
     await sound.playAsync();


    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings18 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key19.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings19 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key20.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings20 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key21.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings21 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key22.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings22 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key23.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings23 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key24.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings24 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key25.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings25 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key26.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings26 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key27.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings27 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key28.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings28 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key29.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings29 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key30.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings30 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key31.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}
let playThings31 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key32.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings32 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key33.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings33 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key34.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings34 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key35.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings35 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key36.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings36 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key37.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}

let playThings37 = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound();
    sound.setOnPlaybackStatusUpdate((status) => {if (!status.didJustFinish) return;sound.unloadAsync();});
     await sound.loadAsync(require(`./audio/key38.mp3`));
     await sound.playAsync();

    // document.getElementById('clearedit').innerHTML = ""  *** put this back!!!!
    try {
      // audio.play()
    
      if(!playingBack){
        recording = true;
        
        // pitchesTime.push({pitch: key, timing: Date.now() })
        console.log(pitchesTime, 'adddss')
        }
       
      if(recording && click){
       
        pitchesTime.push({pitch: key, timing: Date.now() - recordingStartTime})
        console.log(pitchesTime)
        // var start = new Date().getTime();

        // time.push(start); console.log(time)
      }
   
    } catch (err) {
      console.log('Failed to play...' + err);
    }
}


let clearit = () => { pitches = []; time = []; pitchesTime = []; playingBack = false; console.log(pitches, "no pitches");
console.log(time, 'no time')
// document.getElementById('clearedit').innerHTML = "cleared"
}

let record =  () => {
  toggle = !toggle;
  click = true;

// if(toggle){document.getElementById('record').style.backgroundColor='red';
// document.getElementById('record').innerHTML = "busy"
// }

// if(!toggle){document.getElementById('record').style.backgroundColor=''; document.getElementById('record').innerHTML = 'Record'}

  startRecording();
  
  }

let playback2 = async () => {

  if(!click){alert('no'); return}

  // document.getElementById('clearedit').innerHTML = ""
  // document.getElementById('record').style.backgroundColor=''; document.getElementById('record').innerHTML = 'Record'

playingBack=true;
recording=false;

  if (pitchesTime.length > 0 ) {

    pitchesTime.forEach((pitch, index) => {

      console.log(pitch.timing)
      console.log(pitch.pitch);

      // let name = `playThings${pitch.pitch}`

      let ca=`playThings${pitch.pitch-1}()`
  
       setTimeout(function () {eval(ca)}, (pitch.timing ))

      })
  
  }

  else { alert('nothing to play back'); return;}
  

}

let startRecording = () => {
recordingStartTime = Date.now()
}
