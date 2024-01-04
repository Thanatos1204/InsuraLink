### we have deployed our backend on google cloud run :

```https://backend-alisdej34q-uc.a.run.app```

We have currently 5 api :

At Client Form Submission : 

``` https://backend-alisdej34q-uc.a.run.app/adduserdetails ```

At Viewing of Documents on Broker Dashboard : 

```https://backend-alisdej34q-uc.a.run.app/getuserdetails```

Generation of Certificate by Insurance Agency : 

```https://backend-alisdej34q-uc.a.run.app/getusercertificate```

Revokment of Certificate by Insurance Agency : 

``` https://backend-alisdej34q-uc.a.run.app/revokecertificate ```

Fetch UserIPFS hash of Certificate from Polygon : 

```https://backend-alisdej34q-uc.a.run.app/fetchUserCertificate```


## To Setup Backend Locally and Test : 

First  of all ```cd Backend ```

Run ```npm i ```  or  ```npm i --force```

### You Will need some api keys  

Paste them in the ```.env ```  file  
1.  Your Metamask Wallet Private key Also Make Sure To Be on Polygon Mumbai Testnet and have some faucets for it.

You can get Faucet from below Links, Just Use any one it is enough : 

[Polygon Faucet ](https://faucet.polygon.technology/)  0.2 Matic 

[Alchemy Faucet ](https://mumbaifaucet.com/) 0.5 Matic 





2. Pinata JWT Token ( a long string you can easily generate them on  Pinata Website )



![Image](https://miro.medium.com/v2/resize:fit:1400/1*ZAxusz6ry4QmQspUzgh7jw@2x.png)



### Once All the Node Packages have been installed and API Keys have been Setup You can test our Backend Using Postman or Make  API Calls from Frontend 

Use ```http://localhost:8080``` instead of ```https://backend-alisdej34q-uc.a.run.app ```

Rest API Calls Remains same as abve just append like ```http://localhost:8080/adduserdetails ```


### Some Important Points while Testing As You can see from index.js file we are using req.body to use it in our functions so some of them required are 

``` localhost:8080/adduserdetails  ```

A sample  Req.body for every api call to test them locally, But while making call from frontend this data will be sent in req.body itself  You can change the json data 

### In Below useRef  is nothing but user-Reference-ID or UID

```json
{"body":{
  "useRef" : "CXq2HyZKvPNIQHbnyBBUr8kKa9E2", 
  "jsonData" : {
    "PersonalInformation": {
      "FullName": "John Doe",
      "DateOfBirth": "1985-07-15",
      "Gender": "Male",
      "Nationality": "US",
      "MaritalStatus": "Single"
    },
    "ContactInformation": {
      "EmailAddress": "johndoe@example.com",
      "PhoneNumbers": ["123-456-7890", "987-654-3210"],
      "MailingAddress": {
        "Street": "123 Main St",
        "City": "Anytown",
        "State": "CA",
        "PostalCode": "12345"
      }
    },
    "IdentificationDetails": {
      "GovernmentID": {
        "Passport": "AB123456",
        "DriverLicense": "DL987654"
      },
      "TaxIdentificationNumber": "123-45-6789"
    },
    "FinancialInformation": {
      "BankAccountDetails": {
        "AccountNumber": "1234567890",
        "BankName": "Example Bank",
        "PaymentMethodPreferences": ["Credit Card", "ACH"]
      }
    },
    "HealthDetails": {
      "MedicalHistory": "No major medical history",
      "Allergies": ["Peanuts", "Pollens"],
      "PreExistingConditions": ["High Blood Pressure"]
    },
    "OccupationAndEmploymentInformation": {
      "Occupation": "Software Engineer",
      "EmployerDetails": {
        "CompanyName": "XYZ Corp",
        "Address": "456 Tech Ave, TechCity, CA"
      }
    },
    "EmergencyContact": {
      "Name": "Jane Smith",
      "RelationshipWithClient": "Friend",
      "ContactNumber": "555-123-4567"
    },
    "AuthenticationData": {
      "Username": "johndoe123",
      "Password": "examplepassword123"
    }
  }
  
}}
```


### ```https://backend-alisdej34q-uc.a.run.app/getuserdetails```

body : 

```json 
{
    "useRef" : "CXq2HyZKvPNIQHbnyBBUr8kKa9E2"
}
```

## For Certificate Generation and Revoke we are using same Body 

These API Require 3 arguments 
Name , Email , useRef (userReferenceID)

### ```https://backend-alisdej34q-uc.a.run.app/getusercertificate```
 


### ``` https://backend-alisdej34q-uc.a.run.app/revokecertificate```  

Body : 



```json
 {
    "body" : {
    "name" : "User name ",
    "useRef" : "CXq2HyZKvPNIQHbnyBBUr8kKa9E2",
    "email" : "Bhavikpunmiya@gmail.com"
}
}
```


## For Getting the Certificate Hash 

It is used on Client DashBoard again We will need to this to view the certificate 

```https://backend-alisdej34q-uc.a.run.app//fetchUserCertificate```


```json
{
    "useRef" : "CXq2HyZKvPNIQHbnyBBUr8kKa9E2"
}
```

