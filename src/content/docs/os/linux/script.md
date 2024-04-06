---
title: script Linux command
description: Learn how to use the script command in Linux to record all the activities in a terminal session. 
---

The Linux script command is used to record all activities in a terminal session. It captures both input and output, including error messages. This can be useful for troubleshooting, auditing, or training purposes. The recorded session is saved in a file that can be reviewed later. The script command can be invoked with various options to customize the recording behavior. It is a handy tool for tracking changes made during a session and can help in recreating sequences of commands.
## script Syntax:
```bash
grep [options] [pattern] [file]
```
## Options:
| Option              | Description                    |
|---------------------|--------------------------------|
| -i, --ignore-case   | Ignore case distinctions        |
| -v, --invert-match  | Invert the sense of matching    |
| -n, --line-number   | Prefix each line with line number|
| -c, --count         | Suppress normal output; instead print a count of matching lines |
| -r, --recursive     | Read all files under each directory, recursively |
| -w, --word-regexp   | Select only those lines containing matches that form whole words |
| -l, --files-with-matches | Suppress normal output; instead print the name of each input file from which output would normally have been printed |
| -h, --no-filename   | Suppress the prefixing of filenames on output |
| -q, --quiet         | Quiet; do not write anything to standard output. Exit immediately with zero status if any match is found, even if an error was detected |
| -E, --extended-regexp | Interpret pattern as an extended regular expression |

## Parameters:
| Parameter | Description            |
|-----------|------------------------|
| pattern   | The pattern to search for in the file(s) |
| file      | The file or files to search for the pattern in | 

:::caution
Exercise caution when using the grep command. Ensure that the specified pattern and file(s) are correct to avoid unintended outcomes.
:::
## script bash Examples:
### Record a Shell Session
```bash
script session.log
```
Starts recording a shell session and saves the output to a file named "session.log".

### Record a Shell Session with Time Stamps
```bash
script -t 2>session_timing.log session.log
```
Records a shell session with defined timestamps and saves the output to "session.log" while timestamps are saved to "session_timing.log".

### Exit the Script Session
```bash
exit
```
Stops recording a shell session started with the "script" command.

### Append Output to an Existing File
```bash
script -a session.log
```
Appends the output of a new shell session to an existing file named "session.log".

### Output to a Custom File
```bash
script custom_session.log
```
Records a shell session and saves the output to a custom file named "custom_session.log".

### Start Script in a New Pseudo-Terminal
```bash
script -f session.log
```
Starts recording a shell session in a new pseudo-terminal and saves the output to "session.log".
:::tip
When using the script command in Linux, make sure to specify the desired options and filename for the output. This will help you capture the terminal session effectively for debugging, reviewing commands, or sharing with others.
:::

## script Command Help Center:

### How do I use script in Linux?
To use the script command in Linux, execute the following command:
```bash
script --option <value>
```

### How can I save the output of a script command to a specific file?
To save the output of a script command to a specific file, use the following command:
```bash
script -a output.log
```

### How do I include timestamps in the output of a script session?
To include timestamps in the output of a script session, you can use the following command:
```bash
script -t 2>output_with_timestamps.log
```

### How can I start a script session with a custom shell?
To start a script session with a custom shell, you can specify it in the command like this:
```bash
script -c "bash --norc" output_custom_shell.log
```

### How do I append the output of a script session to an existing file?
To append the output of a script session to an existing file, you can use the following command:
```bash
script -a existing_output.log
```

### How can I log the entire script session, including all input and output?
To log the entire script session, including all input and output, you can use the following command:
```bash
script -f full_session.log
```

### How do I specify the maximum time for a script session to run?
To specify the maximum time for a script session to run, you can use the following command:
```bash
script -c "timeout 10s bash" output_timeout.log
```

### How can I disable the echoing of commands in the output of a script session?
To disable the echoing of commands in the output of a script session, you can use the following command:
```bash
script -q output_no_echo.log
```
## Applications of the script command

- Recording terminal sessions
- Creating logs of terminal commands and outputs
- Troubleshooting and debugging sessions
- Reproducing and sharing command sequences
- Monitoring and reviewing user interactions with the terminal