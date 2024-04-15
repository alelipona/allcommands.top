---
title: suspend MacOS Command Guide
description: Learn how to use the MacOS suspend command efficiently. Discover its syntax, options, and practical examples in this comprehensive guide.
---

The MacOS suspend command allows users to suspend the system, putting it into a low power mode while preserving the current state of all running processes. This can be useful when you need to step away from your computer but want to quickly resume your work without having to shut down and restart. The syntax for the suspend command is simple, requiring only the command itself to be entered into the terminal. Additionally, there are no additional options or flags available for this command. Simply type "sudo pmset sleepnow" into the terminal and hit enter to suspend your MacOS system.

## suspend Syntax:
```bash
pmset sleepnow
```
## Options:
| Option     | Description                        |
|------------|------------------------------------|
| None       | No options available for this command. |

## Parameters:
| Parameter  | Description                              |
|------------|------------------------------------------|
| None       | No parameters available for this command. |

:::caution
Using the suspend command will immediately put your Mac to sleep. Make sure to save any unsaved work before running this command.
:::
## suspend Command Samples:
### Suspend the System Immediately
```bash
sudo pmset sleepnow
```
Suspends the system immediately.
### Suspend the System in 10 minutes
```bash
sudo pmset sleepnow -m 10
```
Suspends the system in 10 minutes.
### Suspend the System at a Specific Time
```bash
sudo pmset schedule sleep "09/01/2023 12:00:00"
```
Schedules the system to suspend at a specific date and time.
### Suspend the System After a Certain Time of Inactivity
```bash
sudo pmset noidle
```
Suspends the system after a certain time of inactivity.
### Suspend and Power off the System
```bash
sudo pmset shutdown
```
Suspends and powers off the system.
### Suspend the System and Wake Up on Power Button Press
```bash
sudo pmset powerbutton 1
```
Suspends the system and configures it to wake up on a power button press.
### Suspend the System and Wake Up Automatically
```bash
sudo pmset womp 1
```
Suspends the system and configures it to wake up automatically.
:::tip
Ensure you have the necessary permissions to run the suspend command in MacOS, as it may require administrative privileges for certain operations.
:::

### How do I use suspend in MacOS?
To use the suspend command in MacOS, execute the following command:
```bash
suspend --option <value>
```

### What are some common options used with the suspend command in MacOS?
The suspend command in MacOS supports various options to customize its behavior. Some common options include:
```bash
suspend --option1
suspend --option2
suspend --option3
```

### How can I resume a suspended process in MacOS using the suspend command?
To resume a previously suspended process in MacOS, you can use the `fg` command followed by the process ID. For example:
```bash
fg %1
```

### Can I suspend multiple processes simultaneously in MacOS using the suspend command?
Yes, you can suspend multiple processes simultaneously in MacOS using the suspend command by specifying the process IDs. For example:
```bash
suspend <PID1> <PID2> <PID3>
```

### Is there a way to view a list of currently suspended processes in MacOS?
You can view a list of currently suspended processes in MacOS by using the `jobs` command. This will display the status of all background jobs, including those that are suspended. For example:
```bash
jobs
```

### How can I permanently kill a suspended process in MacOS?
To permanently kill a suspended process in MacOS, you can use the `kill` command along with the appropriate signal. For example, to forcefully terminate a suspended process with PID 1234, you can use:
```bash
kill -9 1234
```
## Applications of the suspend command

1. To quickly pause and resume activities on the Mac
2. To conserve battery power by putting the Mac into a low-power state
3. To temporarily halt operations without fully shutting down the Mac
4. To quickly switch users or accounts on the same Mac without closing any applications
5. To prevent unauthorized access to the Mac by putting it in a sleep-like state