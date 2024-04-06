---
title: pv Linux command
description: Perform efficient data transfer and monitoring with the Linux pv command. Use it to track progress, speed up transfers, and manage pipelines seamlessly.
---

The Linux pv command, short for "pipe viewer," is a powerful utility that allows users to monitor the progress of data being transferred through a pipeline. With pv, you can track data flow, speed up transfers by applying rate limiting, and seamlessly manage multiple streams of data. This command is particularly useful for tasks such as copying large files, creating backups, and transferring data between different systems. By providing real-time information on throughput, duration, and progress, pv helps users optimize their data transfer processes and ensure efficient execution of tasks.

## pv Syntax:
```bash
pv [options] [file]
```

## Options:
| Option                  | Description                             |
|-------------------------|-----------------------------------------|
| -q, --quiet             | Suppresses output from pv               |
| -b, --bytes             | Show the progress in bytes              |
| -n, --numeric           | Print the output without visual bars    |
| -L, --line-mode         | Output one line with progress           |
| -s, --size              | Sets the size of the input in bytes     |
| -w, --wait              | Waits for both pipes to open before starting |
| -e, --eta               | Shows the estimated time of completion  |
| -r, --rate-limit        | Limit the transfer rate in bytes per second |
| -B, --buffer-size       | Sets the buffer size for the transfer   |
| -c, --cursor            | Hide the cursor                         |

## Parameters:
| Parameter               | Description                             |
|-------------------------|-----------------------------------------|
| file                    | The file to be monitored by pv          |

:::caution
Exercise caution when using the pv command, especially with the options that directly affect data transfer and monitoring. Incorrect usage may affect data integrity or system performance.
:::
## pv bash Examples:
### Copy a File with Progress Bar
```bash
pv file.txt > newfile.txt
```
This command copies the content of "file.txt" to "newfile.txt" while displaying the progress bar.

### Monitor Data Transfer Between Processes
```bash
tar -cf - /folder | pv | tar -xf - -C /destination
```
This command archives the "/folder" contents, sends the data to pv to monitor the transfer, and then extracts the data to "/destination".

### Limit Data Transfer Speed
```bash
pv -L 1M file.iso > /dev/sdX
```
The command limits the transfer rate to 1MB per second while writing the "file.iso" content to a block device (/dev/sdX).

### Display Transfer Rate Between Files
```bash
pv -r file1.txt > file2.txt
```
It copies the content of "file1.txt" to "file2.txt" and displays the transfer rate between the two files.

### Show Progress while Compressing Files
```bash
tar czf - /folder | pv | gzip > archive.tar.gz
```
This command creates a compressed archive of the "/folder" content, using pv to display the progress bar, and then saves it to "archive.tar.gz".

### Check Disk Write Speed
```bash
dd if=/dev/zero bs=1M count=100 | pv > /dev/sdX
```
It measures the write speed of a block device "/dev/sdX" by writing 100MB of zeros using dd and displaying the progress with pv.
:::tip
When using the pv command in Linux, make sure to check the available options and their usage in the command's manual (`man pv`) for detailed explanations and examples.
:::

### How do I install pv in Linux?
To install the pv command in Linux, you can use the package manager of your distribution. For example, on Debian-based systems, you can run:
```bash
sudo apt-get install pv
```

### How can I monitor the progress of a data transfer using pv?
To monitor the progress of a data transfer using pv, you can use it along with other commands like `dd` by piping the data through pv. For example:
```bash
dd if=/dev/zero | pv | dd of=outputfile
```

### How can I limit the transfer rate using pv in Linux?
To limit the transfer rate using pv in Linux, you can specify the desired rate using the `-L` flag followed by the rate. For example:
```bash
pv -L 1m filetosend | ssh user@host 'cat > /path/to/destination'
```

### How can I display the progress bar with elapsed time using pv?
To display the progress bar along with the elapsed time using pv, you can add the `-t` or `--timer` option to the command. For example:
```bash
pv -pt filetosend > /path/to/destination
```

### How can I show the current data transfer rate using pv in Linux?
To show the current data transfer rate using pv in Linux, you can add the `-r` option to display the rate. For example:
```bash
pv -r filetosend > /path/to/destination
```

### How can I display the passed and remaining bytes using pv?
To display both the passed and remaining bytes during a data transfer using pv, you can use the `-e` option. For example:
```bash
pv -pet filetosend > /path/to/destination
```

### How can I ignore the SIGINT signal using pv in Linux?
To ignore the SIGINT signal (Ctrl+C) while using pv in Linux, you can include the `-i 0` option in your command. For example:
```bash
pv -i 0 filetosend > /path/to/destination
```
## Applications of the pv command

- Monitor the progress of data through a pipeline
- Show the throughput of data transfer
- Create progress bars for data transfer
- Limit the transfer rate of data
- Display statistics about the data transfer process