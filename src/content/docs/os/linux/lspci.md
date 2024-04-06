---
title: Linux lspci command
description: Discover how to use the lspci command in Linux to list all PCI devices on your system. Learn about its options, syntax, and practical examples.
---

The Linux lspci command is a handy utility used to display detailed information about all PCI buses and devices in the system. It helps users identify devices connected to the PCI bus such as graphics cards, network adapters, and storage controllers. By running lspci, you can quickly gather information about the hardware on your system, including the vendor, device ID, driver in use, and more. This command is often used for troubleshooting hardware-related issues or to gather information about the system configuration. Explore the different options available with lspci to customize the output according to your needs.

## lspci Syntax:
```bash
lspci [options] [parameters]
```
## Options:
| Option | Description |
|--------|-------------|
| -k     | Show kernel driver handling the devices |
| -t     | Show bus topology in a tree view |
| -v     | Be verbose (show more information) |
| -nn    | Show numeric IDs |
| -s     | Show only a specific device |
| -D     | Show PCI domains |
| -xxx   | Show hexadecimal dump of the standard part of the configuration space |
| -xxxx  | Show hexadecimal dump of the full configuration space |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| domain    | Show devices within the specified PCI domain |

:::caution
Exercise caution when using the `lspci` command as it provides detailed information about the PCI buses and connected devices. Be mindful of the output, especially when using options like `-v` or dumping configuration space with `-xxx` and `-xxxx`.
:::
## lspci Usage:
### Show all PCI devices
```bash
lspci
```
Display a list of all PCI devices on the system.

### Show details of a specific PCI device
```bash
lspci -v -s 00:10.0
```
Show detailed information about the PCI device with the address 00:10.0.

### Display PCI devices in a tree-like format
```bash
lspci -t
```
Show PCI devices in a tree-like format to visualize their hierarchy.

### Show PCI devices with their driver names
```bash
lspci -k
```
List PCI devices along with their driver names to understand which drivers are being used.
:::tip
When using the `lspci` command in Linux, you can combine it with various options to get specific information about your system's PCI devices. Explore the different options available in the `lspci` command by referring to the manual page (`man lspci`).
:::

### How do I show all PCI devices using lspci in Linux?
To display information about all PCI devices in Linux using the `lspci` command, use the following command:
```bash
lspci
```

### How do I list PCI devices in detail with lspci in Linux?
To list detailed information about PCI devices in Linux using the `lspci` command, execute:
```bash
lspci -vv
```

### How can I get a tree-like view of PCI devices using lspci in Linux?
To obtain a tree-like representation of PCI devices in Linux with the `lspci` command, run:
```bash
lspci -t
```

### How do I show PCI devices in a specific domain with lspci in Linux?
To display PCI devices within a specific domain in Linux using the `lspci` command, use:
```bash
lspci -d <domain>
```

### How do I show only a certain class of PCI devices with lspci in Linux?
To filter and display only a specific class of PCI devices in Linux using the `lspci` command, run:
```bash
lspci -d <vendor_id>:<device_id>
```

### How can I list only the network devices with lspci in Linux?
To list only the network devices in Linux using the `lspci` command, execute:
```bash
lspci -nn | grep -i net
```

### How do I show PCI devices in a specific slot with lspci in Linux?
To display PCI devices located in a specific slot in Linux using the `lspci` command, use:
```bash
lspci -s <slot>
```

## Applications of the lspci command

- Display information about PCI buses and devices connected to them
- Detect hardware devices attached to the PCI bus
- Check which drivers are being used for the devices
- Identify the chipset used in the PCI devices
- Troubleshoot hardware configuration issues
- Identify device vendor and device IDs
- Get an overview of the hardware components connected to the system