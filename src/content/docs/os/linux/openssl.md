---
title: openssl command in Linux
description: OpenSSL is a powerful command-line tool for working with SSL/TLS protocols and certificates in Linux. It can be used for tasks such as generating cryptographic keys, creating CSRs, and testing SSL connections. With OpenSSL, users can also encrypt and decrypt files, create digital signatures, and perform various cryptographic operations efficiently.
---

OpenSSL is a versatile command-line tool in Linux for managing SSL/TLS protocols and certificates. It enables various cryptographic functions such as generating keys, creating CSRs, encrypting files, creating signatures, and testing SSL connections effectively.

## openssl Syntax:
```bash
openssl [options] [command] [command_options] [parameters]
```

## Linux openssl Options:
| Option  | Description                             |
|---------|-----------------------------------------|
| -help   | Display a list of all available options |
| -version| Display the openssl version             |
| -rand   | Use specified file or files as a source of random data                   |
| -engine | Specify an engine (by name) for use                                    |
| -config | Use the specified configuration file                                   |
| -c      | Output the certificate                                                 |
| -subject| Output the subject                                                    |
| -CAfile | Verify certificates against the list of trusted CA certificates in the file |
| -pubin  | Expect a public key in input file                                     |
| -pubout | Output a public key                                                    |
| -text   | Output the key or certificate in text form                             |

## openssl Parameters:
| Parameter      | Description                      |
|----------------|----------------------------------|
| input_file     | Input file for the command       |
| output_file    | Output file for the command      |
| certificate    | Certificate file for operations  |
| key_file       | Key file for operations          |
| message_digest | Message digest algorithm to use  |
| signature_file | Signature file for verification   |

:::caution
Exercise caution when using the openssl command, as it involves handling cryptographic operations which can result in data loss or security vulnerabilities if not used correctly.
:::
## How to use openssl command:

### Generate a new RSA private key
```bash
openssl genrsa -out private.key 2048
```
Generates a new 2048-bit RSA private key and saves it to a file named "private.key".

### Generate a new self-signed certificate
```bash
openssl req -new -x509 -key private.key -out certificate.crt -days 365
```
Creates a self-signed certificate using the private key "private.key" that is valid for 365 days.

### Encrypt a file using AES
```bash
openssl enc -aes-256-cbc -in file.txt -out encrypted.txt
```
Encrypts the contents of "file.txt" using AES-256-CBC and saves the encrypted data to "encrypted.txt".

### Decrypt a file using AES
```bash
openssl enc -d -aes-256-cbc -in encrypted.txt -out decrypted.txt
```
Decrypts the contents of "encrypted.txt" using AES-256-CBC and saves the decrypted data to "decrypted.txt".

### Create a SHA-256 hash of a file
```bash
openssl dgst -sha256 file.txt
```
Generates a SHA-256 hash of the file "file.txt".

### Verify the integrity of a file using a signature
```bash
openssl dgst -sha256 -verify public.pem -signature signature.sign file.txt
```
Verifies the integrity of "file.txt" by using a signature file "signature.sign" and a public key from "public.pem".

### Generate a CSR (Certificate Signing Request)
```bash
openssl req -new -key private.key -out csr.csr
```
Creates a Certificate Signing Request (CSR) using the private key "private.key" and saves it to "csr.csr".

### Convert a PEM file to DER format
```bash
openssl x509 -outform der -in certificate.pem -out certificate.der
```
Converts a certificate file "certificate.pem" from PEM format to DER format and saves it as "certificate.der".
:::tip
When using the openssl command in Linux, make sure to familiarize yourself with the various options and parameters available for different operations. Reading the documentation or seeking help online can greatly assist in effectively utilizing the power of openssl for encryption, decryption, and various other cryptographic tasks.
:::

### How do I use openssl in bash?
To use the openssl command in Linux, execute the following command:
```bash
openssl --option <value>
```

### What is the command to generate a new RSA key pair using openssl in Linux?
To generate a new RSA key pair using openssl in Linux, use the following command:
```bash
openssl genrsa -out private.pem 2048
```

### How can I create a self-signed SSL certificate with openssl in Linux?
To create a self-signed SSL certificate using openssl in Linux, run the following command:
```bash
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
```

### How do I encrypt a file with a password using openssl in Linux?
To encrypt a file with a password using openssl in Linux, use the following command:
```bash
openssl enc -aes-256-cbc -salt -in input.txt -out output.enc
```

### What is the command to decrypt a file that was encrypted with openssl in Linux?
To decrypt a file that was encrypted using openssl in Linux, you can use the following command:
```bash
openssl enc -d -aes-256-cbc -in output.enc -out decrypted.txt
```

### How can I convert a certificate from PEM to DER format using openssl in Linux?
To convert a certificate from PEM to DER format using openssl in Linux, execute the following command:
```bash
openssl x509 -outform der -in certificate.pem -out certificate.der
```

### How do I extract the public key from a certificate using openssl in Linux?
To extract the public key from a certificate using openssl in Linux, run the following command:
```bash
openssl x509 -in certificate.pem -pubkey -noout -out public_key.pem
```

### What command can I use to create a SHA-256 hash of a file using openssl in Linux?
To create a SHA-256 hash of a file using openssl in Linux, use the following command:
```bash
openssl dgst -sha256 filename.txt
```

### How can I verify an RSA signature using openssl in Linux?
To verify an RSA signature using openssl in Linux, you can run the following command:
```bash
openssl rsautl -verify -in signature.bin -inkey public_key.pem -pubin
```

## Applications of the openssl command

- Creating and managing SSL/TLS certificates
- Encrypting and decrypting files
- Generating cryptographic keys
- Creating secure connections for network communication
- Testing SSL/TLS security of servers
- Creating and verifying digital signatures
- Creating and managing CSR (Certificate Signing Request)
- Converting certificate formats