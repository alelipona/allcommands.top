---
title: profiles MacOS command
description: Learn how to manage profiles on MacOS using the profiles command.
---

The profiles command on MacOS allows users to manage profiles, install, remove, enable, and disable configuration profiles. It provides a way to interact with the Profile Manager service on MacOS, giving users control over various settings and configurations on their devices. Users can use the profiles command to list all installed profiles, install new profiles, remove unwanted profiles, or view detailed information about specific profiles. With the profiles command, users can efficiently manage their device profiles and ensure that all configurations are up to date and optimized for their needs.

## profiles Syntax:
```bash
profiles [list] [show] [add] [remove] [install] [uninstall]
```

## profiles Options:
| Option | Description                             |
|--------|-----------------------------------------|
| list   | List all available profiles             |
| show   | Show detailed information about a profile|
| add    | Add a new profile                       |
| remove | Remove an existing profile              |
| install| Install a profile                       |
| uninstall| Uninstall a profile                    |

:::caution
Exercise caution when using the profiles command as it can modify system settings and configurations. Ensure you have the necessary permissions and understand the implications of the actions you perform.
:::

## Parameters:
| Parameter  | Description                                   |
|------------|-----------------------------------------------|
| profile_name | The name of the profile to be operated on    |
| package_name | The name of the package related to the profile|
## profiles Command Usage Examples:
### List all profiles on the system
```bash
profiles -L
```
This command lists all the profiles currently installed on the system.

### Install a profile from a file
```bash
profiles -I -F /path/to/profile.mobileconfig
```
Installs a profile from a specified file on the system.

### Remove a specific profile
```bash
profiles -R -p com.example.profile
```
Removes a specific profile identified by its identifier (com.example.profile).

### Show detailed information about a profile
```bash
profiles -P -p com.example.profile
```
Displays detailed information about a specific profile.

### Query all available profiles
```bash
profiles -C -v
```
Queries and displays information about all the profiles available on the system.
:::tip
To prevent potential issues, always make sure to double-check the syntax and options used with the profiles command in MacOS.
:::

### How do I use profiles in MacOS?
To use the profiles command in bash, execute the following command:
```bash
profiles -P
```

### How can I list all profiles in MacOS?
To list all profiles in MacOS using the profiles command, run the following command:
```bash
profiles -L
```

### How do I install a configuration profile with profiles in MacOS?
To install a configuration profile with the profiles command in MacOS, use the following command:
```bash
profiles -I -F /path/to/profile.mobileconfig
```

### How can I remove a profile using profiles in MacOS?
To remove a profile using the profiles command in MacOS, you can use the following command:
```bash
profiles -R -p profile_identifier
```

### How do I get the details of a specific profile with profiles in MacOS?
To get the details of a specific profile using the profiles command in MacOS, execute the following command:
```bash
profiles -C -p profile_identifier
```

### How to show all user profiles using profiles in MacOS?
To show all user profiles in MacOS using the profiles command, run the following command:
```bash
profiles -L -v
```

### How do I manage restrictions with the profiles command in MacOS?
To manage restrictions with the profiles command in MacOS, you can use the following command:
```bash
profiles install -path /path/to/Restrictions.mobileconfig
```
## Applications of the profiles command

- Manage device profiles
- Install configuration profiles
- Remove configuration profiles
- List installed profiles
- View details of specific profiles
- Check the status of profiles
- Troubleshoot profile-related issues