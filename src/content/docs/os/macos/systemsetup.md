---
title: systemsetup command in MacOS
description: macOS systemsetup command allows users to manipulate system settings via the terminal. Learn how to configure network, time, sleep, and more.
---

The systemsetup command in MacOS is a powerful tool that allows users to manipulate various system settings directly through the terminal. With this command, you can configure network settings, set the time zone, enable or disable sleep options, and more. systemsetup offers a convenient way to manage system preferences without having to navigate through multiple menus. By utilizing the systemsetup command, users can streamline their workflow and efficiently customize their MacOS environment to suit their needs.

## systemsetup Syntax:
```bash
systemsetup [option] [parameter]
```

## MacOS systemsetup Options:
| Option | Description                       |
|--------|-----------------------------------|
| -setusingnetworktime | Enables or disables network time syncing |
| -settimezone | Set the time zone |
| -setnetworktimeserver | Set the network time server |
| -getusingnetworktime | Get the status of network time syncing |
| -gettimezone | Get the current time zone |
| -getnetworktimeserver | Get the network time server |

## systemsetup Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| on        | Enable the specified option       |
| off       | Disable the specified option      |
| Network Time Server (e.g., time.apple.com) | Specify the network time server |
| Timezone (e.g., "America/New_York") | Specify the time zone |

:::caution
Exercise caution when using the `systemsetup` command as it can alter critical system settings and affect system behavior if used incorrectly.
:::
## How to use systemsetup command:
### Set the Network Time Server
```bash
sudo systemsetup -setnetworktimeserver time.apple.com
```
Sets the network time server to time.apple.com.

### Get the Current Network Time Server
```bash
systemsetup -getnetworktimeserver
```
Displays the current network time server.

### Enable Remote Desktop
```bash
sudo systemsetup -setremotelogin on
```
Enables remote desktop access on the Mac.

### Check the Current Sleep Setting
```bash
systemsetup -getsleep
```
Displays the current sleep settings on the Mac.

### Set the Computer Sleep Time
```bash
sudo systemsetup -setcomputersleep 30
```
Sets the computer sleep time to 30 minutes.

### Enable Automatic Time Zone Detection
```bash
sudo systemsetup -setusingnetworktime on
```
Enables automatic time zone detection using network time.

### Set the Time Zone
```bash
sudo systemsetup -settimezone Asia/Tokyo
```
Sets the time zone to Asia/Tokyo.

### Turn on File Sharing
```bash
sudo systemsetup -setremotemanagement on
```
Enables file sharing by turning on remote management.
:::tip
When using the systemsetup command in MacOS, make sure to run it with sudo privileges to ensure that the changes are applied correctly.
:::

### How do I enable remote login in MacOS using systemsetup?
To enable remote login in MacOS using systemsetup, execute the following command:
```bash
sudo systemsetup -setremotelogin on
```

### How can I check the current sleep setting in MacOS with systemsetup?
To check the current sleep setting in MacOS using systemsetup, run the following command:
```bash
systemsetup -getcomputersleep
```

### How do I set the time server in MacOS using systemsetup?
To set the time server in MacOS using systemsetup, use the following command format:
```bash
sudo systemsetup -setnetworktimeserver <timeserver>
```

### How can I turn off the hard disk sleep in MacOS with systemsetup?
To turn off the hard disk sleep in MacOS using systemsetup, execute the following command:
```bash
sudo systemsetup -setharddisksleep off
```

### How do I check the current timezone setting in MacOS using systemsetup?
To check the current timezone setting in MacOS with systemsetup, run the following command:
```bash
systemsetup -gettimezone
```

### How can I set the computer name in MacOS using systemsetup?
To set the computer name in MacOS using systemsetup, use the following command format:
```bash
sudo systemsetup -setcomputername <newname>
```

### How do I enable automatic time and date settings in MacOS with systemsetup?
To enable automatic time and date settings in MacOS using systemsetup, execute the following command:
```bash
sudo systemsetup -setusingnetworktime on
```

### How can I check the current status of remote management using systemsetup?
To check the current status of remote management in MacOS with systemsetup, run the following command:
```bash
systemsetup -getremotelogin
```

### How do I set the current network location in MacOS using systemsetup?
To set the current network location in MacOS using systemsetup, use the following command format:
```bash
sudo systemsetup -setnetworklocation <location>
```

## Applications of the systemsetup command

- NetworkSetup
- TimeServerSetup
- Sleep
- StartupDisk
- NTP
- Language
- StartupModal
- Busy
- FirmwarePassword
- WaitBehavior