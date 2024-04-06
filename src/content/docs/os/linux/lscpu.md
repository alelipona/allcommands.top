---
title: lscpu Linux Command Guide
description: Learn how to use the lscpu command in Linux to get detailed information about the CPU architecture and processing units.
---

The lscpu command in Linux provides detailed information about the CPU architecture, processing units, sockets, cores per socket, threads per core, and more. It helps users understand the configuration of their CPU and how it is utilized by the system. By running lscpu, you can quickly access essential details about your CPU, such as its model name, vendor, CPU family, cache sizes, and processor flags. This command is useful for system administrators, developers, and users who need to optimize system performance, troubleshoot issues, or gather information about the CPU for various purposes.

## lscpu Syntax:
```bash
lscpu [options]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -a     | Display all information          |
| -p     | Show all available information   |
| -e     | Show extended information        |
| -s     | Show short output                |
| -x     | Show additional details          |
| -y     | Show information in YAML format  |
| -c     | Show information in CSV format   |

## Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| None      | It does not have any specific parameter.|

:::caution
Exercise caution while using the lscpu command as it provides detailed information about the system's CPU and architecture, which may have sensitive data.
:::
## lscpu Command Samples:
### Display CPU Information
```bash
lscpu
```
Displays detailed information about the CPU.

### Display Only the Architecture
```bash
lscpu | grep Architecture
```
Displays only the architecture information of the CPU.

### Display CPU Core Information
```bash
lscpu | grep "Core(s) per socket"
```
Displays the number of CPU cores per socket.

### Display CPU Thread Information
```bash
lscpu | grep "Thread(s) per core"
```
Displays the number of threads per CPU core.

### Display CPU Clock Speed
```bash
lscpu | grep "CPU MHz"
```
Displays the CPU clock speed in MHz.

### Display CPU Socket Information
```bash
lscpu | grep "Socket(s)"
```
Displays the number of CPU sockets.

### Display CPU Vendor Information
```bash
lscpu | grep "Vendor ID"
```
Displays the CPU vendor information.
:::tip
It is important to note that the lscpu command provides detailed information about the CPU architecture and processing units in a Linux system. It can be quite useful for system administrators and developers to gather essential hardware-related details for optimizing system performance and compatibility.
:::

### How do I display CPU architecture information using lscpu?
To display CPU architecture information using lscpu, run the following command:
```bash
lscpu
```

### How to show just the CPU model name with lscpu?
To show just the CPU model name with lscpu, use the following command:
```bash
lscpu | grep "Model name"
```

### Can lscpu show the number of physical CPU sockets?
Yes, to display the number of physical CPU sockets using lscpu, use the command:
```bash
lscpu | grep "Socket(s)"
```

### How to get information about CPU cores and threads with lscpu?
To get information about CPU cores and threads with lscpu, execute the command:
```bash
lscpu | grep -E "Core(s) per socket|Thread(s) per core"
```

### What is the command to display CPU cache information using lscpu?
To display CPU cache information using lscpu, use the following command:
```bash
lscpu | grep -E "L1d|L1i|L2|L3"
```

### Can lscpu provide details about CPU flags?
Yes, you can use lscpu to get details about CPU flags by running the command:
```bash
lscpu | grep "Flags"
```
## Applications of the lscpu command

- Determine the number of CPUs on the system
- View information about the CPU architecture
- Display CPU vendor information
- Show CPU family, model, and stepping
- Check CPU frequency and max/min frequencies
- View CPU cache information
- Display NUMA (Non-Uniform Memory Access) information
- Show flags indicating CPU features
- Determine the endianness of the CPU
- Check the number of threads per core and cores per socket