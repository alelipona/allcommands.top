---
title: What is CERTUTIL Windows command?
description: The Windows certutil command is a powerful tool for managing certificates and cryptographic services on Windows operating systems.
---

The `certutil` command in Windows is a versatile tool that allows users to perform various operations related to certificates and cryptographic services. From generating key pairs to retrieving certificate information, `certutil` is an essential command-line utility for managing certificates on Windows operating systems. With `certutil`, users can export and import certificates, verify digital signatures, decode certificates, and much more. This command provides a wide range of functionalities for handling certificates efficiently and securely.
## CERTUTIL Syntax:
```cmd
certutil [Options] [Parameters]
```

:::caution
Exercise caution when using the certutil command as it can have implications on the system's security and cryptographic operations.
:::

## CERTUTIL Options:
| Option      | Description                                     |
|-------------|-------------------------------------------------|
| -addstore   | Add certificate to the specified store          |
| -delstore   | Delete certificate from the specified store      |
| -?          | Help on commands                                |
| -?1         | Help on expanded set of commands                |
| -importPFX  | Import PFX file into a certificate store         |
| -exportPFX  | Export PFX file from a certificate store         |
| -view       | View a certificate or CRL                       |
| -getreg     | Query registry values or certificate locations   |

## Parameters:
| Parameter     | Description                                  |
|---------------|----------------------------------------------|
| filename      | The path to the file containing certificates |
| storename     | The name of the certificate store             |
| -v            | Verify certificate chain                      |
| -f            | Force overwrite when importing certificates   |
## CERTUTIL Command Usage Examples:
### Check Certificate Details
```cmd
certutil -dump certificate.cer
```
Displays detailed information about a specific certificate stored in a file.

### Export Certificate to a File
```cmd
certutil -exportPFX -p password -f certificate.cer exportedCertificate.pfx
```
Exports a certificate from a file to a PFX file using a specified password for protection.

### Install Root Certificate
```cmd
certutil -addstore ROOT certificate.cer
```
Installs a root certificate into the trusted root certification authorities store.

### Verify Certificate Chain
```cmd
certutil -verify -urlfetch certificate.cer
```
Checks and verifies the certificate chain of a specified certificate using URL fetching.

### List Certificate Templates
```cmd
certutil -template
```
Displays a list of available certificate templates on the local system.
:::tip
When using the certutil command in CMD, ensure you have the necessary permissions to perform the requested actions, as it can manipulate certificates and certificate stores, which are critical components of the Windows operating system. Always double-check the syntax of your commands to prevent inadvertently making changes to certificates or the certificate store.
:::

### How do I use certutil in CMD?
To use the certutil command in CMD, execute the following command:
```cmd
certutil -hashfile C:\Path\To\File.txt MD5
```

### What is the command to decode a base64 encoded file using certutil in CMD?
To decode a base64 encoded file using certutil in CMD, use the following command:
```cmd
certutil -decode C:\Path\To\EncodedFile.b64 C:\Path\To\DecodedFile.txt
```

### How can I view the details of a certificate file using certutil in CMD?
To view the details of a certificate file using certutil in CMD, run the following command:
```cmd
certutil -dump C:\Path\To\Certificate.cer
```

### How do I export a certificate from a certificate store using certutil in CMD?
To export a certificate from a certificate store using certutil in CMD, use the command:
```cmd
certutil -store -export -p "Password" "Thumbprint" "C:\Path\To\ExportedCert.cer"
```

### What is the command to install a certificate to a certificate store using certutil in CMD?
To install a certificate to a certificate store using certutil in CMD, use the following command:
```cmd
certutil -f -addstore "TrustedPublisher" "C:\Path\To\Certificate.cer"
```

### How can I retrieve a list of installed certificates from a specific store using certutil in CMD?
To retrieve a list of installed certificates from a specific store using certutil in CMD, run the following command:
```cmd
certutil -store "TrustedPublisher"
```

### What is the command to check the certification authority information using certutil in CMD?
To check the certification authority information using certutil in CMD, execute the following command:
```cmd
certutil -config - -ping
```

### How do I verify an issued certificate chain using certutil in CMD?
To verify an issued certificate chain using certutil in CMD, use the following command:
```cmd
certutil -verify -urlfetch C:\Path\To\CertificateChain.p7b
```
## Applications of the CERTUTIL Command

- Encoding and Decoding data in various formats
- File Verification
- Certificate services management
- Cryptographic operations
- Key storage and retrieval
- PKI (Public Key Infrastructure) operations