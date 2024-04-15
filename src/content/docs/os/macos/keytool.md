---
title: keytool MacOS command
description: Official documentation for the MacOS keytool command, covering its usage, options, and examples.
---

The MacOS keytool command is a tool for managing keys and certificates. It allows users to generate key pairs, create certificate signing requests, import certificates, and more. Keytool is included in the Java Development Kit (JDK) and is commonly used for securing applications and network communications. By using keytool, users can perform various cryptographic operations and manage their digital certificates efficiently.

## keytool Syntax:
```bash
keytool [options] [command] [command_options]
```
## keytool Options:
| Option         | Description                                   |
|----------------|-----------------------------------------------|
| -genkey        | Generates a key pair and certificate request |
| -import        | Imports one or all entries from a file       |
| -export        | Exports a certificate                        |
| -list          | Lists entries in a keystore                  |

## Parameters:
| Parameter      | Description                                        |
|----------------|----------------------------------------------------|
| keystore       | Keystore file name                                 |
| alias          | Alias name for the keypair                         |
| storepass      | Password to access the keystore                    |
| keypass        | Password to access the key                         |
| file           | File name to import or export entries from/to      |
| destalias      | Destination alias name for an entry                |
## keytool Command Usage Examples:
### Generate a New Key Pair and Certificate
```bash
keytool -genkeypair -alias mykey -keyalg RSA -keysize 2048 -keystore keystore.jks -storepass password -validity 365 -dname "CN=MyKey,OU=MyOrg,O=MyOrg,L=MyCity,S=MyState,C=US"
```
Generates a new RSA key pair and self-signed certificate, and stores it in a keystore file with the specified parameters.

### List Keystore Contents
```bash
keytool -list -keystore keystore.jks -storepass password
```
Lists the contents of the specified keystore file by providing the keystore password.

### Export Certificate from Keystore
```bash
keytool -export -alias mykey -keystore keystore.jks -file mycertificate.cer -storepass password
```
Exports the certificate associated with the specified alias from the keystore into a separate certificate file.

### Import Trusted Certificate into Keystore
```bash
keytool -import -alias trustedcert -file trustedcert.cer -keystore keystore.jks -storepass password -trustcacerts
```
Imports a trusted certificate from an external file into the keystore and marks it as a CA certificate for trust.

### Delete a Keystore Entry
```bash
keytool -delete -alias mykey -keystore keystore.jks -storepass password
```
Deletes the entry with the specified alias from the keystore by providing the keystore password.
:::tip
When using the keytool command in MacOS, make sure to carefully follow the syntax and include all required options and arguments to avoid any errors or unexpected behavior.
:::

### How do I use keytool in MacOS?
To use the keytool command in bash, execute the following command:
```bash
keytool --genkey -alias mykey -keystore keystore.jks -keyalg RSA -keysize 2048 -validity 365
```

### How do I list the contents of a keystore file in MacOS?
To list the contents of a keystore file using keytool, use the following command:
```bash
keytool -list -v -keystore keystore.jks
```

### How do I generate a certificate signing request (CSR) using keytool in MacOS?
To generate a CSR using keytool in MacOS, run the following command:
```bash
keytool -certreq -alias mykey -keystore keystore.jks -file csr.pem
```

### How can I import a certificate into a keystore using keytool in MacOS?
You can import a certificate into a keystore by using the following keytool command:
```bash
keytool -import -alias mykey -file certificate.cer -keystore keystore.jks
```

### How do I delete an entry from a keystore using keytool in MacOS?
To delete an entry from a keystore in MacOS, use the following keytool command:
```bash
keytool -delete -alias mykey -keystore keystore.jks
```

### How can I change the keystore password using keytool in MacOS?
To change the password of a keystore in MacOS, execute the following command:
```bash
keytool -storepasswd -new newpassword -keystore keystore.jks
```

### How do I export a certificate from a keystore using keytool in MacOS?
To export a certificate from a keystore in MacOS, use the following keytool command:
```bash
keytool -export -alias mykey -file certificate.cer -keystore keystore.jks
```

### How can I generate a new keystore using keytool in MacOS?
To generate a new keystore in MacOS, run the following keytool command:
```bash
keytool -genkey -alias mykey -keystore newkeystore.jks -keyalg RSA -keysize 2048 -validity 365
```
## Applications of the keytool command

- Create a new keystore
- Generate a key pair
- Import certificates
- Export certificates
- Manage keystore entries
- View and verify certificates
- Generate Certificate Signing Requests (CSRs)
- Manage certificate chains