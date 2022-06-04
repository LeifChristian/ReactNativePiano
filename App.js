import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import { Button, TouchableOpacity } from 'react-native'
// import { WebView } from 'react-native-webview';
// import { StatusBar } from 'expo-status-bar';

let pitches = [];
let time = [];
let click=false;
let toggle=false;
let recording = false;
let recordingStartTime
let pitchesTime = [];
let playingBack = false;

const C = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings('1')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Csharp = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings1('2')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const D = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings2('2')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Dsharp = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings3('3')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const E = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings4('4')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const F = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings5('5')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Fsharp = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings6('6')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const G = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings7('7')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const Gsharp = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings8('8')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const A = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings9('9')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Asharp = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings10('10')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const B = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings11('11')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const C1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings12('12')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Csharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings13('13')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const D1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings14('14')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Dsharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings15('15')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const E1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings16('16')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const F1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings17('17')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Fsharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings18('18')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const G1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings19('19')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Gsharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings20('20')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const A1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings21('21')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Asharp1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings22('22')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const B1 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings23('23')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const C2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings24('24')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Csharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings25('25')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const D2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings26('26')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Dsharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings27('27')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const E2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings28('28')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const F2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings29('29')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Fsharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings30('30')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const G2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings31('31')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Gsharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings32('32')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const A2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings33('33')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Asharp2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings34('34')}} style={[styles.appButtonContainer, styles.sharp]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const B2 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings35('35')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const C3 = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playThings36('36')}} style={[styles.appButtonContainer, styles.natural]}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const Record = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playback2()}} style={[]}>
    <Text style={styles.Controls}>Record</Text>
  </TouchableOpacity>
);
const Play = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {playback()}} style={[]}>
    <Text style={styles.Controls}>Play</Text>
  </TouchableOpacity>
);
const Clear = ({ onPress, title }) => (
  <TouchableOpacity onPress={() => {clearit()}} style={[]}>
    <Text style={styles.Controls}>Clear</Text>
  </TouchableOpacity>
);

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <C/>
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
      </View>
      <View style = {styles.container1}>
          <Button title = "Record" id = 'record' onPress={() => {playback()}}></Button>
          <Button title = "Play" id="playback" onPress={() => {playback2()}}>RealTime</Button>
          <Button title = "Clear" onPress={() => {clearit()}}>Clear</Button>
          {/*  with touchableOpacity: --> <Record/><Play/><Clear/> */}
      </View>
    </>
  );
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
    flex: 7,
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '-4%'
  },

 container1: {

    // display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
sharp : { padding: "1%", color: 'black', backgroundColor: 'black', height: '19.9%', marginTop: "-13.4%", width: '3%', marginLeft: "-1.1%", marginRight: '-1.5%', zIndex: 2 },
natural: {  color: 'white', backgroundColor: 'white', height: '37%', width: '4.7%', marginLeft: '-.2%', marginRight: '-.2%' },

B: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%',  },
C: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%', },
E: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%', },
F: {  color: 'white', backgroundColor: 'white', height: '37%', width: '3.4%', },

Controls: {backgroundColor: 'blue', padding: 3, borderRadius: 6, marginLeft: "2%", marginRight: "2%", textAlign: 'center', fontSize: 28}


});

let playThings = async (key) => {

  // recording=true;

    // play the file tone.mp3
    // SoundPlayer.playSoundFile(`${key}`, 'mp3')

    // let variable = `./audio/${key}.mp3`;
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key01.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key02.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key03.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key04.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key05.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key06.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key07.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key08.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key09.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key10.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key11.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key12.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key13.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key14.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key15.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key16.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key17.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key18.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key19.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key20.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key21.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key22.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key23.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key24.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key25.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key26.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key27.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key28.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key29.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key30.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key31.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key32.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key33.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key34.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key35.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key36.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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
    const sound = new Audio.Sound()
     await sound.loadAsync(require(`./audio/key37.mp3`));
     await sound.playAsync();
     await sound.unloadAsync();   

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

let playback =  () => {
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

      let ca=`playThings${pitch.pitch}()`
  
       setTimeout(function () {eval(ca)}, (pitch.timing ))

      })
  
  }

  else { alert('nothing to play back'); return;}
  

}

let record = () => {

  // pitchesTime.push({ key: pitches, when: time

  // })

var start = new Date.now();

// for (i = 0; i < 50000; ++i) {
// // do something
// }

// var end = new Date.now();
// var time = end - start;
time.push(start);
// alert('Execution time: ' + time);
}

let startRecording = () => {
recordingStartTime = Date.now()
}
