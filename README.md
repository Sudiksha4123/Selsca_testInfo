# ETL-PS-001
System for Effective Learning and School Complex Administration (SELSCA)

The module is completely built using MERN Stack.

The module has been built inorder to accept an Image file as input which can be cropped in the browser  and stored it in the database.

The module uses React-image-crop API to crop the image.

material UI has been used for Navigation Bar.

Software Dependencies and versions:

    "@emotion/react": "^11.10.4",
    "@emotion/styled": "^11.10.4",
    "@mui/material": "^5.10.4",
    "axios": "^0.27.2",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-image-crop": "8.6.12",
    "react-router-dom": "^6.3.0",
    "react-scripts": "4.0.0"
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "moongose": "^1.0.0",
    "nodemon": "^2.0.19"

running/set-up your module:

    open directory in cmd
    run cd Frontend in one terminal
    run npm install --legacy-peer-deps (to install depencencies)
    run npm start
    At the same time open another terminal
    run cd Backend
    run npm run dev
    open localhost 3000 in browser.

Below is the referance photos :

Below mentioned is the HOME page which contains the uploading Instructions,

![Screenshot (11)](https://user-images.githubusercontent.com/113330666/189598365-af434f56-8184-416e-b6ec-9fab5163e2e6.png)

And the upload page is below in which we can do drag and drop for the images and take the images from the file manager as well.

![Screenshot (9)](https://user-images.githubusercontent.com/113330666/189598805-63133418-c8ae-44cf-bb16-5651bcee81de.png)

![Screenshot (10)](https://user-images.githubusercontent.com/113330666/189598834-5cdbdc74-beaa-4122-bbb6-c3d03a0e0b5b.png)


The cropped image will be uploaded to the database along with the name given, if you want to connect this to your own mongo database change the port mentioned in backend app.js file and frontend App.js .
