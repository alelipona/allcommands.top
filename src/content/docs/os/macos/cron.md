---
title: What is the MacOS cron command?
description: Learn how to schedule and automate tasks on MacOS using the cron command. Find examples and syntax for setting up cron jobs.
---

With the cron command on MacOS, you can schedule recurring tasks, automate system maintenance, and run scripts at specific times without user intervention.

## cron Syntax:
```bash
cron [options] [expression]
```

## cron Options:
| Option | Description |
|--------|-------------|
| -l     | List all cron jobs for the current user. |
| -e     | Edit the current user's crontab file. |
| -r     | Remove the current user's crontab file. |
| -i     | Prompt before removing the current user's crontab file. |
| -s     | Display the current user's crontab file. |
| -c     | Check for and report any syntax errors in the current user's crontab file. |

## Parameters:
| Parameter  | Description |
|------------|-------------|
| expression | Specifies the schedule for the cron job. This is a string that includes information such as the time, day, date, and command to be executed. | 

:::caution
Be cautious when using the cron command as it deals with system scheduling and can impact system behavior if misused. Make sure to review and test your cron jobs thoroughly before setting them up in production environments.
:::
## cron Command Usage Examples:
### Run a Script Every Hour
```bash
0 * * * * /path/to/your/script.sh
```
This example will execute the script located at "/path/to/your/script.sh" every hour.

### Schedule a Daily Backup
```bash
0 2 * * * /bin/bash /path/to/backup.sh
```
This cron job will run the backup script "/path/to/backup.sh" at 2:00 AM every day.

### Restart a Service Weekly
```bash
0 0 * * 6 /bin/systemctl restart myservice
```
This command will restart the "myservice" service every Saturday at midnight.

### Send Email Reminders Monthly
```bash
0 8 1 * * mail -s "Monthly Reminder" user@example.com
```
Sends an email with the subject "Monthly Reminder" to "user@example.com" at 8:00 AM on the 1st of every month.

### Clean Up Temporary Files Daily
```bash
0 3 * * * find /path/to/temp -mtime +7 -exec rm {} \;
```
Deletes files older than 7 days in the "/path/to/temp" directory every day at 3:00 AM.
:::tip
When using the cron command in MacOS, make sure to specify the correct time intervals and commands to avoid any unexpected behaviors. Additionally, always test your cron jobs in a safe environment before scheduling them for production use.
:::

### How do I schedule a cron job in MacOS?
To schedule a cron job in MacOS, use the following command:
```bash
cron -e
```

### How do I list all scheduled cron jobs in MacOS?
To list all scheduled cron jobs in MacOS, execute the following command:
```bash
crontab -l
```

### How do I edit the crontab in MacOS using a text editor?
To edit the crontab in MacOS using a text editor, run the following command:
```bash
crontab -e
```

### How do I remove all scheduled cron jobs in MacOS?
To remove all scheduled cron jobs in MacOS, use the following command:
```bash
crontab -r
```

### How do I check the status of the cron service in MacOS?
To check the status of the cron service in MacOS, execute the following command:
```bash
launchctl list | grep cron
```

### How do I enable the cron service in MacOS?
To enable the cron service in MacOS, run the following command:
```bash
sudo launchctl load -w /System/Library/LaunchDaemons/com.vix.cron.plist
```

### How do I disable the cron service in MacOS?
To disable the cron service in MacOS, use the following command:
```bash
sudo launchctl unload /System/Library/LaunchDaemons/com.vix.cron.plist
```

### How do I set environment variables for a cron job in MacOS?
To set environment variables for a cron job in MacOS, you can do the following by editing the crontab:
```bash
SHELL=/bin/bash
PATH=/usr/local/bin:/usr/bin:/bin
{command to be executed}
```

## Applications of the cron command

- Automating tasks
- Scheduling backups
- Updating software
- Running maintenance scripts
- Monitoring system health
- Sending notifications
- Generating reports