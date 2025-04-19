# 🏍️ Bike Servicing Management API

## 🌟 Live Demo

**Backend URL:**

## 🛠️ Tech Stack

- **Backend Framework:** Express.js with TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Deployment:** Supabase

## ✨ Key Features

- **Customer Management:** Create, read, update, and delete customer information
- **Bike Management:** Track bikes associated with customers
- **Service Records:** Maintain detailed service history with status tracking
- **Service Completion Tracking:** Mark services as completed with timestamps
- **Overdue Service Alerts:** Identify services pending for more than 7 days

## 📋 API Features & Endpoints

### Customer Management

| Method   | Endpoint             | Description                   |
| -------- | -------------------- | ----------------------------- |
| `POST`   | `/api/customers`     | Create a new customer         |
| `GET`    | `/api/customers`     | Retrieve all customers        |
| `GET`    | `/api/customers/:id` | Get a specific customer by ID |
| `PUT`    | `/api/customers/:id` | Update customer details       |
| `DELETE` | `/api/customers/:id` | Delete a customer             |

### Bike Management

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| `POST` | `/api/bikes`     | Add a new bike            |
| `GET`  | `/api/bikes`     | Retrieve all bikes        |
| `GET`  | `/api/bikes/:id` | Get a specific bike by ID |

### Service Management

| Method | Endpoint                     | Description                   |
| ------ | ---------------------------- | ----------------------------- |
| `POST` | `/api/services`              | Create a service record       |
| `GET`  | `/api/services`              | Retrieve all service records  |
| `GET`  | `/api/services/:id`          | Get a specific service record |
| `PUT`  | `/api/services/:id/complete` | Mark a service as completed   |

## 📥 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Emtiaz-ahmed-13/CycleCentralHub
   cd CycleCentralHub
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/CycleCentralHub"
   PORT=3000
   NODE_ENV=development
   ```

4. **Run Prisma migrations**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server**

   ```bash

   yarn dev
   ```

6. **Build for production**

   ```bash

   yarn build
   ```

## 🔍 API Usage Examples

### Create a Customer

```bash
curl -X POST http://localhost:5000/api/customers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890"
  }'
```

### Add a Bike

```bash
curl -X POST http://localhost:5000/api/bikes \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "Yamaha",
    "model": "R15",
    "year": 2022,
    "customerId": "87b3d7e1-8d9a-4f51-bf01-6f1e92f0f194"
  }'
```

### Create a Service Record

```bash
curl -X POST http://localhost:5000/api/services \
  -H "Content-Type: application/json" \
  -d '{
    "bikeId": "f3f1b192-3e62-402e-9bd3-d351a5a10e92",
    "serviceDate": "2025-04-11T10:00:00.000Z",
    "description": "Oil change",
    "status": "pending"
  }'
```

### Mark a Service as Completed

```bash
curl -X PUT http://localhost:5000/api/services/a1e4a182-c80d-4ff7-9a3d-873929f9d0e6/complete \
  -H "Content-Type: application/json" \
  -d '{
    "completionDate": "2025-04-11T15:30:00.000Z"
  }'
```

## 📊 Database Schema

### Customer Table

| Field        | Type     | Description                        |
| ------------ | -------- | ---------------------------------- |
| `customerId` | UUID     | Unique identifier for the customer |
| `name`       | String   | Full name of the customer          |
| `email`      | String   | Unique email                       |
| `phone`      | String   | Contact number                     |
| `createdAt`  | DateTime | Auto timestamp when created        |

### Bike Table

| Field        | Type   | Description                             |
| ------------ | ------ | --------------------------------------- |
| `bikeId`     | UUID   | Unique identifier for each bike         |
| `brand`      | String | Brand of the bike (e.g., Honda, Yamaha) |
| `model`      | String | Model name                              |
| `year`       | Int    | Manufacturing year                      |
| `customerId` | UUID   | Foreign key referencing Customer        |

### ServiceRecord Table

| Field            | Type     | Description                              |
| ---------------- | -------- | ---------------------------------------- |
| `serviceId`      | UUID     | Unique identifier for the service record |
| `bikeId`         | UUID     | FK to Bike                               |
| `serviceDate`    | DateTime | Date the service started                 |
| `completionDate` | DateTime | Nullable. Date the service completed     |
| `description`    | String   | Details of service (e.g., oil change)    |
| `status`         | String   | Status: "pending", "in-progress", "done" |

## 🔒 Error Handling

The API implements standardized error responses:

```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "stack": "Optional stack trace shown only in development"
}
```

## 🧪 Running Tests

```bash
npm test
# or
yarn test
```

## 👨‍💻 Authors

- Your Name - [GitHub Profile](https://github.com/Emtiaz-ahmed-13)

## 🙏 Acknowledgements

- Express.js Documentation
- Prisma Documentation
- PostgreSQL Documentation
