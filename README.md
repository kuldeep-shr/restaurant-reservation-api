# restaurant-reservation-api
Simple Rest API for restaurant reservation table


**To Start this API**

just type   **`npm start`**


**For Booking:**
  **`POST`** request
  **`URL`**  https://hobbit-cafe.herokuapp.com/api/book

**For Cancelled:**
  **`PATCH`** request
  **`QUERY PARAM`** phone={string}
  **`URL`**  https://hobbit-cafe.herokuapp.com/api/cancelled?phone=XXXXXXXX
  
  _`For Example:`_ 
     https://hobbit-cafe.herokuapp.com/api/cancelled?phone=987383728

  **`Response:`** `"
    {
      "status": true,
      "msg": "We have cancelled your Table for Sun Aug 08 2021 12:00:00 GMT+0530 (India Standard Time)"
    }
    "`
