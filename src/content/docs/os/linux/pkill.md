---
title: What is pkill Linux command?
description: Powerful tool to terminate processes in Linux based on name or other attributes.
---

The pkill command in Linux is a powerful tool used to terminate processes based on their name or other attributes. It provides a convenient way to stop processes without needing to know their ID, offering efficient management of system resources.

## pkill Syntax:
```bash
pkill [options] [pattern]
```
## pkill Options:
| Option            | Description                                                      |
|-------------------|------------------------------------------------------------------|
| -e, --exact       | Match the exact process name                                      |
| -f, --full        | Match against full argument lists                                 |
| -i, --ignore-case | Ignore case when matching                                         |
| -x, --pid          | Match the processes owned by the specified PIDs                  |
| -g, --pgroup      | Match the processes in the process group ID specified            |
| -s, --session     | Match the processes in the session ID specified                   |
| -u, --euid        | Match the processes with effective user ID specified             |
| -P, --parent      | Match the processes with the specified parent process ID         |

:::caution
Exercise caution when using pkill command, as it terminates processes based on the provided pattern which can cause data loss or other undesired effects if not used correctly.
:::

## Parameters:
| Parameter | Description                                  |
|-----------|----------------------------------------------|
| pattern   | The pattern to match the process to be killed|
## pkill Command Usage Examples:
### Kill a Process by Name
```bash
pkill firefox
```
Terminates all processes with the name "firefox".

### Kill a Process by PID
```bash
pkill -9 12345
```
Forcibly terminates the process with PID 12345.

### Kill a Process Group
```bash
pkill -g 54321
```
Terminates all processes in the process group with GID 54321.

### Kill Processes by Username
```bash
pkill -u username
```
Ends all processes owned by the user with the username "username".

### Kill Processes by Signal
```bash
pkill -SIGKILL chrome
```
Sends the SIGKILL signal to terminate all processes with the name "chrome".
:::tip
When using the pkill command in Linux, make sure to specify the correct options and values to target the processes you want to terminate. Be cautious when using the pkill command, as it can terminate multiple processes at once based on the specified criteria.
:::

{Questions}
## Applications of the pkill command

- Killing a process by name 
- Terminating multiple processes at once 
- Providing a more user-friendly alternative to the kill command