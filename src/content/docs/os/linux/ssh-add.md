---
title: ssh-add Linux Command Guide
description: Learn how to use the Linux ssh-add command to add SSH private keys to the authentication agent securely.
---

The Linux ssh-add command is used to add private keys to the SSH authentication agent, allowing secure and convenient access to remote servers without entering passwords repeatedly. This command eliminates the need to re-enter private key passphrases every time an SSH connection is made, improving efficiency and security in managing SSH keys. By using ssh-add, users can easily add, list, and remove keys from the authentication agent, streamlining the SSH key management process.
## ssh-add Syntax:
```bash
ssh-add [options] [file]
```

## Options:
| Option         | Description                              |
|----------------|------------------------------------------|
| -l             | Lists fingerprints of all identities     |
| -L             | Prints public key for all identities     |
| -E hash        | Specifies the hash algorithm for keys    |
| -K             | Loads the default keys from macOS keychain|
| -k             | Prompts for passphrase and adds key     |
| -q             | Suppresses all warnings and errors      |
| -s             | Saves the passphrase in the keychain    |
| -t lifetime    | Sets default cache lifetime in seconds  |
| -x             | Locks the agent with a passphrase       |
| -X             | Unlocks the agent                       |
| -c             | Enables confirmation for use of keys    |
| -d             | Deletes the specified identities        |
| -e pkcs11      | Lists keys served by the pkcs11         |
| -s reader slot | Adds a smartcard key                     |
| -D             | Deletes all identities                   |
| -U smartcard   | Removes all smartcard keys               |
| -u             | Removes all identities from the agent    |

## Parameters:
| Parameter   | Description                                      |
|-------------|--------------------------------------------------|
| file        | Specifies an alternative to the default file path|

:::caution
Exercise caution when using the ssh-add command as it involves managing sensitive cryptographic keys. Make sure to protect your private keys and use appropriate options to prevent accidental deletion or exposure of these keys.
:::
## ssh-add Command Samples:
### Add a specific private key to the SSH agent
```bash
ssh-add ~/.ssh/id_rsa
```
This command adds the private key "id_rsa" to the SSH agent.

### Add all private keys in the default directory to the SSH agent
```bash
ssh-add
```
This command automatically adds all private keys found in the default directory (~/.ssh) to the SSH agent.

### Specify an identity file to add to the SSH agent
```bash
ssh-add -i /path/to/private_key.pem
```
The command adds a specific private key file ("private_key.pem") to the SSH agent.

### Display currently added identities in the SSH agent
```bash
ssh-add -l
```
This command lists the fingerprints of all identities currently represented by the SSH agent.

### Remove a specific key from the SSH agent
```bash
ssh-add -d /path/to/private_key
```
This command removes a specific private key from the SSH agent.

### Remove all identities from the SSH agent
```bash
ssh-add -D
```
This command removes all identities from the SSH agent.

### Add a key without using a passphrase
```bash
ssh-add -K ~/.ssh/private_key
```
This command adds a private key to the SSH agent without prompting for a passphrase.
:::tip
When using the ssh-add command in Linux, make sure to add the necessary SSH keys to your SSH agent to facilitate secure and seamless authentication processes.
:::

## ssh-add FAQ:
### How do I add a specific SSH key using ssh-add in Linux?
To add a specific SSH key using ssh-add in Linux, use the following command:
```bash
ssh-add ~/.ssh/id_rsa
```

### How do I list the keys currently added to the SSH agent with ssh-add in Linux?
To list the keys currently added to the SSH agent with ssh-add in Linux, use the following command:
```bash
ssh-add -l
```

### How do I remove all added keys from the SSH agent using ssh-add in Linux?
To remove all added keys from the SSH agent using ssh-add in Linux, use the following command:
```bash
ssh-add -D
```

### How do I set a specific lifetime for an added SSH key with ssh-add in Linux?
To set a specific lifetime for an added SSH key with ssh-add in Linux, use the following command:
```bash
ssh-add -t 3600 ~/.ssh/id_rsa
```

### How do I display verbose output when adding an SSH key with ssh-add in Linux?
To display verbose output when adding an SSH key with ssh-add in Linux, use the following command:
```bash
ssh-add -v ~/.ssh/id_rsa
```

### How do I add a passphrase-protected SSH key without prompting for its passphrase every time with ssh-add in Linux?
To add a passphrase-protected SSH key without prompting for its passphrase every time with ssh-add in Linux, use the following command:
```bash
ssh-add -K ~/.ssh/id_rsa
```
## Applications of the ssh-add command

- To add private keys to the SSH authentication agent
- To manage multiple private keys for SSH connections
- To enable seamless and secure authentication without password prompts
- To easily authenticate to remote servers with SSH keys