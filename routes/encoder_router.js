'use strict';

const express = require('express');
const router            = express.Router();
const ffmpegInstaller   = require('@ffmpeg-installer/ffmpeg');
const ffmpeg            = require('fluent-ffmpeg');
const sprintf           = require('sprintf');
const fs                = require('fs');
const multer            = require('multer');
  const upload = multer({dest:outputDir});
  const tarball = require('tarball-extract');

const tarfs             = require('tar-fs');
const tmp               = require('tmp');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

// POSTs
router.post('/addFrame', (req, res) => {
    const frame = req.body.dat.replace(/^data:image\/(png|jpeg);base64,/, "");
    const fName = sprintf('frame-%03d.' + req.body.format, parseInt(req.body.frame));
    //let fr = req.file;
    const dir = tempDir.name + "/" + fName;

    //console.log(frame);

   // console.log(req.file);
  //  console.log('received frame: ' + fr.originalname);

  console.log("received " + fName);

    fs.writeFile(dir, frame, 'base64', (err) => {
      if (err) {  
          console.log('there was an error writing file: ' + err);
      }
      res.status(200).send();
  });

    
/*
    fs.writeFile(dir, frame, 'base64', (err) => {
        if (err) {  
            console.log('there was an error writing file: ' + err);
        }
        res.status(200).send();
    });*/
});

router.post('/screenshot', (req, res) => {
  const frame = req.body.dat.replace(/^data:image\/(png|jpeg);base64,/, "");
  const dir = outputDir + "/screenshot.jpg";

  console.log("received");

    fs.writeFile(dir, frame, 'base64', (err) => {
      if (err) {  
          console.log('there was an error writing file: ' + err);
      }
      res.status(200).send('/output/screenshot.jpg');
    });
});


router.post('/sendTAR', upload.single('tarz'), (req, res) => {    
    console.log("temporary path located at:\n" + tempDir.name);

  let zip = req.file;

  tarball.extractTarball(outputDir + "/" + zip.filename, tempDir.name, function(err){
    if(err) console.log(err)
    res.status(200).send(zip.destination + "/" +zip.filename);
  })
  /*const frame = req.body.dat.replace(/^data:image\/(png|jpg);base64,/, "");
  const fName = sprintf('frame-%03d.' + req.body.format, parseInt(req.body.frame));
  const dir = tempDir.name + "/" + fName;

  console.log('received frame: ' + fName);

  fs.writeFile(dir, frame, 'base64', (err) => {
      if (err) {
          console.log('there was an error writing file: ' + err);
      }
      res.status(200).send();
  });*/
});

router.post('/encode', (req, res) => {
    let oldTemp = tempDir;

    console.log(baseDir);

    console.log(outputDir + '/' + req.body.path + '.mp4');

    res.setHeader("Content-Type", "video/mp4");

    var proc = new ffmpeg()
        .input(tempDir.name + '/frame-%03d.jpg').inputFPS(15)
        .input(baseDir + '/assets/audio/theme.mp3')
        .outputOptions([
          '-framerate 15',
          '-start_number 0',
          '-refs 5',
          '-c:v libx264',
          '-crf 23',
          '-b:v 1024',
          '-b:a 128k'
        ])
        .output(outputDir + '/' + req.body.path + '.mp4')
        .on('start', function(){
          console.log("Begin render!");
        })
        .on('error', function(err) {
          console.log('An error occurred: ' + err.message);
        })
        .on('end', function() {
          console.log('End render!');
          oldTemp.removeCallback();

          console.log('/output/' + req.body.path + '.mp4');

          res.status(200).send('/output/' + req.body.path + '.mp4');
        })
        .run()

    global.tempDir = tmp.dirSync({unsafeCleanup: true});
});

module.exports = router;