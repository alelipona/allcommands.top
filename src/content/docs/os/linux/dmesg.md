---
title: dmesg Linux Command Guide
description: Learn about the Linux dmesg command, its usage, and options for viewing and managing kernel ring buffer messages.
---

The dmesg command in Linux is used to display kernel ring buffer messages. It can help diagnose hardware issues, view system boot messages, and troubleshoot system problems. By default, dmesg shows the most recent kernel messages. With various options, users can filter messages, display timestamps, and more.

## dmesg Syntax:
```bash
dmesg [options]
```
## Options:
| Option | Description |
|--------|-------------|
| -c     | Clear the ring buffer after printing. |
| -s     | Set the buffer size for the kernel log. |
| -l     | Restrict output to the given log level. |
| -n     | Set the level of messages shown. |
| -H     | Human-readable output. |
| -T     | Include timestamps in the output. |
| -D     | Show timestamps in readable format. |
| -x     | Show hexadecimal and ASCII representation of the message buffer. |
| -w     | Wait for new messages to appear. |
| -d     | Show all kernel messages. |
| --color | Colorize the output. |

## Parameters:
There are no specific parameters for the dmesg command.

:::caution
Exercise caution when using the `dmesg` command as it provides access to a significant amount of information from the kernel ring buffer. Be cautious when investigating this data, as it can contain sensitive information about system events and potential errors.
:::
## dmesg Command Samples:
### Display the most recent kernel messages
```bash
dmesg
```
This command displays the most recent kernel messages.

### Display kernel messages with a timestamp
```bash
dmesg -T
```
Shows kernel messages with human-readable timestamps.

### Show only kernel messages related to the memory
```bash
dmesg | grep memory
```
Filters the kernel messages to display only those related to memory.

### Display messages of a specific log level
```bash
dmesg -l err
```
Shows kernel messages with a certain log level, in this case "error" messages.

### Save kernel messages to a file
```bash
dmesg > kernel_messages.txt
```
Redirects the kernel messages output to a file named "kernel_messages.txt".

### Watch kernel messages in real-time
```bash
dmesg --follow
```
Allows watching kernel messages in real-time as they are generated.

### Show the number of kernel messages
```bash
dmesg -c | wc -l
```
Counts and displays the number of kernel messages currently in the buffer.
:::tip
Remember to use the `dmesg` command with appropriate options to filter and search for specific information in the kernel message logs.
:::

## dmesg FAQ:
### How do I use dmesg in Linux?
To use the dmesg command in Linux, execute the following command:
```bash
dmesg
```

### How can I display the last 20 lines of kernel messages using dmesg?
To display the last 20 lines of kernel messages in Linux with dmesg, use the following command:
```bash
dmesg | tail -n 20
```

### How can I search for specific keywords in kernel messages using dmesg?
To search for specific keywords in kernel messages using dmesg in Linux, you can use the grep command along with dmesg. For example:
```bash
dmesg | grep "usb"
```

### How can I clear the kernel ring buffer using dmesg?
To clear the kernel ring buffer in Linux using dmesg, use the following command:
```bash
sudo dmesg -c
```

### How can I view kernel messages in real-time using dmesg?
To view kernel messages in real-time in Linux using dmesg, you can use the `-w` option. Execute the following command:
```bash
dmesg -w
```

### How can I save kernel messages to a file with timestamps using dmesg?
To save kernel messages to a file with timestamps in Linux using dmesg, you can use the `--ctime` option along with redirection. Here's an example:
```bash
dmesg --ctime > kernel_logs.txt
```

## Applications of the dmesg command

- Display kernel ring buffer messages
- Troubleshoot hardware and driver issues
- Check for system initialization errors
- View system boot messages
- Debug device detection and driver loading issues