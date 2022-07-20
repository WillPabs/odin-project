## Form Validation

#### Functions
- errorCheck(element)
    - check if element is valid with Validation API
    - if not valid call showError()
    - showError()
        - check element for validity errors and append message to error element
- checkPasswordsMatch()
    - check that password and confirmPassword elements are equal
- isEmail()

Email
- min 8 char length
- must be of type email

Country 
- must be letters only

Zip Code
- must be numbers only

Password & Confirm Password
- must match
- min 8 char length

Submit
- all fields must be populated
- all fields must be valid

Common Errors
- when input value is empty and isn't valid display error message