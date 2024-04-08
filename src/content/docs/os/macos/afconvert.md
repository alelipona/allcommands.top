---
title: afconvert MacOS command
description: Convert audio files on MacOS using the afconvert command.
---

The MacOS afconvert command is a powerful tool for converting audio files to different formats with various options for customization. It supports a wide range of audio formats and allows you to specify parameters such as output file format, sample rate, bit rate, and channel layout. This command line tool is efficient and easy to use, making it a valuable resource for managing and manipulating audio files on MacOS. Whether you need to compress audio files for efficient storage or convert them to a compatible format for a specific application, afconvert provides the flexibility and control you need to get the job done.
## afconvert Syntax:
```bash
afconvert [option] [parameter]
```

## Options:
| Option | Description                              |
|--------|------------------------------------------|
| -f     | Specify the output file format           |
| -d     | Specify the output data format           |
| -b     | Specify the output bitrate               |
| -c     | Specify the output channel layout        |
| -s     | Specify the output sample rate           |
| -v     | Verbose mode                             |
| -h     | Display help information                  |

## Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| inputfile | The input file to convert                |
| outputfile| The output file name to create           |
| sr        | The sample rate for the output           |
| c         | Number of output channels                |
| f         | Output file format                      |
| br        | Bitrate for the output                   |
| d         | Output data format                      |
| bpo       | Bytes per frame (only for formats such as MPEG-4 AAC) |

:::caution
Exercise caution when using the `afconvert` command, as incorrect usage of options or parameters can result in unexpected behavior or file corruption.
:::
## afconvert bash Examples:
### Convert FLAC to WAV
```bash
afconvert -f WAVE filename.flac newfile.wav
```
Converts a FLAC audio file named "filename.flac" to a WAV file named "newfile.wav".

### Convert MP3 to AAC
```bash
afconvert -f m4af -d aac filename.mp3 newfile.m4a
```
Converts an MP3 audio file named "filename.mp3" to an AAC audio file named "newfile.m4a".

### Change Audio Sample Rate
```bash
afconvert -d aac -s 44100 -f 'caff' filename.wav newfile.caf
```
Changes the sample rate of an audio file "filename.wav" to 44100 Hz and converts it to a CAF file named "newfile.caf".

### Convert AIFF to MP4
```bash
afconvert -f m4af -d aacd filename.aiff newfile.mp4
```
Converts an AIFF audio file named "filename.aiff" to an MP4 audio file named "newfile.mp4".

### Specify Output Bit Depth
```bash
afconvert -f AIFC -d I16@44100 filename.wav newfile.aif
```
Converts a WAV audio file named "filename.wav" to an AIF audio file "newfile.aif" with a 16-bit depth at 44100 Hz.

### Preserve Channel Layout
```bash
afconvert -f 'AIFF' -d ima4 filename.wav newfile.aiff
```
Preserves the channel layout when converting a WAV audio file named "filename.wav" to an AIFF audio file named "newfile.aiff".
:::tip
When using the afconvert command in MacOS, make sure to carefully review the available options and parameters in the command's documentation to achieve the desired audio file conversion results.
:::

### How do I use afconvert in MacOS?
To use the afconvert command in MacOS, execute the following command:
```bash
afconvert --soundcheck input.wav output.aiff
```

### How can I convert an audio file to a different format using afconvert?
To convert an audio file to a different format with afconvert, use the following syntax with the appropriate file paths and desired output format:
```bash
afconvert input.mp3 output.aac
```

### How do I specify the sample rate when using afconvert in MacOS?
To specify the sample rate while using afconvert in MacOS, include the "--samplerate" option followed by the desired value in the command:
```bash
afconvert --samplerate 44100 input.wav output.aiff
```

### Can I adjust the audio channel layout with the afconvert command in MacOS?
Yes, you can adjust the audio channel layout using the afconvert command by specifying the "--channel" option followed by the desired layout:
```bash
afconvert --channel 1 input.wav output.wav
```

### How do I convert multiple audio files at once using afconvert in MacOS?
To convert multiple audio files simultaneously with afconvert, you can utilize wildcards in the command to specify the files. For example:
```bash
afconvert *.wav -o compressed -d aac
```

### Is it possible to preserve metadata while converting audio files with afconvert in MacOS?
Yes, you can preserve metadata during audio file conversion using afconvert by adding the "--preserve" option in the command:
```bash
afconvert --preserve input.mp3 output.aiff
```

### How can I adjust the audio quality when using afconvert command in MacOS?
To adjust the audio quality with the afconvert command in MacOS, you can specify the desired quality level using the "--quality" option followed by a value between 0 and 127:
```bash
afconvert --quality 90 input.wav output.aiff
```
## Applications of the afconvert command

- Convert audio file formats
- Modify audio file settings
- Create custom audio file formats