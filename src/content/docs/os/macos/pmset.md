---
title: pmset MacOS command
description: Optimize power management settings on your Mac with the pmset command.
---

The pmset command on MacOS allows users to view and modify power management settings. With pmset, users can optimize system performance, improve battery life, and customize sleep settings. This powerful command-line tool provides detailed control over how the Mac manages power, including setting sleep and wake schedules, adjusting display sleep times, and optimizing battery usage. By understanding and utilizing the pmset command effectively, users can tailor their Mac’s power settings to best suit their needs.

## pmset Syntax:
```bash
pmset [option] [parameter]
```

:::caution
Use caution when modifying power management settings with pmset command as incorrect settings may lead to unexpected behavior or performance issues.
:::

## pmset Options:
| Option | Description                                           |
|--------|-------------------------------------------------------|
| -g     | Display the current Power Management settings         |
| -b     | Set preferences for battery power                     |
| -c     | Set preferences for charging power                     |
| -u     | Save settings to be the default for all users         |
| -a     | Set preferences for both battery and charging power    |
| -s     | Save settings to be the default for the active power source |
| -batt  | Switch to settings for battery power                   |
| -ac    | Switch to settings for AC power                        |
| -a      | Apply settings to all power sources                   |
| -u      | Apply settings to the currently active settings       |
| -bact    | Switch to battery settings and apply them             |
| -reactive | Return the system to a default state                  |
| -gcustom | Show custom power management settings                 |
| -gups    | Show UPS settings                                     |
| -gassertions | Show power assertions                             |

## Parameters:
| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| sleep     | Set the system sleep timer value                  |
| displaysleep | Set the display sleep timer value                |
| disksleep | Set the hard disk sleep timer value               |
| womp      | Set the Wake On LAN value                         |
| ring      | Set the Wake On Modem value                       |
| autopoweroff | Set the autopoweroff delay time                  |
| autopoweroffdelay | Set the autopoweroff delay time in seconds     |
## pmset Command Usage Examples:

### Set the Display Sleep Timer to 15 Minutes
```bash
pmset displaysleep 15
```
Sets the display sleep timer to 15 minutes.

### Put the System into Sleep Mode
```bash
pmset sleepnow
```
Puts the system into sleep mode.

### Schedule a Sleep Timer for 10 Minutes
```bash
pmset sleep 10
```
Schedules a sleep timer for 10 minutes.

### Disable Sleep Mode
```bash
pmset -a disablesleep 1
```
Disables sleep mode for the system.

### Check Current Power Management Settings
```bash
pmset -g
```
Displays the current power management settings on the system.
:::tip
When using the pmset command in MacOS, make sure to carefully read the command options and values to ensure you are configuring the power management settings correctly for your system.
:::

### How do I use pmset in MacOS?
To use the pmset command in bash, execute the following command:
```bash
pmset --option <value>
```

### What are some common options for the pmset command in MacOS?
Common options for the pmset command include setting sleep preferences, modifying hibernation settings, and configuring power source behaviors.

### How can I view the current power management settings using pmset?
To view the current power management settings with pmset, you can execute the following command:
```bash
pmset -g
```

### How do I set the computer to never sleep using pmset in MacOS?
To set the computer to never sleep using the pmset command, use the following command:
```bash
pmset sleep 0
```

### Can I schedule a specific time for the computer to go to sleep using pmset?
Yes, you can schedule a specific time for the computer to go to sleep by using the following command format:
```bash
sudo pmset repeat shutdown HH:MM:SS
```

### How can I adjust the hibernation mode settings with pmset in MacOS?
To adjust the hibernation mode settings with pmset, you can use the following command:
```bash
sudo pmset hibernatemode <value>
```

### Is it possible to create custom sleep settings for different power sources using pmset?
Yes, you can create custom sleep settings for different power sources by using the "c" option followed by the power source identifier. For example:
```bash
pmset -c sleep 30
```

### How do I restore the default power management settings with pmset in MacOS?
To restore the default power management settings using pmset, you can execute the following command:
```bash
sudo pmset -a hibernate 1
```
## Applications of the pmset command

- Adjusting power management settings
- Displaying current power source and settings
- Managing battery health and charging behavior
- Setting preferences for sleep and power saving modes
- Configuring system behavior when on battery power vs. connected to AC power
- Monitoring power usage and optimizing battery life