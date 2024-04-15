---
title: lsregister MacOS Command Guide
description: Learn how to use the MacOS lsregister command to manage the Launch Services database efficiently.
---

The MacOS lsregister command allows users to manage the Launch Services database, which stores information about applications and file types. By using this command, you can reset the database, view its contents, and troubleshoot issues related to file associations. This powerful tool is especially useful for resolving problems with file types not opening in the expected application or applications not appearing as options when opening a specific file. With the lsregister command, you can ensure that your MacOS system functions smoothly and efficiently by maintaining and updating the Launch Services database accurately.
## lsregister Syntax:
```bash
lsregister [options] [parameters]
```

## Options:
| Option         | Description                               |
|----------------|-------------------------------------------|
| -kill          | Reset the Launch Services database.        |
| -lint          | Check files for registration issues.       |
| -dump          | Print registrations in a human-readable format. |
| -seed          | Seed the database with the defaults.       |
| -apps          | Display registered applications.           |

## Parameters:
| Parameter      | Description                               |
|----------------|-------------------------------------------|
| path           | Path to the file or directory to register. |
| bundleid       | Bundle ID of the application to register.  |
| path|path      | Register a file type and the app that should open it. |

:::caution
Exercise caution when using the lsregister command, as incorrect usage may result in the alteration of Launch Services database and potentially have unintended consequences on the system's file associations. It is recommended to proceed with caution and ensure the correct usage of options and parameters to avoid any system disruptions.
:::
## lsregister Command Samples:
### Register an Application
```bash
lsregister -register /Applications/MyApp.app
```
Registers the specified application with the Launch Services database.

### List all registered applications
```bash
lsregister -dump
```
Displays a list of all applications registered in the Launch Services database.

### Verify the registration of an application
```bash
lsregister -lint -f /Applications/MyApp.app
```
Checks and verifies the registration of the specified application in the Launch Services database.

### Show the default application for a specific file type
```bash
lsregister -dump | grep .txt
```
Finds and displays the default application associated with the ".txt" file type.

### Unregister an application
```bash
lsregister -u /Applications/MyApp.app
```
Unregisters the specified application from the Launch Services database.

### Rebuild the Launch Services database
```bash
lsregister -kill -seed
```
Rebuilds the Launch Services database, resolving issues related to application registrations.

### Open the registered app's URL on the App Store
```bash
lsregister -url telnet
```
Opens the URL of the registered application on the App Store, using the specified identifier.
:::tip
When using the lsregister command in MacOS, make sure to consult the man pages (`man lsregister`) for a comprehensive overview of all the available options and their functionalities.
:::

### How do I use lsregister in MacOS?
To use the lsregister command in MacOS, execute the following command:
```bash
lsregister -lint
```

### How can I rebuild the Launch Services database using lsregister in MacOS?
To rebuild the Launch Services database using lsregister in MacOS, run the following command:
```bash
lsregister -kill -seed -r
```

### How do I list all the applications registered with lsregister in MacOS?
To list all applications registered with lsregister in MacOS, use the following command:
```bash
lsregister -dump
```

### How can I register a specific application with lsregister in MacOS?
To register a specific application with lsregister in MacOS, use the following command:
```bash
lsregister -f /Path/To/Application.app
```

### How do I unregister a specific application with lsregister in MacOS?
To unregister a specific application with lsregister in MacOS, execute the following command:
```bash
lsregister -u /Path/To/Application.app
```

### How can I force lsregister to update all applications in MacOS?
To force lsregister to update all applications in MacOS, run the following command:
```bash
lsregister -f -R
```
## Applications of the lsregister command

- Updating the Launch Services database
- Managing file associations and default applications
- Troubleshooting issues with file open actions and associations
- Resetting the Launch Services database at system or user level
- Viewing information about registered applications and file types
- Triggering a re-registration of applications and file types
- Rebuilding the Launch Services database
- Clearing the Launch Services cache