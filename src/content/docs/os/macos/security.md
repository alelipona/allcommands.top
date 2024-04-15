---
title: security command in MacOS
description: Manage user authentication, keychain settings, certificates, and more with the security command in MacOS.
---

The security command in MacOS allows users to interact with various security services, including managing keychain items, certificates, keys, and more. This command is essential for tasks such as changing keychain settings, manipulating certificates, and configuring the Keychain Access app. By using the security command in MacOS, users can efficiently handle user authentication, permissions, and security-related operations.
## security Syntax:
```bash
security [options] [command] [parameters]
```
## MacOS security Options:
| Option | Description                   |
|--------|-------------------------------|
| -h     | Show help message              |
| -v     | Verbose mode                   |
| -h     | Perform hash                   |
| -c     | Verify certificate             |
| -p     | Show private key               |
| -r     | Rollover keychain              |

## security Parameters:
| Parameter    | Description                     |
|--------------|---------------------------------|
| keychainName | Name of the keychain to use      |
| itemLabel    | Label of the item to operate on  |
| command      | Specific security command        |

:::caution
Exercise caution while using the `security` command as it deals with security-related operations on MacOS. Make sure to have proper permissions and handle sensitive information carefully.
:::
## How to use security command:
### Display Available Keychains
```bash
security list-keychains
```
Lists all available keychains on the system.

### Show Keychain Information
```bash
security show-keychain-info login.keychain
```
Displays detailed information about a specific keychain file (e.g., login.keychain).

### View Keychain Items
```bash
security find-internet-password -gs www.example.com
```
Searches and displays internet passwords stored for a specific website (e.g., www.example.com).

### Add a New Keychain Item
```bash
security add-generic-password -a user -s "Service" -w "Password"
```
Adds a new generic password item to the keychain with the specified username, service name, and password.

### Remove a Keychain Item
```bash
security delete-generic-password -s "Service"
```
Deletes a generic password item from the keychain based on the specified service name.

### Change Keychain Password
```bash
security set-key-partition-list -S apple-tool:,apple: -k newpassword login.keychain
```
Changes the password for a specific keychain file (e.g., login.keychain) to "newpassword".

### Export Keychain Items
```bash
security export -k login.keychain -t identities -o private.pem
```
Exports specific keychain items (identities) from a keychain file (e.g., login.keychain) to a private key file (e.g., private.pem).

### Import Keychain Items
```bash
security import private.pem -k login.keychain
```
Imports keychain items (e.g., from a private key file named private.pem) into an existing keychain file (e.g., login.keychain).
:::tip
When using the security command in MacOS, make sure to carefully review the options and values being provided to avoid unintended security risks or breaches.
:::

### How do I use security in MacOS?
To use the security command in MacOS, execute the following command:
```bash
security --option <value>
```

### How do I check the validity of a keychain in MacOS?
To check the validity of a keychain in MacOS using the security command, you can run:
```bash
security verify-keychain -k keychain_path
```

### How do I list the keychains in MacOS using security?
To list the keychains in MacOS using the security command, you can use the following command:
```bash
security list-keychains
```

### How can I find out the default keychain in MacOS with security?
To find out the default keychain in MacOS using the security command, you can run:
```bash
security default-keychain
```

### How do I view the contents of a specific keychain with security in MacOS?
To view the contents of a specific keychain in MacOS using the security command, you can use:
```bash
security dump-keychain keychain_path
```

### How can I add a keychain in MacOS using security?
You can add a keychain in MacOS using the security command by running:
```bash
security list-keychains -s new_keychain_path
```

### How do I delete a specific keychain in MacOS with security?
To delete a specific keychain in MacOS using the security command, you can execute:
```bash
security delete-keychain keychain_path
```

### How do I manage trust settings for certificates in MacOS using security?
To manage trust settings for certificates in MacOS with the security command, use:
```bash
security set-trust-settings -d certificate_path
```

### How can I find the identity preference for a key in MacOS with security?
To find the identity preference for a key in MacOS using security, you can enter:
```bash
security find-identity -vp key_name
```

## Applications of the security command

- Managing Keychains
- Checking Code Signatures
- Verifying System Integrity Protection (SIP)
- Generating Secure Tokens
- Managing certificates and keys
- Checking and managing X.509 certificate trust settings