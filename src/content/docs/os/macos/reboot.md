---
title: reboot MacOS Command Guide
description: Learn how to effectively reboot your MacOS using the command line. Find out the steps, options, and benefits of using this command.
---

To reboot your MacOS using the command line, you can use the "sudo shutdown -r now" command. This will immediately restart your system. The "-r" flag specifies that the system should be rebooted, and "now" indicates that the action should be taken immediately. This command can be useful in situations where you need to quickly restart your MacOS without using the graphical interface. Additionally, using the command line for rebooting can be helpful for troubleshooting purposes or if the graphical interface is not responding. Just make sure to save any important work before running this command to avoid losing any unsaved changes.
## reboot Syntax:
```bash
sudo shutdown -r now
```

## Options:
| Option      | Description                  |
|-------------|------------------------------|
| -r          | Reboots the system           |
| now         | Indicates the reboot should happen immediately |

## Parameters:
| Parameter   | Description                  |
|-------------|------------------------------|
| None        |                              |

:::caution
Use the reboot command with caution as it will immediately restart the system without any warning.
:::
## reboot Command Samples:
### Rebooting immediately
```bash
sudo reboot
```
Reboots the system immediately without any delay.
### Rebooting with a specified delay time
```bash
sudo reboot +5
```
Initiates a system reboot after a delay of 5 minutes.
### Force reboot without confirmation
```bash
sudo reboot -f
```
Forces the system to reboot without any confirmation prompts.
### Rebooting and sending a custom message
```bash
sudo reboot "System will restart now"
```
Reboots the system with a custom message displayed to users.
### Schedule a reboot at a specific time
```bash
sudo reboot 12:00
```
Schedules a system reboot at 12:00 (noon).
### Rebooting into a specific target
```bash
sudo reboot --target recovery
```
Initiates a reboot into a specific target, in this case "recovery mode".
### Displaying a help message for the reboot command
```bash
sudo reboot --help
```
Shows the help documentation for the reboot command with usage instructions.
:::tip
When using the reboot command in MacOS, make sure to save all your work and close any important applications before initiating the reboot process to avoid data loss.
:::

## reboot FAQ:
### How do I use reboot in MacOS?
To use the reboot command in MacOS, execute the following command:
```bash
reboot
```

### Can I schedule a delayed reboot in MacOS?
Yes, you can schedule a reboot after a specified delay by using the -d flag. The following command schedules a reboot 5 minutes after execution:
```bash
reboot -d 5
```

### How can I force a reboot in MacOS without confirmation?
To force a reboot without confirmation in MacOS, use the -f flag. Here is an example command:
```bash
reboot -f
```

### Is there a way to cancel a scheduled reboot in MacOS?
Yes, you can cancel a scheduled reboot by using the -c flag. Execute the following command to cancel the scheduled reboot:
```bash
reboot -c
```

### Can I specify a custom message to be displayed before rebooting in MacOS?
You can add a custom message to be displayed before the reboot by using the -N flag. Here's an example command with a custom message:
```bash
reboot -N "System will restart for maintenance"
```

### How can I reboot to a specific startup disk in MacOS?
To reboot to a specific startup disk in MacOS, use the -q flag followed by the disk identifier. Here is an example command to reboot to a disk named "Macintosh HD":
```bash
reboot -q Macintosh\ HD
```
## Applications of the reboot command

- Restarting the macOS operating system
- Applying system updates that require a reboot
- Troubleshooting software issues by performing a clean reboot
- Resetting the system to resolve errors or unresponsive behavior