---
title: What is tty Linux command?
description: Learn how to use the Linux tty command to display the file name of the terminal connected to standard input.
---

The Linux tty command shows the file name of the terminal connected to standard input. It can display the file name of the terminal you are currently using.

## tty Syntax:
```bash
tty [option]
```

## tty Options:

| Option | Description |
| ------ | ----------- |
| -s     | Silent mode. Prints nothing, only returns an exit status. |
| --help | Display help information. |

:::caution
Caution: Be careful when using the tty command as it prints the file name of the terminal connected to standard input. Using it incorrectly or with incorrect options can lead to unexpected results.
:::

## Parameters:
| Parameter | Description |
| --------- | ----------- |
| None      | The tty command does not require any parameters. |
## tty Command Usage Examples:
### Check the current tty
```bash
tty
```
This command displays the file name of the terminal connected to standard input.

### Switch to a specific tty
```bash
sudo chvt 2
```
This command switches to tty2 where you can access a different virtual terminal.

### Display the current console settings
```bash
stty -a
```
This command shows all the current settings of the terminal.

### Open a new tty
```bash
sudo openvt
```
This command opens a new virtual terminal.

### Redirect output to a specific tty
```bash
echo "Hello, World!" > /dev/tty3
```
This command sends the "Hello, World!" message to tty3 for output.
:::tip
When using the tty command in Linux, remember that it displays the file name of the terminal connected to standard input. This can be useful for troubleshooting or scripting purposes.
:::

### How do I check the terminal device associated with input?
To check the terminal device associated with input in Linux, use the following command:
```bash
tty
```

### How can I find the full path of the terminal device?
To find the full path of the terminal device in Linux, you can use the following command:
```bash
tty -s
```

### How do I use tty to determine if a script is being run in an interactive shell?
To determine if a script is being run in an interactive shell using bash and tty, you can use the following command:
```bash
[ -t 0 ] && echo "Interactive" || echo "Not Interactive"
```

### How can I check if a file descriptor is associated with a terminal device?
To check if a file descriptor is associated with a terminal device in Linux using tty, you can run the following command:
```bash
tty -s <file_descriptor>
```

### How to list all open terminals in Linux using tty command?
To list all open terminals in Linux with the tty command, you can execute the following:
```bash
ps -ef | grep -v grep | grep pts
```

### How do I redirect output to a specific terminal device using tty in Linux?
To redirect output to a specific terminal device in Linux with the tty command, you can use the following syntax:
```bash
echo "Hello, world!" > $(tty)
```

### How can I get the terminal device for standard error in bash using tty?
To get the terminal device for standard error in bash with tty, you can enter the following command:
```bash
tty <&2
```

### How to get the device number and file name of the connected terminal?
To get the device number and file name of the connected terminal in Linux using tty, run the following command:
```bash
stat -c "%t %n" $(tty)
```
## Applications of the tty command

- Checking the file name of the terminal connected to standard input.
- Determining the file name of the terminal connected to standard output.
- Redirecting the standard output to a specific terminal device.
- Monitoring the terminal device being used by a specific process.