---
title: shutdown MacOS Command Guide
description: Learn how to use the MacOS shutdown command efficiently. Discover different options and methods for shutting down your Mac system seamlessly.
---

To shut down your MacOS system, you can use the "shutdown" command in the Terminal. This command allows you to specify when to shut down, restart, or sleep your Mac, as well as send notifications to users. By using various options such as -h, -r, and -s, you can customize the shutdown behavior to meet your needs. Additionally, the "shutdown" command provides a countdown timer, giving you time to save your work before the system powers off. Mastering the shutdown command can help you manage your Mac's power efficiently and effectively.

## shutdown Syntax:
```bash
shutdown [option] [time] [message]
```

## Options:
| Option | Description                |
|--------|----------------------------|
| -r     | Restart the system         |
| -h     | Halt the system (shut down)|
| -s     | Sleep the system           |
| -h now | Shut down the system immediately |
| -r now | Restart the system immediately   |

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| time      | Specifies the time when the shutdown will occur  |
| message   | Specifies a message to be displayed to users     |

:::caution
Exercise caution when using the shutdown command as it will forcibly shut down the system. Make sure to save all important work before initiating a shutdown.
:::
## shutdown Command Samples:
### Shutdown Immediately
```bash
sudo shutdown -h now
```
Shuts down the system immediately.

### Shutdown in 30 minutes
```bash
sudo shutdown -h +30
```
Schedules a shutdown to occur in 30 minutes.

### Shutdown at a Specific Time
```bash
sudo shutdown -h 22:00
```
Schedules a shutdown to occur at 10:00 PM.

### Cancel a Scheduled Shutdown
```bash
sudo shutdown -c
```
Cancels a previously scheduled shutdown.

### Reboot Immediately
```bash
sudo shutdown -r now
```
Reboots the system immediately.

### Reboot at a Specific Time
```bash
sudo shutdown -r 07:30
```
Schedules a reboot to occur at 07:30 AM.

### Log Out All Users and Restart
```bash
sudo shutdown -r +1
```
Logs out all users and restarts the system after 1 minute.
:::tip
When using the shutdown command in MacOS, make sure to carefully choose the appropriate option to avoid unexpected consequences. Always check the manual or help section of the shutdown command for detailed information on available options and their meanings.
:::

## shutdown FAQ:
### How do I use shutdown in MacOS?
To use the shutdown command in MacOS, execute the following command:
```bash
shutdown --option <value>
```

### What are some common options for the shutdown command in MacOS?
Some common options for the shutdown command in MacOS include:
```bash
shutdown -h      # Halt the system
shutdown -r      # Restart the system
shutdown -s      # Put the system to sleep
```

### How can I schedule a shutdown for a specific time in MacOS?
To schedule a shutdown for a specific time in MacOS, use the following command with the desired time:
```bash
shutdown -h 20:00      # Shutdown the system at 8:00 PM
```

### Can I cancel a scheduled shutdown in MacOS?
Yes, you can cancel a scheduled shutdown by using the following command:
```bash
shutdown -c      # Cancel the scheduled shutdown
```

### How can I add a custom message when scheduling a shutdown in MacOS?
To add a custom message when scheduling a shutdown in MacOS, use the following command with the desired message:
```bash
shutdown -h +10 "System will shutdown in 10 minutes for maintenance"
```

### Is there a way to force immediate shutdown in MacOS?
Yes, you can force an immediate shutdown in MacOS by using the following command:
```bash
shutdown -h now      # Force an immediate shutdown
```

## Applications of the shutdown command

- Shutting down the macOS system
- Restarting the macOS system
- Putting the macOS system to sleep
- Hibernating the macOS system