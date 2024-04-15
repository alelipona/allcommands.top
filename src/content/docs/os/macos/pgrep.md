---
title: pgrep MacOS command
description: Learn how to efficiently search and signal processes on MacOS using the pgrep command.
---

The MacOS pgrep command allows users to search for processes based on criteria and send signals to them. By entering specific options and arguments, users can narrow down their search and target specific processes for actions like termination or suspension. Understanding how to use pgrep effectively can help MacOS users manage their processes more efficiently and troubleshoot issues effectively.

## pgrep Syntax:
```bash
pgrep [options] pattern
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -a     | Show the process name as well as the PID|
| -f     | Match against full argument lists       |
| -l     | Show process name with PID              |
| -n     | Select only the newest (most recently started) process by the given name|
| -o     | Select only the oldest process by the given name|

## Parameters:
| Parameter  | Description                           |
|------------|---------------------------------------|
| pattern    | The pattern to search for in the process list| 

:::caution
Exercise caution when using the pgrep command as it can potentially affect running processes if not used properly.
:::
## pgrep bash Examples:
### Search for a Process by Name
```bash
pgrep Safari
```
Searches for the process ID of the "Safari" application.

### Display Process IDs of Multiple Instances
```bash
pgrep -l Terminal
```
Lists the process IDs of all instances of the "Terminal" application along with their names.

### Monitor Processes in Real-Time
```bash
watch pgrep Chrome
```
Continuously monitors the process ID of the "Chrome" application.

### Kill a Process by Name
```bash
pkill -9 Safari
```
Terminates all processes with the name "Safari".

### Search for a Process by User
```bash
pgrep -u root sshd
```
Finds the process ID of the "sshd" process running under the "root" user.

### Count the Number of Processes
```bash
pgrep -c Finder
```
Counts the total number of instances of the "Finder" process running.
:::tip
When using the pgrep command in MacOS, make sure to carefully read through the available options and understand their functionalities to effectively filter and identify processes.
:::

### How do I use pgrep in MacOS?
To use the pgrep command in MacOS, execute the following command:
```bash
pgrep terminal
```

### What is the purpose of the pgrep command in MacOS?
The pgrep command in MacOS is used to search for processes by name and other attributes.
```bash
pgrep -u root
```

### How can I search for a specific user's processes using pgrep in MacOS?
You can search for processes owned by a specific user by executing the following command:
```bash
pgrep -u username
```

### How do I list all processes matching a pattern with pgrep in MacOS?
To list all processes matching a specific pattern using pgrep in MacOS, use the following command:
```bash
pgrep -f pattern
```

### Can I use pgrep to search for processes by their full command line in MacOS?
Yes, you can search for processes by their full command line using the -f option with pgrep in MacOS.
```bash
pgrep -f "python script.py"
```

### How can I invert the match criteria with pgrep in MacOS?
To invert the match criteria and show processes that do not match the specified pattern, use the -v option with pgrep in MacOS.
```bash
pgrep -v process_name
```

### Is there a way to display the process ID and process name using pgrep in MacOS?
Yes, you can display the process ID and process name by using the -l option with pgrep in MacOS.
```bash
pgrep -l process_name
```

### How can I restrict the pgrep command to only search for exact process names in MacOS?
To search for exact process names without any partial matches, use the -x option with pgrep in MacOS.
```bash
pgrep -x process_name
```

## Applications of the pgrep command

- List all processes with the name "firefox": `pgrep firefox`
- List the process IDs of all instances of "python": `pgrep python`
- Check if a specific process is running, e.g., a process with ID 1234: `pgrep -q 1234`