---
title: afinfo MacOS Command Guide
description: Learn how to use the afinfo command on MacOS to get detailed information about audio files.
---

The MacOS afinfo command provides detailed information about audio files, including format, duration, bit rate, and more. It is a useful tool for analyzing and troubleshooting audio files on your MacOS system.

## afinfo Syntax:
```bash
afinfo [option] [audiofile]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -h     | Show help/usage information   |
| -b     | Show basic information        |
| -d     | Show data format information  |
| -r     | Show audio data rate          |
| -c     | Show audio format description |
| -s     | Show audio stream summary     |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| audiofile | The audio file for which to display information |

:::caution
Exercise caution when using the afinfo command as it provides detailed information about audio files, including metadata that may be sensitive or private. Be mindful of the privacy implications when running this command.
:::
## afinfo Command Samples:
### Display Audio File Information
```bash
afinfo audio_file.mp3
```
This command displays detailed information about the specified audio file.

### Display Channel Layout Information
```bash
afinfo -c audio_file.wav
```
Displays the channel layout information for the specified audio file.

### Display Peak Information
```bash
afinfo -p audio_file.aiff
```
Shows peak information (maximum sample value) for the specified audio file.

### Display File Format Information
```bash
afinfo -f audio_file.aac
```
Prints out the format specific information for the specified audio file.

### Display Audio Data Length
```bash
afinfo -l audio_file.m4a
```
Displays the length (in frames) of the audio data for the specified file.

### Display Bit Depth Information
```bash
afinfo -b audio_file.flac
```
Shows the bit depth of the audio data in the specified FLAC file.

### Display Sample Rate Information
```bash
afinfo -r audio_file.aif
```
Prints out the sample rate information for the specified audio file.
:::tip
When using the afinfo command in MacOS, make sure to check the available options and provide the necessary arguments to get the desired information about audio files.
:::

## afinfo FAQ:
### How do I use afinfo in MacOS?
To use the afinfo command in MacOS, execute the following command:
```bash
afinfo audiofile.mp3
```

### What information does afinfo provide in MacOS?
The afinfo command in MacOS provides detailed information about the specified audio file, including sample rate, file type, duration, and more.
```bash
afinfo audiofile.mp3
```

### How can I get the bitrate of an audio file using afinfo in MacOS?
To get the bitrate of an audio file using afinfo in MacOS, you can run the following command:
```bash
afinfo -b audiofile.mp3
```

### Can I use afinfo to check the duration of an audio file in MacOS?
Yes, you can use the afinfo command to check the duration of an audio file in MacOS. Here is an example command:
```bash
afinfo -q audiofile.mp3
```

### How do I display detailed channel layout information for an audio file using afinfo in MacOS?
You can display detailed channel layout information for an audio file using the afinfo command in MacOS by running the following command:
```bash
afinfo -c audiofile.mp3
```

### Is there a way to view all available information about an audio file with afinfo in MacOS?
Yes, you can view all available information about an audio file using the afinfo command in MacOS by running the following command:
```bash
afinfo -r audiofile.mp3
```
## Applications of the afinfo command

- Retrieving audio file information 
- Checking audio file format and duration 
- Viewing audio file metadata 
- Verifying audio file integrity 
- Analyzing audio file properties