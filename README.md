## **School Management API**  

This is a **RESTful API** for managing schools, allowing users to add and retrieve school details based on location.  

## **Features**
✅ Add a new school with name, address, latitude, and longitude.  
✅ Retrieve a list of all schools.  
✅ Sort schools based on distance from a given location.  

---

## **Live API URL**  
The API is deployed and accessible at:  
🔗 **[School Management API](https://schoolmanagement-production-55d7.up.railway.app)**  

---

## **Postman Collection**  
Download and test the API using Postman:  
📂 **[Postman Collection](https://drive.google.com/file/d/1mcD_JM6WAbSPhoCC-RgNIEOFMAvT-ABw/view?usp=sharing)**  

---

## **Tech Stack**  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL (Hosted on Railway)  
- **Deployment:** Railway  
- **API Testing:** Postman  

---

## **Setup Instructions**  
### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/pavankumarpilaka/school_management.git
cd school_management
```

### **2️⃣ Install Dependencies**  
```bash
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file and add your database credentials:  
```
DB_HOST=your-mysql-host
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=railway
DB_PORT=3306
PORT=3000
```

### **4️⃣ Start the Server**  
```bash
npm start
```
Server will run at `http://localhost:3000`.

---

## **API Endpoints**  

### **1️⃣ Add a School**  
**Endpoint:** `POST /api/schools/add`  
**Request Body (JSON):**  
```json
{
  "name": "Green Valley High School",
  "address": "123 Main St, New York, NY",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```
**Response:**  
```json
{
  "message": "✅ School added successfully",
  "schoolId": 1
}
```

---

### **2️⃣ Get Schools Sorted by Distance**  
**Endpoint:** `GET /api/schools/list?latitude=40.7128&longitude=-74.0060`  
**Response:**  
```json
[
  {
    "id": 1,
    "name": "Green Valley High School",
    "address": "123 Main St, New York, NY",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "distance": 0
  }
]
```

---

## **Project Structure**
```
/school_management
│── /routes
│   ├── schoolRoutes.js
│── /controllers
│   ├── schoolController.js
│── /models
│   ├── schoolModel.js
│── /db
│   ├── db.js
│── .env
│── server.js
│── README.md
│── package.json
```

---

## **Contributing**  
Pull requests are welcome! Feel free to open an issue if you find a bug or need improvements.

---

## **License**  
📜 This project is **MIT Licensed**.

