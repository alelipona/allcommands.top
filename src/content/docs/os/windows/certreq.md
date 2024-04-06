---
title: CERTREQ Windows Command Guide
description: Learn how to use the Windows certreq command to manage certificates efficiently.
---

The Windows certreq command is a powerful tool for managing certificates. It allows users to create and submit certificate requests, retrieve and install response files, accept certificate enrollment policy information, and more. With certreq, users can generate a certificate request based on the information provided in a .inf file, submit the request to a certification authority, retrieve the resulting certificate, accept and install the certificate without manual intervention, and perform various other certificate management tasks. Certreq offers a range of options and parameters that allow users to customize and control the certificate request process. By using the certreq command effectively, users can streamline the management of certificates on their Windows systems and ensure secure and efficient certificate operations.
## CERTREQ Syntax:
```cmd
certreq [Options] [Parameters]
```
## Options:
| Option      | Description                                          |
|-------------|------------------------------------------------------|
| -accept     | Accept a certificate response file                   |
| -retrieve   | Retrieve a pending certificate request               |
| -submit     | Submit a certificate request file to a certification authority |
| -new        | Create a new request file                           |
| -?          | Display command usage                                |

## Parameters:
| Parameter         | Description                                          |
|-------------------|------------------------------------------------------|
| RequestFile       | Specifies the request file                           |
| ResponseFile      | Specifies the response file                          |
| ConfigFile        | Specifies the configuration file                      |

:::caution
Exercise caution when using the certreq command, as it deals with sensitive certificate operations. Double-check all inputs and ensure that you have the necessary permissions before executing any commands. Incorrect usage can lead to security vulnerabilities or certificate issues.
:::
## CERTREQ Command Samples:
### Generate a Certificate Request
```cmd
certreq -new request.inf request.req
```
Generates a new certificate request based on the information in the request.inf file and saves it as request.req.

### View the Contents of a Certificate Request
```cmd
certreq -dump request.req
```
Displays the details and contents of the certificate request saved in the request.req file.

### Submit a Certificate Request
```cmd
certreq -submit -attrib "CertificateTemplate:WebServer" request.req
```
Submits the certificate request in the request.req file for processing, specifying it to be based on the "WebServer" template.

### Install a Certificate Response
```cmd
certreq -accept response123.cer
```
Installs the certificate response saved as response123.cer into the local computer's certificate store.

### Retrieve Pending Certificate Requests
```cmd
certreq -retrieve 3
```
Retrieves the pending certificate request with the ID "3" from the CA server for further processing.
:::tip
When using the certreq command in CMD, make sure to provide the necessary options and values based on your specific certificate request requirements. Double-check the syntax and parameters to avoid any errors in the command execution.
:::

## CERTREQ FAQ:
### How do I use certreq in CMD?
To use the certreq command in CMD, execute the following command:
```cmd
certreq --new C:\Path\to\Request.inf C:\Path\to\Certificate.cer
```

### How do I submit a certificate request using certreq in CMD?
To submit a certificate request using certreq in CMD, run the following command:
```cmd
certreq -submit -attrib "CertificateTemplate:TemplateName" C:\Path\to\Request.req C:\Path\to\Response.cer
```

### How can I display the contents of a certificate request file with certreq in CMD?
To display the contents of a certificate request file using certreq in CMD, use the following command:
```cmd
certreq -dump C:\Path\to\Request.req
```

### How do I install a certificate response using certreq in CMD?
To install a certificate response using certreq in CMD, enter the following command:
```cmd
certreq -install -config "ServerName\CAName" C:\Path\to\Response.cer
```

### How can I generate a new private key and certificate request using certreq in CMD?
To generate a new private key and certificate request using certreq in CMD, use the following command:
```cmd
certreq -new C:\Path\to\Request.inf C:\Path\to\NewRequest.req
```

### How do I retrieve and install the CA certificates and root CA certificates into the system store using certreq in CMD?
To retrieve and install the CA certificates and root CA certificates into the system store with certreq in CMD, run the command below:
```cmd
certreq -path -retrieve -f C:\Path\to\CAFriendlyName.crt C:\Path\to\OutputCert.cer
```
## Applications of the CERTREQ Command

- Generate certificate requests
- Retrieve certificates from a certification authority
- Accept certificate responses and install certificates in the registry
- Create new public and private key pairs