---
title: What is LICENSINGDIAG Windows command?
description: Get detailed insights into your Windows licensing with the LICENSINGDIAG command.
---

The LICENSINGDIAG command in Windows provides comprehensive information about the licensing status and activation of your Windows operating system.

## LICENSINGDIAG Syntax:
```cmd
licensingdiag [/?]
```

## LICENSINGDIAG Options:
| Option        | Description                    |
|---------------|--------------------------------|
| /?            | Displays help for licensingdiag |

:::caution
Use the licensingdiag command with caution as it has the potential to provide sensitive information about the licensing status of the system which may affect configuration or licensing conditions.
:::

## Parameters:
| Parameter      | Description                                    |
|----------------|------------------------------------------------|
| None           | No parameters are required for licensingdiag    |
## LICENSINGDIAG Command Usage Examples:
### Generate Licensing Report
```cmd
licensingdiag /report C:\Reports\LicensingReport.txt
```
Generates a licensing report and saves it to the specified file path.

### Check Service Status
```cmd
licensingdiag /query
```
Checks the status of the Windows Licensing service.

### Verify Licensing Store
```cmd
licensingdiag /validate
```
Verifies the integrity of the licensing store on the system.

### Collect Registration Service Logs
```cmd
licensingdiag /log C:\Logs\LicensingLogs
```
Collects logs related to the Registration Service and saves them to the specified folder.

### Run Extended Diagnostics
```cmd
licensingdiag /v
```
Runs the Licensing Diagnosis tool in verbose mode to provide detailed information for troubleshooting.
:::tip
When using the licensingdiag command in Windows, make sure to run CMD as an administrator to avoid any permission-related issues.
:::

### How do I use licensingdiag in Windows?
To use the licensingdiag command in CMD, execute the following command:
```cmd
licensingdiag --kf
```

### What are the available options with licensingdiag in Windows?
You can use licensingdiag command with various options such as --pcf, --err, and --v.
```cmd
licensingdiag --err
```

### How can I generate a report with licensingdiag in Windows?
To generate a report using licensingdiag command, you can use the --report option.
```cmd
licensingdiag --report
```

### How to view the help documentation for licensingdiag in Windows?
To view the help documentation for licensingdiag command, use the --help option.
```cmd
licensingdiag --help
```

### Can licensingdiag command be used to gather information about license activations in Windows?
Yes, you can use the licensingdiag command to gather information about license activations with the --oa option.
```cmd
licensingdiag --oa
```

### How to troubleshoot licensing issues using licensingdiag in Windows?
You can troubleshoot licensing issues by using the --diag option with the licensingdiag command.
```cmd
licensingdiag --diag
```

### Is it possible to reset licensing information using licensingdiag in Windows?
Yes, you can reset licensing information by using the --reset option with the licensingdiag command.
```cmd
licensingdiag --reset
```

## Applications of the LICENSINGDIAG Command

- Troubleshoot licensing issues
- Gather information about license status
- Validate and diagnose licensing configurations
- Check activation status