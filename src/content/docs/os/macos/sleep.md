---
title: sleep MacOS command
description: Learn how to use the MacOS sleep command to put your system to sleep from the terminal. Save power and extend the life of your device with this convenient feature.
---

The MacOS sleep command is a useful tool that allows you to put your system to sleep directly from the terminal. By using this command, you can easily save power and extend the life of your device. Simply navigate to the terminal and enter the sleep command to activate this feature. This can be especially helpful when you need to step away from your computer but want to ensure that it is not using unnecessary power. The MacOS sleep command is a simple yet effective way to manage your system's power usage and increase its longevity.

## sleep Syntax:
```bash
sleep seconds
```

## sleep Options:
| Option | Description                     |
|--------|---------------------------------|
|        |                                 |

:::caution
Be careful when using the sleep command with a large number of seconds, as it can lead to the system being unresponsive for the specified duration.
:::

## Parameters:
| Parameter | Description                                 |
|-----------|---------------------------------------------|
| seconds   | Specifies the number of seconds to sleep for |
## sleep Command Usage Examples:

### Delayed Shutdown
```bash
sleep 3600 && sudo shutdown now
```
Sets a delay of 3600 seconds (1 hour) before initiating a system shutdown.

### Scheduled Backup
```bash
sleep 600 && ./backup_script.sh
```
Delays the execution of a backup script for 10 minutes (600 seconds).

### Pause Before Screen Capture
```bash
sleep 5 && screencapture my_screenshot.jpg
```
Introduces a 5-second delay before capturing a screenshot named "my_screenshot.jpg".

### Wait for a Process to Finish
```bash
./long_running_process.sh & sleep 120 && echo "Process completed"
```
Initiates a long-running process in the background and then waits for 2 minutes before displaying a completion message.

### Temporarily Lock Screen
```bash
open "System Preferences" && sleep 30 && osascript -e 'tell application "System Events" to keystroke "q" using {command down}' && sleep 1 && osascript -e 'tell application "System Events" to keystroke "q" using {command down}'
```
Opens System Preferences, pauses for 30 seconds, and then closes the application to lock the screen temporarily.
:::tip
When using the sleep command in MacOS, make sure to specify the desired time interval in seconds for the system to sleep before resuming further commands. Take into consideration the specific requirements of your scripts or tasks to determine the appropriate duration for the sleep command.
:::

### How do I use sleep in MacOS?
To use the sleep command in bash, execute the following command:
```bash
sleep 5
```

### How can I make a process wait for a specific duration using sleep in MacOS?
To make a process wait for a specified duration using the sleep command in MacOS, you can do the following:
```bash
sleep 10
```

### What is the syntax for using sleep with fractions of a second in MacOS?
To use sleep with fractions of a second in MacOS, you can specify the time interval in decimals. Here's an example:
```bash
sleep 2.5
```

### How can I display a message after a certain delay using sleep in MacOS?
To display a message after a certain delay using the sleep command in MacOS, you can combine it with the echo command like this:
```bash
sleep 3 && echo "Delayed message"
```

### How do I make a script pause for a specific time period in MacOS using sleep?
To make a script pause for a specific time period in MacOS using the sleep command, you can include it in your script like this:
```bash
# Insert other commands here
sleep 7
```

### Can I use sleep to set up scheduled pauses in a bash script in MacOS?
Yes, you can use the sleep command to set up scheduled pauses in a bash script in MacOS. For example:
```bash
# Command 1
sleep 2
# Command 2
```

### How can I put my computer to sleep after a certain duration using the sleep command in MacOS?
To put your computer to sleep after a certain duration using the sleep command in MacOS, you can do the following:
```bash
sleep 3600 && pmset sleepnow
```

### Is there a way to run a command after a delay using sleep in MacOS?
Yes, you can run a command after a delay using the sleep command in MacOS. Just combine the sleep command with the desired command like this:
```bash
sleep 5 && <your_command_here>
```

## Applications of the sleep MacOS command

- Put the computer to sleep
- Delay a process for a specified amount of time
- Schedule tasks to run at a specific time
- Save power by putting the system into a low-power state