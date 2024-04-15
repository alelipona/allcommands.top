---
title: MacOS openssl command
description: Learn how to use the MacOS openssl command for secure communication and data encryption. Explore the various options and features available.
---

The MacOS openssl command allows users to perform a wide range of cryptographic operations, such as generating RSA key pairs, creating digital signatures, and encrypting data. It enables secure communication over networks by implementing various encryption algorithms like AES, DES, and RSA. With openssl, users can also verify the authenticity of digital certificates, convert certificate formats, and troubleshoot SSL/TLS connections. This powerful tool provides a comprehensive suite of functions for managing cryptographic tasks on MacOS systems, making it indispensable for secure data transmission and encryption.
## openssl Syntax:
```bash
openssl [command] [options] [parameters]
```

## Options:
| Option                  | Description                               |
|-------------------------|-------------------------------------------|
| -help                   | Display this summary of options           |
| -ciphers                | List of all supported ciphers             |
| -rand                   | Load the file(s) into the random number generator |
| -state                  | Print the SSL session state               |
| -version                | Display version information               |

## Parameters:
| Parameter               | Description                               |
|-------------------------|-------------------------------------------|
| inputfile               | Input file for reading data               |
| outputfile              | Output file for writing data              |
| certificatefile         | File containing one or more certificates  |
| privatekeyfile          | File containing a private key             |
| ciphersuite             | Cipher suite to use for the connection    |
| destination             | Where to send the output                  |

:::caution
Be cautious when using the `openssl` command as it can manipulate sensitive cryptographic information. Make sure to protect private keys and use secure ciphers to avoid security vulnerabilities.
:::
## openssl Usage:
### Generate a new RSA private key and certificate
```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```
This command generates a new RSA private key and self-signed certificate, storing the key in "key.pem" and certificate in "cert.pem", valid for 365 days.

### Verify the fingerprint of a certificate
```bash
openssl x509 -noout -fingerprint -in cert.pem
```
Verifies the fingerprint of a certificate file "cert.pem" without displaying the certificate details.

### Encrypt a file using AES-256-CBC
```bash
openssl enc -aes-256-cbc -salt -in plaintext.txt -out ciphertext.enc -pass pass:mypassword
```
Encrypts the file "plaintext.txt" using AES-256-CBC algorithm, storing the result in "ciphertext.enc" with a password "mypassword".

### Decrypt a file using AES-256-CBC
```bash
openssl enc -d -aes-256-cbc -in ciphertext.enc -out plaintext_decrypted.txt -pass pass:mypassword
```
Decrypts the file "ciphertext.enc" previously encrypted with AES-256-CBC, saving the decrypted content in "plaintext_decrypted.txt" with the correct password "mypassword".
:::tip
When using the openssl command in MacOS, ensure you have the necessary permissions to perform the desired operations, especially when handling sensitive data or generating cryptographic keys.
:::

### How do I generate a new RSA private key using openssl in MacOS?
To generate a new RSA private key using openssl in MacOS, execute the following command:
```bash
openssl genrsa -out private_key.pem 2048
```

### How do I create a self-signed SSL certificate using openssl in MacOS?
To create a self-signed SSL certificate using openssl in MacOS, execute the following command:
```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
```

### How do I encrypt a file using openssl in MacOS?
To encrypt a file using openssl in MacOS, execute the following command:
```bash
openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.txt
```

### How do I decrypt a file using openssl in MacOS?
To decrypt a file using openssl in MacOS, execute the following command:
```bash
openssl enc -d -aes-256-cbc -in encrypted.txt -out decrypted.txt
```

### How do I generate a SHA-256 hash of a file using openssl in MacOS?
To generate a SHA-256 hash of a file using openssl in MacOS, execute the following command:
```bash
openssl dgst -sha256 filename.txt
```

### How do I convert a certificate file from PEM to PKCS#12 format using openssl in MacOS?
To convert a certificate file from PEM to PKCS#12 format using openssl in MacOS, execute the following command:
```bash
openssl pkcs12 -export -out certificate.pfx -inkey private_key.pem -in cert.pem
```

### How do I verify the digital signature of a file using openssl in MacOS?
To verify the digital signature of a file using openssl in MacOS, execute the following command:
```bash
openssl dgst -sha256 -verify public_key.pem -signature signature.bin file.txt
```

## Applications of the openssl command

1. Check SSL certificate expiration date: `openssl x509 -enddate -noout -in certificate.crt`
2. Generate a new private key and certificate signing request (CSR): `openssl req -out CSR.csr -new -newkey rsa:2048 -nodes -keyout privateKey.key`
3. Generate a self-signed certificate: `openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.crt`
4. Verify a certificate chain: `openssl verify -CAfile ca-bundle.crt certificate.crt`
5. Encrypt a file using a password: `openssl enc -aes-256-cbc -salt -in file.txt -out file.txt.enc`
6. Decrypt an encrypted file: `openssl enc -d -aes-256-cbc -in file.txt.enc -out file.txt`
7. Convert a certificate from PEM to DER format: `openssl x509 -outform der -in certificate.pem -out certificate.der`
8. Create a hash digest of a file: `openssl dgst -sha256 file.txt`