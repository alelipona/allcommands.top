---
title: Linux renice command
description: Adjust the priority of running processes in Linux with the renice command. Learn how to change the CPU priority of processes in your system.
---

The renice command in Linux allows users to adjust the priority of running processes. By changing the CPU priority of processes, users can allocate resources more efficiently, ensuring that critical programs receive the necessary attention. This command can help improve system performance by managing the execution priority of different tasks. Users can specify the priority level for a process, with lower values indicating higher priority. Additionally, users can only adjust the priority of processes they own. By using the renice command, users can optimize resource allocation on their Linux system.

## renice Syntax:
```bash
renice [option] [priority] -p [process_id]
```
## Options:
| Option | Description                |
|--------|----------------------------|
| -n     | Define the new priority    |
| -g     | Apply to process group ID   |
| -p     | Apply to process ID        |
| -u     | Apply to user ID           |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| priority  | New priority value (range: -20 to 19)  |
| process_id| ID of the process to renice             |

:::caution
Make sure to use caution when adjusting process priorities using `renice`, as changing the priority of processes can impact system performance and stability.
:::
## renice Usage:
### Increase the Priority of a Running Process
```bash
renice -n -5 -p 12345
```
This example increases the priority of a process with PID 12345 to -5.

### Decrease the Priority of a Running Process
```bash
renice +2 -p 6789
```
This example decreases the priority of a process with PID 6789 by 2.

### Change the Priority of a Process Group
```bash
renice -n 10 -g 1234
```
This command changes the priority of all processes in the group with GID 1234 to 10.

### List Current Priority of Processes
```bash
renice -l
```
Displays the current priority of all processes in the system.
```
:::tip
When using the renice command in Linux, make sure to specify the appropriate priority value to ensure the desired impact on the process. It is recommended to use positive values for increasing priority and negative values for decreasing priority.
:::

### How do I use renice in Linux?
To use the renice command in Linux, execute the following command:
```bash
renice --priority <value> <PID>
```

### Can I renice multiple processes at once in Linux?
Yes, you can renice multiple processes at once by specifying multiple PIDs in the command. 
```bash
renice --priority <value> <PID1> <PID2> <PID3>
```

### How can I prioritize a specific user's processes using renice in Linux?
To prioritize processes of a specific user using renice, you can use the following command:
```bash
renice --priority <value> -u <username>
```

### Is it possible to change the scheduling priority of a running process in Linux with renice?
Yes, you can change the scheduling priority of a running process by providing its PID to the renice command.
```bash
renice --priority <value> <PID>
```

### How can I set a process to the highest priority using renice in Linux?
To set a process to the highest priority using renice, you can use a negative value for the priority.
```bash
renice --priority -20 <PID>
```

### Is there a way to renice a process with a specific process group ID in Linux?
Yes, you can renice a process with a specific process group ID in Linux by providing the ID to the command.
```bash
renice --priority <value> -g <PGID>
```

### What happens if I use renice with an invalid PID in Linux?
If you use renice with an invalid PID in Linux, the command will fail with an error message indicating that the process ID is not valid.
```bash
renice --priority <value> 999999
```

## Applications of the renice command

- Adjusting the priority of a running process
- Changing the priority of a process scheduled by the operating system
- Giving a higher or lower priority to a process to manage CPU resources efficiently