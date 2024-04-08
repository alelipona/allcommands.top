---
title: afplay MacOS command
description: "Learn how to use the afplay command on MacOS to play audio files from the command line."
---

The afplay command on MacOS allows users to play audio files directly from the command line. It is a built-in utility that supports various audio formats and provides options for playback control. With afplay, users can easily play music, sound effects, or any audio files without the need for a separate media player application. This command is especially useful for automation tasks, scripting, or quick audio playback without launching a dedicated application.

## afplay Syntax:
```bash
afplay [option] [parameter]
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -v     | Set the volume for playback             |
| -t     | Specify the duration of playback        |
| -h     | Display help information                |
| -q     | Quiet mode, suppress output             |
| -r     | Play at the given rate                  |
| -d     | Play for a given number of seconds      |
| -r     | Play at the given rate                  |
| -x     | Play only one file at a time            |

## Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| File      | Specify the audio file to be played       |
| URL       | Specify the URL of an audio file to play  |

:::caution
Be cautious while using the afplay command as it directly plays audio files and might be disruptive in certain environments like open workspaces. Always make sure you have permission to play audio on the system before using this command.
:::
## afplay bash Examples:
### Play an audio file from the command line
```bash
afplay /path/to/file.mp3
```
Plays the audio file "file.mp3" using the afplay command.

### Play an audio file in the background
```bash
afplay /path/to/file.mp3 &
```
Plays the audio file "file.mp3" in the background without blocking the terminal.

### Adjust playback volume
```bash
afplay -v 0.5 /path/to/file.mp3
```
Plays the audio file "file.mp3" at half the volume using the -v flag.

### Play audio with a specified duration
```bash
afplay -t 30 /path/to/file.mp3
```
Plays the audio file "file.mp3" for 30 seconds using the -t flag to set a specific duration.

### Play audio with a specified output device
```bash
afplay -d 'Soundflower (2ch)' /path/to/file.mp3
```
Plays the audio file "file.mp3" using the specified output device 'Soundflower (2ch)' using the -d flag.

### List available audio devices
```bash
afplay -l
```
Lists all available audio devices that can be used with the afplay command.
:::tip
When using the afplay command in MacOS, make sure to specify the correct file path for the audio file you want to play. Additionally, explore the various options available with the command to customize your audio playback experience.
:::

## afplay Command Help Center:

### How do I use afplay in MacOS?
To use the afplay command in MacOS, execute the following command:
```bash
afplay audio_file.mp3
```

### What options can I use with the afplay command?
You can use options such as -v for setting the volume level, -t for specifying a certain time to stop playback, and -r for controlling the playback rate.
```bash
afplay -v 50 audio_file.mp3
```

### How can I loop a sound using afplay in MacOS?
To loop a sound with afplay, you can use the -r option to set the playback rate to a negative value, effectively creating a loop.
```bash
afplay -r -1 audio_file.mp3
```

### Can I pause the playback with the afplay command?
Yes, you can pause the playback by using the Control + Z shortcut in your terminal. To resume playback, use the `fg` command.
```bash
<Control + Z>
fg
```

### How do I adjust the volume when using afplay?
You can adjust the volume level by using the -v option followed by the desired volume level (0-100).
```bash
afplay -v 80 audio_file.mp3
```

### Is it possible to play a specific portion of an audio file with afplay?
Yes, you can specify a start and end time for playback using the -t option to play a specific portion of an audio file.
```bash
afplay -t 15:30 audio_file.mp3
```

### How can I list the available options for the afplay command?
To view the available options and their descriptions for the afplay command, you can use the man page by typing `man afplay` in your terminal.
```bash
man afplay
```

### Can I play multiple audio files simultaneously with afplay?
Yes, you can play multiple audio files simultaneously by including their file paths as arguments in the afplay command.
```bash
afplay audio_file1.mp3 audio_file2.mp3
```
## Applications of the afplay command

- Play audio files from the command line
- Automate audio playback in scripts or workflows
- Test audio output and functionality on MacOS devices