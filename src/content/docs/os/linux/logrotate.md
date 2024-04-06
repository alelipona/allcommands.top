---
title: What is logrotate Linux command?
description: Automatically manage log files with the Linux logrotate command. Keep logs organized and prevent disk space issues. Learn how to use logrotate efficiently.
---

The Linux logrotate command helps manage log files by rotating, compressing, and deleting old logs to prevent disk space issues. It automates log file maintenance for a streamlined system operation.
## logrotate Syntax:
```bash
logrotate [option] [config_file]
```

## logrotate Options:

| Option             | Description                                                      |
|--------------------|------------------------------------------------------------------|
| -d, --debug        | Run in debug mode                                                 |
| -f, --force        | Force the rotation even if log files do not need rotating        |
| -s, --state        | Specify the state file to store the logrotate state information  |
| -v, --verbose      | Display detailed information during rotation                     |
| -c, --config       | Specify a different configuration file instead of the default    |
| -l, --log          | Specify a log file for status messages                           |
| -m, --mail         | Send an email to the administrator after rotating files          |

## Parameters:
| Parameter     | Description                                          |
|---------------|------------------------------------------------------|
| option        | The options to control the log rotation process      |
| config_file   | The configuration file containing log rotation rules |

## logrotate Command Usage Examples:
### Rotate Specified Log File
```bash
logrotate -f /etc/logrotate.d/nginx
```
Forces log rotation for the specified log file "/etc/logrotate.d/nginx".

### Perform Dry Run for Log Rotation
```bash
logrotate -d /etc/logrotate.d/apache2
```
Simulates the log rotation process for the log files specified in "/etc/logrotate.d/apache2" without actually rotating them.

### Rotate Log Files Weekly
```bash
logrotate -d /etc/logrotate.conf
```
Performs log rotation based on the configuration in "/etc/logrotate.conf" on a weekly basis.

### Specify Additional Configuration File
```bash
logrotate -v -s /var/log/logrotate-state /etc/logrotate.d/custom
```
Verbose mode (-v) rotates logs based on both the standard /etc/logrotate.conf and the additional configuration file "/etc/logrotate.d/custom", using a state file "/var/log/logrotate-state".

### Ignore Missing Log Files
```bash
logrotate -s /var/log/logrotate-state --ignoremissing /etc/logrotate.d/nginx
```
Rotates log files in "/etc/logrotate.d/nginx" while ignoring missing log files, using "/var/log/logrotate-state" as the state file.
```
:::tip
When using the logrotate command in Linux, it's important to understand the configuration files located in `/etc/logrotate.d/` and the main configuration file `/etc/logrotate.conf`. These files define how log rotation is managed for individual log files. Make sure to familiarize yourself with these configurations to customize log rotation according to your needs.
:::

### How do I use logrotate in Linux?
To use the logrotate command in bash, execute the following command:
```bash
logrotate -f /etc/logrotate.d/nginx
```

### What is the purpose of logrotate in Linux?
The logrotate command in Linux is used to manage log files by rotating, compressing, and deleting old log files. It helps in keeping log files from growing too large and consuming excessive disk space.

### How can I force log rotation with logrotate?
To force log rotation with logrotate, you can use the `-f` or `--force` option. This will force logrotate to rotate the logs specified in its configuration files immediately. 
```bash
logrotate -f /etc/logrotate.d/apache2
```

### How do I test logrotate configurations without rotating logs?
To test logrotate configurations without actually rotating the logs, you can use the `-d` or `--debug` option. This will run logrotate in debug mode, showing what would happen without actually performing the rotation.
```bash
logrotate -d /etc/logrotate.d/mysql
```

### How do I create a custom logrotate configuration?
To create a custom logrotate configuration, you can create a new file in the `/etc/logrotate.d/` directory. Make sure to define the log file path, rotation frequency, compression options, and any other specific requirements in the configuration file.

### How do I manually rotate logs with logrotate?
To manually rotate logs with logrotate, you can execute the logrotate command with the path to the specific log file configuration you want to rotate. This will trigger the log rotation process for that particular log file.
```bash
logrotate /etc/logrotate.d/syslog
```

### How can I view the next rotation time for a log file with logrotate?
To view the next rotation time for a log file managed by logrotate, you can use the `--debug` option followed by the specific log file configuration. This will provide detailed information on the log file and its rotation schedule.
```bash
logrotate --debug /etc/logrotate.d/app_logs
```
## Applications of the logrotate command

- Managing log files to prevent them from becoming too large
- Compressing old log files to save disk space
- Automatically rotating and archiving log files on a scheduled basis
- Specifying custom configurations for different log files
- Deleting old log files to maintain system performance and storage efficiency