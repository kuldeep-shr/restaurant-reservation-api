# restaurant-reservation-api
Simple Rest API for restaurant reservation table


**To Start this API**

just type   **`npm start`**

**`Sample Input for booking`**

`
  
    "time": "2021-08-18 02:0:0.0",
    
    "name" : "Barney",
    
    "email" : "stinson@gmail.com",
    
    "phone" : "282983822"
  
`


**For Booking:**
  **`POST`** request
  **`URL`**  https://hobbit-cafe.herokuapp.com/api/book

**For Cancelled:**
  **`PATCH`** request
  
  **`QUERY PARAM`** phone={string}
  
  **`URL`**  https://hobbit-cafe.herokuapp.com/api/cancelled?phone=XXXXXXXX
  
  _`For Example:`_ 
     https://hobbit-cafe.herokuapp.com/api/cancelled?phone=987383728
