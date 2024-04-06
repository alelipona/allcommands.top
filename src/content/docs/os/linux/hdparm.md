---
title: What is hdparm Linux command?
description: Control and monitor hard disk drive (HDD) operations with the hdparm command in Linux. 
---

The hdparm command in Linux is used to control and monitor hard disk drive (HDD) operations. It allows users to view and modify various parameters and settings of the HDD, such as enabling or disabling features like power management and write caching. By utilizing hdparm, users can optimize the performance and functionality of their hard drives within a Linux system.

## hdparm Syntax:
```bash
hdparm [options] [device]
```

## hdparm Options:
| Option | Description |
| ------ | ----------- |
| -a     | Get/set sectors to transfer |
| -A     | Enable/disable IDE features |
| -b     | Set bus state |
| -B     | Set Advanced Power Management feature |
| -c     | Enable/disable 32-bit I/O support |
| -C     | Check IDE power mode |
| -d     | Enable/disable using_dma |
| -D     | Set drive read-lookahead flag (usually ON) |
| -e     | Set cd-rom speed |
| -f     | Flush disk cache |
| -F     | Flush buffer cache for device on SCSI devices |
| -g     | Display drive geometry |
| -h     | Display terse usage information |
| -H     | read temperature from drive |
| -I     | Display detailed current IDE info |
| -k     | Get/set keep_settings_over_reset flag (0/1) |
| -K     | Set drive keep features over reset (0/1) |
| -L     | Lock device door |
| -m     | Get/set multiple sector count |
| -M     | Get/set automatic acoustic management (0-254, 128: quiet, 254: performance) |
| -n     | Get/set ignore write errors flag |
| -N     | Get/set max visible number of sectors |
| -p     | Set PIO mode on IDE interface lines |
| -P     | Set drive prefetch count |
| -q     | Change the rx/tx queues in `IDE driver` or stand-alone Control FSW`s |
| -Q     | Set SATA NCQ mode (on|off) |
| -r     | Get/set device readonly flag |
| -R     | Register an Applications Power Management (APM) level |
| -s     | Save configuration for device |
| -S     | Set standby (spindown) timeout |
| -T     | Perform device read timings |
| -u     | Get/set interrupt-unmask flag |
| -U     | Disable/enable the UPS feature |
| -v     | Display minor version number |
| -V     | Display identify information, serial number |
| -w     | Get timing for IDE taskfile resets |
| -W     | Perform device reset (DANGEROUS) |
| -x     | Perform low-level formatting on device |
| -X     | Set IDE xfer mode (DANGEROUS) |
| -y     | Force an IDE drive to immediately enter the low power consumption standby mode |
| -Y     | Force an IDE drive to enter the working power mode |

## Parameters:
| Parameter | Description |
| --------- | ----------- |
| device    | The device to perform actions on, like `/dev/sda` or `/dev/hda` |

## hdparm Command Usage Examples:
### Display Information about a Specific Drive
```bash
hdparm -I /dev/sda
```
This command displays detailed information about the drive /dev/sda

### Measure Disk Read Speed
```bash
hdparm -t /dev/sda
```
This command measures the buffer read speed of the disk /dev/sda

### Change Advanced Power Management Feature 
```bash
hdparm -B 128 /dev/sda
```
This command sets the Advanced Power Management feature on the disk /dev/sda to a value of 128

### Disable Automatic Acoustic Management
```bash
hdparm -M 253 /dev/sda
```
This command disables Automatic Acoustic Management on the disk /dev/sda by setting it to 253

### Secure Erase a Disk
```bash
hdparm --security-set-pass mypassword /dev/sda
hdparm --security-erase mypassword /dev/sda
```
This pair of commands sets a password "mypassword" and performs a secure erase on the disk /dev/sda
:::tip
When using the hdparm command in Linux, make sure to carefully review the available options and their descriptions in the command's manual (man page) to ensure proper and safe usage.
:::

### How do I set the spin-down timeout for a hard disk using hdparm in Linux?
To set the spin-down timeout for a hard disk in Linux using hdparm, execute the following command:
```bash
hdparm -S <value> /dev/sdX
```

### How can I check the current advanced power management setting of a disk with hdparm in Linux?
To check the current advanced power management setting of a disk in Linux using hdparm, use the following command:
```bash
hdparm -B /dev/sdX
```

### How do I enable write-caching on a hard disk using hdparm in Linux?
To enable write-caching on a hard disk in Linux with hdparm, run the following command:
```bash
hdparm -W1 /dev/sdX
```

### How can I get information about a hard disk's capabilities using hdparm in Linux?
To retrieve information about a hard disk's capabilities in Linux with hdparm, run the following command:
```bash
hdparm -I /dev/sdX
```

### How do I disable read-ahead buffering on a disk using hdparm in Linux?
To disable read-ahead buffering on a disk in Linux using hdparm, execute the following command:
```bash
hdparm -a0 /dev/sdX
```

### How can I perform a secure erase on a disk using hdparm in Linux?
To perform a secure erase on a disk in Linux using hdparm, run the following command (Note: this operation irreversibly erases all data on the disk):
```bash
hdparm --security-erase NULL /dev/sdX
```

### How do I display the usage information for hdparm in Linux?
To display the usage information for hdparm in Linux, simply run the command with the `--help` option:
```bash
hdparm --help
```

### How can I run a read speed test on a disk using hdparm in Linux?
To perform a read speed test on a disk in Linux using hdparm, use the following command:
```bash
hdparm -t /dev/sdX
```

## Applications of the hdparm command

- Displaying information about a hard disk
- Checking disk capabilities and features
- Testing disk performance
- Changing disk settings
- Improving disk performance
- Setting Advanced Power Management (APM) levels
- Setting DMA mode
- Enabling or disabling read/write caching
- Using Secure Erase functionality
- Benchmarking disk performance