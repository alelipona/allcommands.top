---
title: purge MacOS command
description: Learn how to use the MacOS purge command to free up inactive memory and improve system performance.
---

The MacOS "purge" command is a helpful tool for freeing up inactive memory on your system, which can help improve overall performance. By running the purge command, you can force the system to clear out any cached data that is no longer needed, allowing your Mac to run more smoothly. This can be particularly useful when you notice your system slowing down or becoming unresponsive due to a lack of available memory. The purge command essentially creates a clean slate for your system, giving it the opportunity to allocate memory more efficiently. It is a quick and easy way to refresh your system's memory usage without the need for a full restart. Overall, using the purge command can be a handy solution for optimizing your Mac's performance and ensuring that it is running at its best.

## purge Syntax:
```bash
sudo purge
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -f     | Force the purge operation      |
| -q     | Quiet mode, suppress output    |
| -h     | Display help for purge command |

## Parameters:
There are no parameters for the purge command.

:::caution
Use the purge command with caution as it forcibly purges system memory, which may affect the performance of running processes and applications. Ensure that you have saved any important work before running the purge command.
:::
## purge bash Examples:

### Free Up Inactive Memory
```bash
purge
```
This command will clear inactive memory on your MacOS system.

### Purge Memory and Update Stats
```bash
purge -z
```
The '-z' option will purge memory and update system statistics.

### Force Purge Memory
```bash
sudo purge -f
```
Use 'sudo' to force a purge of memory, which will clear both inactive and active memory.

### Verbose Output of Purge
```bash
purge -v
```
The '-v' flag provides more information during the memory purge process.

### Purge Memory and Show Stats
```bash
purge -s
```
By using the '-s' option, the memory purge is done, and system statistics are displayed.

### Purge Memory with Delay
```bash
sudo purge -t 30
```
This command will force a purge of memory after a specified delay (30 seconds in this case).
:::tip
It is recommended to use the purge command with caution as it clears inactive memory pages, which may impact system performance temporarily.
:::

### How do I use purge in MacOS?
To use the purge command in MacOS, execute the following command:
```bash
purge
```

### What is the purpose of the purge command in MacOS?
The purge command in MacOS is used to force disk cache to be purged, which can free up memory.

### Can I use options with the purge command in MacOS?
Yes, you can use options with the purge command in MacOS. For example:
```bash
purge -a
```

### How can I clear memory cache on MacOS using the purge command?
You can clear the memory cache on MacOS using the purge command by simply running the command in the terminal.

### Is the purge command reversible in MacOS?
No, the purge command in MacOS is not reversible. Once executed, it clears the memory cache immediately.

### What happens when I use the purge command in MacOS?
When you use the purge command in MacOS, it frees up inactive memory, which can help improve system performance temporarily.

### How often should I use the purge command in MacOS?
It is not necessary to use the purge command frequently in MacOS. It is typically used when you notice a slowdown in system performance due to high memory usage.

### Are there any risks associated with using the purge command in MacOS?
Using the purge command in MacOS may temporarily impact system performance as it clears memory cache, but there are no significant risks associated with its proper usage.
## Applications of the purge command

- Freeing up inactive memory
- Improving system performance
- Reducing memory pressure
- Increasing available memory for applications
- Clearing disk cache