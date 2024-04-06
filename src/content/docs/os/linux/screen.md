---
title: screen Linux command
description: Learn how to use the Linux screen command to manage multiple terminal sessions efficiently.
---

The Linux screen command is a powerful tool that allows users to create, manage, and multiplex multiple terminal sessions within a single window. With screen, you can detach from a session, letting it run in the background, and reattach to it later. This feature is particularly useful when working on tasks that require extended periods of time or when you need to switch between different tasks quickly. Additionally, screen supports splitting windows, session sharing, and session logging, making it a valuable tool for system administrators and power users alike. Whether you are a novice or an experienced user, mastering the Linux screen command can greatly enhance your productivity and efficiency in the terminal.
## screen Syntax:
```bash
screen [options] [commands]
```
## Options:
| Option         | Description                           |
|----------------|---------------------------------------|
| -a             | Adapt the sizes of all windows to the size of the current terminal |
| -A             | Adapt the sizes of all windows to the size of the current terminal or screen screen size |
| -d             | Detach the elsewhere running screen (and reattach here) |
| -D             | Detach and logout        |
| -m             | Ignore the $STY variable and create a new screen session |
| -r             | Reattach to a detached screen process |
| -R             | Reattach if possible, otherwise start a new session |
| -s             | When creating a new session, specify a session name |
| -S             | Specify a session name              |
| -x             | Attach to a not detached screen. Multi display only                  |

## Parameters:
| Parameter      | Description                           |
|----------------|---------------------------------------|
| commands       | Specify one or more commands to run in the screen session | 

:::caution
Exercise caution when using the screen command as detaching and reattaching can lead to unexpected behavior if not used correctly.
:::
## screen bash Examples:
### Create a New Screen Session
```bash
screen -S mysession
```
Creates a new screen session named "mysession".

### List all Screen Sessions
```bash
screen -ls
```
Lists all the active screen sessions.

### Resume a Detached Session
```bash
screen -r mysession
```
Resumes the detached screen session named "mysession".

### Detach from a Screen Session
```bash
Ctrl + a, d
```
Detaches from the currently active screen session.

### Scroll in a Screen Session
```bash
Ctrl + a, [
```
Enables scroll mode to view the screen session history.

### Send a Command to a Screen Session
```bash
screen -S mysession -X stuff 'ls\n'
```
Sends the command "ls" to the screen session named "mysession".
:::tip
To detach from a screen session, press `Ctrl + A` followed by `d`. To reattach to a detached session, use the command `screen -r`.
:::
## screen Command Help Center:

### How do I start a new screen session in Linux?
To start a new screen session in Linux, execute the following command:
```bash
screen
```

### How do I list all screen sessions in Linux?
To list all screen sessions in Linux, execute the following command:
```bash
screen -ls
```

### How do I attach to a detached screen session in Linux?
To attach to a detached screen session in Linux, execute the following command:
```bash
screen -r
```

### How do I detach from a screen session in Linux?
To detach from a screen session in Linux, press `Ctrl + A` followed by `d`.

### How do I create a named screen session in Linux?
To create a named screen session in Linux, execute the following command:
```bash
screen -S session_name
```

### How do I switch between windows in screen in Linux?
To switch between windows in screen in Linux, press `Ctrl + A` followed by the window number.

### How do I split the screen in screen command in Linux?
To split the screen horizontally in the screen command, press `Ctrl + A` followed by `S`. To split vertically, press `Ctrl + A` followed by `|`.

### How do I close a window in screen in Linux?
To close a window in screen in Linux, simply exit the application running in that window.
## Applications of the screen command

- Run multiple terminal sessions within a single SSH session
- Keep processes running even after logging out of a remote session
- Share a session with collaborators for pair programming
- Manage multiple serial console connections
- Use as a terminal multiplexer for organizing and controlling multiple terminal windows