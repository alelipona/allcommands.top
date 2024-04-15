---
title: say MacOS Command Guide
description: Learn how to use the MacOS say command for text-to-speech functionality. Customize speech output easily with different options and voices available.
---

The MacOS "say" command allows users to convert text into speech, providing a convenient way to listen to text content. This built-in feature offers various customization options, such as selecting different voices, adjusting speech rate, and even saving speech output to a file. The "say" command can be used in scripts, accessibility settings, or simply for fun. It is a versatile tool that enhances the user experience by providing a seamless text-to-speech functionality.
## say Syntax:
```bash
say [options] [text]
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -v     | Specify voice to use                    |
| -r     | Specify speech rate (words per minute)  |
| -o     | Save spoken text to an audio file       |
| -f     | Read text from file                     |
| -n     | Do not print warning messages           |
| -h     | Display help message                    |

## Parameters:
| Parameter     | Description                                   |
|---------------|-----------------------------------------------|
| text          | Text to be spoken out loud                     |
| voice         | Name of the voice to use                       |
| speech rate   | Number of words that should be spoken per minute |
| audio file    | File path where the audio output should be saved |
| file          | Path to the file containing text to be spoken  |

:::caution
Exercise caution when using the say command, especially when using the -o option to save audio files, as it will overwrite existing files without warning.
:::
## say Command Samples:
### Basic Text-to-Speech
```bash
say "Hello, World!"
```
Initiates text-to-speech to say the phrase "Hello, World!" out loud.

### Output Text File Content
```bash
say -f myfile.txt
```
Reads the content of the text file "myfile.txt" aloud using text-to-speech.

### Adjusting Speech Rate
```bash
say -r 200 "This is a fast spoken text."
```
Changes the speech rate to 200 words per minute while saying the provided text.

### Set Custom Voice
```bash
say -v Alex "Welcome to the world of MacOS."
```
Utilizes the voice "Alex" to speak the phrase "Welcome to the world of MacOS" using text-to-speech.

### Add Pauses
```bash
say "I will pause... for a moment." "I have resumed."
```
Adds a brief pause between the two provided phrases during text-to-speech output.

### Announce Time
```bash
say -v Samantha "The current time is $(date +%r)"
```
Uses the voice "Samantha" to announce the current time in the format: Hour:Minutes:Seconds AM/PM.

### Repeat Itself
```bash
say "Repeat after me." "Repeat after me." "Repeat after me."
```
Repeats the phrase "Repeat after me." three times using text-to-speech.
:::tip
It is recommended to use headphones or keep the volume low when using the say command to prevent unexpected loud audio output.
:::

### How do I use say in MacOS?
To use the say command in MacOS, execute the following command:
```bash
say "Hello, World!"
```

### What are some common options with the say command in MacOS?
Some common options with the say command in MacOS include choosing the voice, setting the speech rate, and saving the output to a file.  
```bash
say -v Samantha "Would you like to play a game?"
```

### How can I make the say command in MacOS speak faster?
To make the say command speak faster in MacOS, you can adjust the speech rate using the `-r` flag.
```bash
say -r 300 "I speak really fast!"
```

### Can I choose a specific voice with the say command in MacOS?
Yes, you can choose a specific voice with the say command in MacOS using the `-v` flag.
```bash
say -v Alex "The weather today is sunny."
```

### How do I save the output of the say command in MacOS to a file?
You can save the output of the say command to a file in MacOS using the `-o` flag followed by the file path.
```bash
say -o output.txt "Saving this text to a file."
```

### Is there a way to make the say command in MacOS repeat the spoken text?
Yes, you can make the say command repeat the spoken text by using the `--interactive` flag.
```bash
say --interactive "Repeat after me."
```
## Applications of the say command

- Creating audio alerts
- Generating spoken feedback in scripts or automated processes
- Assisting users with visual impairments
- Creating audio reminders
- Adding voice output to applications or interfaces