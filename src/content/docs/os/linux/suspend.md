---
title: suspend command in Linux
description: Learn how to use the Linux suspend command to pause system activity and save power. Find out the syntax, options, and practical examples.
---

The Linux suspend command is used to pause system activity, allowing the computer to enter a low-power state while keeping its current state intact. This can be useful for saving power on laptops or desktops when not in use. By suspending the system, users can quickly resume their work without having to shut down and restart the computer. The command can be executed from the terminal and typically requires administrative privileges to function properly.
## suspend Syntax:
```bash
systemctl suspend
```

## Linux suspend Options:
| Option | Description                 |
|--------|-----------------------------|
| None   | There are no options for the `suspend` command. |

## suspend Parameters:
| Parameter  | Description                              |
|------------|------------------------------------------|
| None       | There are no parameters for the `suspend` command. |

:::caution
Using the `systemctl suspend` command will put the system into a suspend state, which may cause all work to be lost if not saved. Ensure all important data is saved before using this command.
:::

## How to use suspend command:
### Suspend the system
```bash
sudo systemctl suspend
```
Suspends the system, putting it into a low power state.

### Suspend with system sleep command
```bash
systemctl suspend
```
Puts the system into a suspended state using the "systemctl" command.

### Suspend using pm-suspend command
```bash
sudo pm-suspend
```
Suspend the system using the "pm-suspend" command.

### Suspend with hibernate option
```bash
sudo pm-suspend-hybrid
```
Suspends the system in a way that allows for a faster wake-up time compared to a full hibernation.

### Suspend and lock screen
```bash
gnome-screensaver-command -l && systemctl suspend
```
Locks the screen before suspending the system.

### Suspend without sudo
```bash
dbus-send --system --print-reply --dest="org.freedesktop.UPower" /org/freedesktop/UPower org.freedesktop.UPower.Suspend
```
Suspend the system without using "sudo".

### Suspend and set a wake-up timer
```bash
echo '0' | sudo tee /sys/class/rtc/rtc0/wakealarm && sudo sh -c echo `date '+%s' -d '+ 360 minutes'` > /sys/class/rtc/rtc0/wakealarm && sudo systemctl suspend
```
Sets a wake-up timer before suspending the system.

### Suspend and shutdown after a specific time
```bash
echo 'Shutdown in 30 minutes' | sudo tee /etc/systemd/system/shutdownmessage && sudo echo -e '[Unit]\nDescription=Shutdown in 30 minutes\n[Service]\nType=oneshot\nExecStart=/bin/sh -c "/sbin/shutdown now"\n[Install]\nWantedBy=multi-user.target' | sudo tee /etc/systemd/system/shutdownin30min.service && sudo systemctl enable shutdownin30min && sudo systemctl start shutdownin30min && sudo systemctl suspend
```
Sets the system to suspend and shutdown after a specific time duration.
:::tip
When suspending a process in Linux using the `suspend` command, make sure to check the status of the process afterwards to ensure it resumes correctly.
:::

### How do I use suspend in Linux?
To use the suspend command in Linux, execute the following command:
```bash
suspend --option <value>
```

### What are the options available for the suspend command in bash?
The suspend command in bash supports various options. One common option is to suspend a process by its process ID (PID). Here is an example of how to suspend a process by PID:
```bash
suspend -p <PID>
```

### Can I suspend multiple processes simultaneously with the suspend command?
Yes, you can suspend multiple processes simultaneously using the suspend command in bash. To suspend multiple processes, you can specify multiple PIDs separated by spaces. Here is an example of how to suspend multiple processes by their PIDs:
```bash
suspend -p <PID1> <PID2> <PID3>
```

### How can I resume a suspended process using the suspend command?
To resume a suspended process using the suspend command, you can use the `-r` option followed by the PID of the process you want to resume. Here is an example of how to resume a suspended process by PID:
```bash
suspend -r <PID>
```

### Is it possible to suspend a process by its name using the suspend command in Linux?
Yes, you can suspend a process by its name using the `suspend` command in Linux. To suspend a process by its name, you can use the `-n` option followed by the process name. Here is an example of how to suspend a process by name:
```bash
suspend -n <process_name>
```

### How can I list all the processes that are currently suspended using the suspend command?
To list all the processes that are currently suspended using the suspend command, you can use the `-l` option. This will display a list of all suspended processes along with their PIDs. Here is an example of how to list all suspended processes:
```bash
suspend -l
```

### Can I specify a custom signal to send to a process when suspending it with the suspend command?
Yes, you can specify a custom signal to send to a process when suspending it using the suspend command. You can use the `-s` option followed by the signal number or name. Here is an example of how to send a custom signal to suspend a process:
```bash
suspend -s <signal> <PID>
```

### How do I suspend a process and prevent it from being terminated upon resuming?
You can suspend a process and prevent it from being terminated upon resuming by using the `-k` option in the suspend command. This will keep the process alive even after resuming. Here is an example of how to suspend a process without termination:
```bash
suspend -k <PID>
```

## Applications of the suspend command

- To suspend the system and put it into a low power state
- To save power consumption on portable devices
- To easily and quickly switch the system to a sleep mode
- To allow for quick resumption of the system from the suspended state