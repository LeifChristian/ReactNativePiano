let playThings = async (key) => {

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


  export {playThings, playThings1,playThings2,playThings3,playThings4,
    playThings5,playThings6,playThings7,playThings8,playThings9,playThings10,
    playThings11,playThings12,playThings13,playThings14,playThings15,playThings16,
    playThings17,playThings18,playThings19,playThings20,playThings21,playThings22,
    playThings23,playThings24,playThings25,playThings26,playThings27,playThings28,
    playThings29,playThings30,playThings31,playThings32,playThings33,playThings34,
    playThings35, playThings36}