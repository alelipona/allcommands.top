---
title: What is dd Linux command?
description: Linux dd command is a powerful tool for copying and converting files. It can be used for tasks like disk cloning and data recovery. Learn how to use dd effectively.
---

The Linux dd command is a versatile tool used for copying and converting files. It allows users to create exact duplicates of data, such as disks or partitions. With dd, you can also perform tasks like disk cloning, data recovery, and low-level formatting. Additionally, dd can be used to benchmark storage devices and manipulate data in various ways. Familiarize yourself with the syntax and options of dd to leverage its capabilities effectively.

## dd Syntax:
```bash
dd [option] [parameter]
```
## dd Options:
| Option | Description |
|--------|-------------|
| if=FILE | read from FILE |
| of=FILE | write to FILE |
| bs=BYTES | read and write BYTES bytes at a time |
| count=BLOCKS | copy only BLOCKS input blocks |
| seek=BLOCKS | skip BLOCKS obs-sized blocks at start of output |
| skip=BLOCKS | skip BLOCKS ibs-sized blocks at start of input |
| status=LEVEL | The LEVEL of information to print to stderr; 'none', 'noxfer', 'progress', or 'full' |
| conv=CONVERSION | convert the file as per the comma separated symbol list |

:::caution
Exercise caution when using the dd command as it can overwrite data on your system if used incorrectly.
:::

## Parameters:
| Parameter | Description |
|-----------|-------------|
| if=FILE   | input file |
| of=FILE   | output file |
## dd Command Usage Examples:
### Copying Files
```bash
dd if=inputfile.txt of=outputfile.txt
```
This command copies the contents of "inputfile.txt" to "outputfile.txt".

### Cloning a Disk
```bash
dd if=/dev/sda of=/dev/sdb bs=4M
```
This command clones the entire contents of disk "/dev/sda" to disk "/dev/sdb" with a block size of 4MB.

### Creating a Disk Image
```bash
dd if=/dev/sdb of=disk_image.img
```
This command creates an image file "disk_image.img" from the contents of disk "/dev/sdb".

### Testing Disk Write Speed
```bash
dd if=/dev/zero of=testfile bs=1M count=1000
```
This command tests the write speed of the disk by writing 1GB of zeros to a file "testfile".

### Erasing Data on a Disk
```bash
dd if=/dev/zero of=/dev/sdc bs=4M
```
This command overwrites the contents of disk "/dev/sdc" with zeros, effectively erasing all data on the disk.
:::tip
When using the dd command in Linux, be extremely careful as it can overwrite data on your disk if used incorrectly. Always double-check the input and output devices to avoid accidental data loss.
:::

### How do I use dd in Linux?
To use the dd command in bash, execute the following command:
```bash
dd if=input_file of=output_file bs=block_size count=number_of_blocks
```

### What is the purpose of the bs option in dd?
The bs (block size) option in dd is used to specify the number of bytes to read and write at a time. This can help optimize the performance of the dd command.
```bash
dd if=input_file of=output_file bs=4k
```

### How can I monitor the progress of a dd command?
You can send the USR1 signal to the dd process to make it print the current status without halting the process. Open a new terminal and execute the following command:
```bash
kill -USR1 $(pgrep ^dd)
```

### How do I create a disk image using dd?
To create a disk image using dd, specify your disk as the input file (if) and a file as the output file (of). Make sure to use a block size and count appropriate for the disk size.
```bash
dd if=/dev/sda of=disk_image.img bs=4M
```

### How can I wipe a disk with dd in Linux?
To wipe a disk using dd, you can write zeros or random data to the entire disk. Be cautious as this action will erase all data on the disk. Here is an example of writing random data to a disk:
```bash
dd if=/dev/urandom of=/dev/sdX bs=4M
```

### How do I clone a disk with dd?
To clone a disk using dd, you need to specify the disk you want to clone as the input file (if) and the target disk as the output file (of). Be careful as this will overwrite all data on the target disk.
```bash
dd if=/dev/sda of=/dev/sdb bs=4M
```

### How can I create a bootable USB drive with dd?
To create a bootable USB drive with dd, use an ISO image file as the input file (if) and the USB drive as the output file (of).
```bash
dd if=ubuntu.iso of=/dev/sdX bs=4M
```

### What does the status=progress option do in dd?
The status=progress option in dd shows the progress of the operation in the terminal, providing information on how much data has been copied. It is useful for tracking the status of a long-running dd command.
```bash
dd if=input_file of=output_file bs=4k status=progress
```
## Applications of the dd command

- Creating disk images
- Cloning disks
- Backing up and restoring hard drives
- Converting and formatting disks
- Benchmarking disk performance