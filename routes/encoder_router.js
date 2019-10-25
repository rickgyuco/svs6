'use strict';

const express           = require('express');
const router            = express.Router();
const ffmpegInstaller   = require('@ffmpeg-installer/ffmpeg');
const ffmpeg            = require('fluent-ffmpeg');
const sprintf           = require('sprintf');
const fs                = require('fs');
const tmp               = require('tmp');
    var tempDir = tmp.dirSync({ unsafeCleanup: true });

ffmpeg.setFfmpegPath(ffmpegInstaller.path);


// POSTs
router.post('/addFrame', (req, res) => {
    const frame = req.body.dat.replace(/^data:image\/(png|jpeg);base64,/, "");
    const fName = sprintf('frame-%03d.' + req.body.format, parseInt(req.body.frame));
    const dir = tempDir.name + "/" + fName;

    console.log("received " + fName);

    return new Promise((resolve, reject) => {
        fs.writeFile(dir, frame, 'base64', (err) => {
          if(err)
            reject(err);
          else
            resolve();
        });
    })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send();
    })
    
});


function writeFrameToDisk(fr){
  return new Promise((resolve, reject) => {
      const frame = fr.dat.replace(/^data:image\/(png|jpeg);base64,/, "");
      const fName = sprintf('frame-%03d.jpg', parseInt(fr.index));
      const dir = tempDir.name + "/" + fName;

      //console.log(frame);

      fs.writeFile(dir, frame, 'base64', (err) => {
        if (err) {
          console.log('there was an error writing file: ' + err);
          reject(err);
        }
        else {
          console.log("successfully wrote frame" + fr.index + " to disk");
          resolve();
        }
      });
  })
}

router.post('/addFrames', (req, res) => {
    let frames = req.body.frames;

    console.log('FRAMES: ');

    frames.reduce((prev, next, index) => {
        console.log("f" + index);

        return prev
          .then(() => {
            return writeFrameToDisk(next);
          })
    }, Promise.resolve())

    .then(() => {
      //console.log("wrote all frames to disk");
      res.status(200).send('done writing');
    })
    .catch((err) => {
      console.log(err);
    });
});
  

router.post('/screenshot', (req, res) => {
  const frame = req.body.dat.replace(/^data:image\/(png|jpeg);base64,/, "");
  const dir = outputDir + '/' + req.body.fileName;

  console.log('SCREENSHOT');

    fs.writeFile(dir, frame, 'base64', (err) => {
      if (err) {
          console.log('there was an error writing file: ' + err);
      }
      res.status(200).send(`/output/${req.body.fileName}`);
    });
});

router.post('/encode', (req, res) => {
    let oldTemp = tempDir;
    
    res.setHeader("Content-Type", "video/mp4");

    console.log('ENCODE');

    var proc = new ffmpeg()
        .input(tempDir.name + '/frame-%03d.jpg').inputFPS(12)
        .outputOptions([
          '-framerate 12',
          '-start_number 0',
          '-refs 5',
          '-c:v libx264',
          '-crf 23',
          '-b:v 2500'
        ])
        .output(outputDir + '/' + req.body.path + '.mp4')
        .on('start', function(){
          console.log("Begin render!");
        })
        .on('error', function(err) {
          console.log('An error occurred: ' + err.message);
        })
        .on('end', function() {
          console.log('End render!' + '/output/' + req.body.path + '.mp4');
          
          oldTemp.removeCallback();
          res.status(200).send('/output/' + req.body.path + '.mp4');
        })
        .run()

        tempDir = tmp.dirSync({unsafeCleanup: true});
});

module.exports = router;