---
title: quota MacOS command
description: Manage user disk quotas on MacOS using the quota command.
---

The MacOS quota command allows users to manage disk quotas for specific users on a MacOS system. By setting limits on disk usage, administrators can prevent users from consuming excessive storage space and ensure fair distribution of resources. The quota command provides information on current disk usage, limits, and warnings for users, helping to monitor and enforce disk quotas effectively.

## quota Syntax:
```bash
quota [options] [parameters]
```

## quota Options:
| Option | Description |
|--------|-------------|
| -v     | Verbose mode, display detailed information     |
| -g     | Display group quotas                               |
| -u     | Display user quotas                                |
| -q     | Quiet mode, display only quota exceeding values    |
| -w     | Warn when user exceeds soft limits                 |
| -c     | Reset quota for specific user or group             |
| -f     | Specify a quota file to be used                    |

:::caution
The `quota` command displays disk usage and limits for users and groups. Make sure to use caution and understand quota limits before modifying any settings.
:::

## Parameters:
| Parameter  | Description  |
|------------|--------------|
| username   | Specify the username to display quota information for        |
| groupname  | Specify the group name to display quota information for      |
| filesystem | Specify the filesystem or partition to check quotas for      |
## quota Command Usage Examples:
### Display Disk Quotas for User A
```bash
quota -u A
```
Shows the disk quotas for user A.

### Set Grace Period for User B
```bash
quota -t 14days B
```
Sets a grace period of 14 days for user B.

### Display Quotas for All Users
```bash
quota -v
```
Displays disk quotas for all users in a verbose format.

### Set Block Limit for User C
```bash
quota -b 500M C
```
Sets a block limit of 500 megabytes for user C.

### Clear Quota Limits for User D
```bash
quota -x D
```
Resets the quota limits for user D to unlimited.
:::tip
When using the quota command in MacOS, make sure to have the necessary permissions to view or set filesystem quotas. It is recommended to refer to the official documentation or seek guidance from a system administrator if you encounter any issues.
:::

### How do I use quota in MacOS?
To use the quota command in bash, execute the following command:
```bash
quota --user john
```

### How can I check disk quotas for a specific user in MacOS?
To check disk quotas for a specific user, use the following command:
```bash
quota --user jane
```

### How to display quotas for all filesystems in MacOS?
To display quotas for all filesystems, use the following command:
```bash
quota --all
```

### How to set quotas for a specific user in MacOS?
To set quotas for a specific user, you can use the following command:
```bash
quota --user jdoe --limit 500M
```

### How can I see the current quota settings for a filesystem in MacOS?
To view the current quota settings for a filesystem, you can use the following command:
```bash
quota --filesystem /mnt/data
```

### How to reset all disk quotas in MacOS?
To reset all disk quotas, you can use the following command:
```bash
quota --reset
```

### How to force a filesystem quota recalculation in MacOS?
To force a filesystem quota recalculation, you can use the following command:
```bash
quota --recheck /mnt/data
```

### How to display only exceeded quotas in MacOS?
To display only exceeded quotas, you can use the following command:
```bash
quota --warn
```
## Applications of the quota command

- Monitoring and managing user disk usage
- Enforcing disk space limits for users or groups
- Setting quotas for file systems
- Generating reports on disk usage and quotas
- Implementing disk space management policies