---
title: codesign MacOS command
description: Learn how to use the codesign command in MacOS to sign, verify, and update code signatures for applications and files.
---

The codesign command in MacOS is used to sign, verify, and update code signatures for applications and files. It is a powerful tool for ensuring the integrity and security of software on the Mac platform. With codesign, developers can apply digital signatures to their apps, verifying their authenticity and protecting users from tampered or malicious software. This command helps to prevent unauthorized modifications to code and ensures that users can trust the software they install. By signing applications and files with codesign, developers can create a secure and reliable user experience for MacOS users.

## codesign Syntax:
```bash
codesign [options] [parameters]
```

## Options:
| Option          | Description                                       |
|-----------------|---------------------------------------------------|
| -s              | Specify the identity to use for signing           |
| -f              | Force the signing operation                       |
| -v              | Display verbose output                            |
| -o              | Override the output path for the signed file      |
| -h              | Print the full help                              |

## Parameters:
| Parameter       | Description                                       |
|-----------------|---------------------------------------------------|
| path            | Path to the binary or application to be signed    |

:::caution
Exercise caution when using the `codesign` command as incorrect usage can result in the file not being signed properly or in unexpected behavior of the signed file.
:::
## codesign bash Examples:
### Sign an Application Bundle
```bash
codesign -s "Developer ID Application: Your Name" /path/to/MyApp.app
```
Signs an application bundle with a specific Developer ID.

### Verify the Signature of an Application Bundle
```bash
codesign --verify --verbose /path/to/MyApp.app
```
Verifies the digital signature of an application bundle.

### Remove the Signature from an Application Bundle
```bash
codesign --remove-signature /path/to/MyApp.app
```
Removes the digital signature from an application bundle.

### Display Information about the Signature of an Application Bundle
```bash
codesign -dvv /path/to/MyApp.app
```
Displays detailed information about the signature of an application bundle.

### Re-sign an Application Bundle with a New Certificate
```bash
codesign -s "Developer ID Application: New Name" /path/to/MyApp.app
```
Re-signs an application bundle with a new Developer ID.

### Sign an Installer Package
```bash
codesign --deep -s "Developer ID Installer: Your Name" /path/to/MyPackage.pkg
```
Signs an installer package with a specific Developer ID.
:::tip
When using the codesign command in MacOS, make sure to carefully review the options and values you provide to ensure that the code signing process is performed correctly and securely.
:::

### How do I use codesign in MacOS?
To use the codesign command in MacOS, execute the following command:
```bash
codesign --sign "Developer ID Application: Company Name" /path/to/application.app
```

### What is the purpose of the codesign command in MacOS?
The codesign command in MacOS is used to digitally sign executable files and applications to ensure they have not been modified or tampered with since they were signed.

### How can I verify the code signature of a file using codesign in MacOS?
You can verify the code signature of a file in MacOS by running the following command:
```bash
codesign --verify --verbose /path/to/file
```

### How do I list the designated requirements of a signed code in MacOS using codesign?
To list the designated requirements of a signed code in MacOS, you can use the following command:
```bash
codesign --display --requirements - /path/to/file
```

### Can I remove the code signature from a file using the codesign command in MacOS?
Yes, you can remove the code signature from a file in MacOS by executing the following command:
```bash
codesign --remove /path/to/file
```

### How can I display information about a signed code using the codesign command in MacOS?
You can display information about a signed code in MacOS by running the following command:
```bash
codesign --display --verbose=4 /path/to/file
```

### What is the difference between ad-hoc and manual code signing with codesign in MacOS?
Ad-hoc code signing allows for temporary signing of binaries for local or personal use, while manual code signing provides a stronger level of authentication for distributing applications through official channels.

### How do I timestamp a signed code using the codesign command in MacOS?
To timestamp a signed code in MacOS, you can use the following command:
```bash
codesign --timestamp /path/to/file
```

## Applications of the codesign command

- Verifying the code integrity and authenticity of a software application
- Ensuring the software has not been tampered with or modified
- Checking if the software has been signed with a valid certificate
- Identifying the developer or source of the software
- Allowing the software to run without security warnings or restrictions
- Verifying that the software meets the security standards of the operating system