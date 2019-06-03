# YAPE APP WITH NODEJS AND DOCKER

## Yape
Yape is the application of Banco de Credito del Peru, authorizing the configuration of your credit card with your telephone number you could pay or receive money to your account, it is much faster and more accessible than bank transfers. This is a small demo that will be described in the requirements and functionalities.

## Requirements and functionalities
+ Screen 1:
  - Must have a carrousel of icons and a registration button
+ Screen 2:
  - Must be able to enter a phone and accept the terms and conditions
  - The continue button is only activated when a phone is entered and the terms accepted
  - When you click continue, the system must send a request to the API to register the phone and generate the code
  - Keep in mind that the API does not allow more than 2 records of the same phone at the same time
+ Screen 3:
  - You must validate the previously generated code in the previous screen, the code is sent through the API.
  - When entering a valid code the screen, jump to the next screen.
  - There must be a counter that at 21 seconds calls the API to enter a new code and invalidate the previous one.
+ Screen 4:
  - Must be able to enter user data.
  - Only when all the data is entered should the button be activated.
  - Must have basic validations (email) and the password is secure.
  - When you click on the button, you must send the data to the API and when you return, you must go to screen 5.
+ Screen 5:
  - Within 3 seconds of displaying this screen, you must move on to the next one.
+ Screen 6:
  - Must be able to register a new credit card.
  - You should only be able to enter 16 numbers in the card input.
  - You should only be able to enter months (01 to 12).
  - You should only be able to enter future years (from 19 to 26).
  - The registration button is only activated if all fields have been entered.
+ Screen 7
  - It is the final screen where you arrive after registration. This screen does not have active functionality.

## Deploy Docker
1. Build
`docker-compose build`
2. Up
`docker-compose up`
3. Down
`docker-compose down`
