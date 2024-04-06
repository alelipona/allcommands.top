---
title: Linux dmidecode command
description: Retrieve hardware information in Linux using the dmidecode command.
---

dmidecode is a command-line utility in Linux that allows users to retrieve detailed information about their hardware components such as BIOS, motherboard, RAM, and more. By parsing data from the DMI (Desktop Management Interface) tables stored in the system BIOS, dmidecode provides a comprehensive view of the system's hardware configuration. This tool is especially useful for system administrators and users troubleshooting hardware-related issues or looking to gather detailed information about their system. With dmidecode, users can access vital details like manufacturer, model, serial number, version, and characteristics of various hardware components. Additionally, the output from dmidecode can be redirected to a text file for further analysis or documentation purposes.

## dmidecode Syntax:
```bash
dmidecode [options] [parameter]
```
## Options:
| Option | Description |
|--------|-------------|
| -s     | Specify a keyword to search for in the SMBIOS data and print the result. |
| -t     | Select a specific type to display the structure. |
| -u     | Show full SMBIOS data dump in a human-readable format. |
| -q     | Display the DMI (Desktop Management Interface) data in a brief format. |
| -V     | Display the version of dmidecode. |

## Parameters:
| Parameter   | Description |
|-------------|-------------|
| bios        | Print BIOS information. |
| system      | Print system information. |
| baseboard   | Print baseboard (or motherboard) information. |
| chassis     | Print chassis information. |
| processor   | Print processor information. |
| memory      | Print memory information. |
| cache       | Print cache information. |
| connector   | Print connector information. |
| slot        | Print slot information. |
| device      | Print device information. |
| processor.po| Print processor power information. |
| memory.error| Print memory error information. |
| ra          | Print remote access information. |
| oem         | Print OEM-specific strings. |
| system.event| Print system event log. |
| bios.boot   | Print boot-time configuration. |
| bios.acp    | Print ACP tables. |
| bios.slate  | Print SLIC table. |
| processor.c | Print CPU information using CPUID instruction. |
| memory.col  | Print memory array MCA (Machine Check Architecture) information. |
| memory.dev  | Print memory device MCA information. |
| memory.er   | Print memory error information. |
| memory.ar   | Print 32-bit failure information. |
| memory.15   | Print 16-bit failure information. |
| memory.24   | Print 24-bit failure information. |
| onverter    | Print system power supply converter information. |
| utput      | Print System Management BIOS (SMBIOS) information from FILE. |

:::caution
Exercise caution when using dmidecode, as it provides low-level information about hardware components and system configurations. Incorrect usage can lead to misinterpretation of data or unintentional changes to the system. It is recommended to have a good understanding of the command and its options before using it.
:::
## dmidecode Usage:
### Display System Information
```bash
dmidecode
```
This command displays various system information by decoding the system DMI (Desktop Management Interface) data.
### Output BIOS Information
```bash
dmidecode -t bios
```
Using the -t option with the argument "bios" displays detailed information about the system BIOS.
### Show Processor Information
```bash
dmidecode -t processor
```
With the -t option and "processor" as the argument, this command shows detailed information about the system's processors.
### Retrieve Memory Details
```bash
dmidecode -t memory
```
By specifying the argument "memory" with the -t option, this command provides detailed information about the system's memory modules.
:::tip
When using the dmidecode command in Linux, make sure to run it with root privileges (using sudo) to ensure that you have full access to the system's hardware information.
:::

## Common Questions on dmidecode Usage:

### How can I display the system's DMI table using dmidecode in Linux?
To display the system's DMI (Desktop Management Interface) table in Linux using dmidecode, run the following command:
```bash
sudo dmidecode
```

### How can I filter specific DMI type information with dmidecode in Linux?
To filter specific DMI type information using dmidecode in Linux, you can specify the DMI type number with the `-t` option. For example, to display information about the system's baseboard, you can use:
```bash
sudo dmidecode -t 2
```

### How can I save the output of dmidecode to a file in Linux?
To save the output of dmidecode to a file in Linux, you can use output redirection with the `>` symbol. For example, to save the DMI data to a file named "dmidecode_output.txt", you can run:
```bash
sudo dmidecode > dmidecode_output.txt
```

### How can I show hardware information in a human-readable format using dmidecode in Linux?
To view hardware information in a more human-readable format with dmidecode in Linux, use the `-t` option followed by the DMI type number. For instance, to display the processor information in a readable format, run:
```bash
sudo dmidecode -t 4
```

### How can I get the BIOS information using dmidecode in Linux?
To retrieve BIOS information with dmidecode in Linux, you can use the `-t` option and specify the DMI type number for BIOS. To display BIOS information, run:
```bash
sudo dmidecode -t 0
```

### How can I get the memory module details with dmidecode in Linux?
To get detailed information about memory modules installed on the system using dmidecode in Linux, you can specify the DMI type number for memory devices. Run the following command to display memory module details:
```bash
sudo dmidecode -t 17
```

### How can I filter information based on keyword search in dmidecode output in Linux?
To filter information based on a keyword search in the dmidecode output in Linux, you can use tools like `grep`. For example, to search for information related to "Serial Number," you can pipe the dmidecode output to grep:
```bash
sudo dmidecode | grep "Serial Number"
```

## Applications of the dmidecode command

- Retrieve hardware information
- Check BIOS details
- View motherboard information
- Identify system's serial number
- Obtain memory module details
- Determine CPU information
- Verify system manufacturer and product names
- Display system firmware information