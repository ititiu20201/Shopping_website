#  E-Commerce Modern Shopping Website

A fully functional, responsive **E-Commerce Web Application** built with a robust PHP backend and a dynamic frontend. This project features a seamless shopping experience for users and a powerful management dashboard for administrators.

---

## ✨ Key Features

### 👤 Customer Interface

* **Dynamic Product Catalog:** Browse products by categories with real-time availability.
* **Advanced Search:** Filter products by name, price, or category.
* **Interactive Shopping Cart:** Ajax-powered cart system to add/remove items without page reloads.
* **User Authentication:** Secure Sign-up, Login, and Profile Management.
* **Order Tracking:** View order history and current status.
* **Responsive Design:** Optimized for Desktop, Tablet, and Mobile devices.

### 🔐 Admin Control Panel

* **Inventory Management:** Full CRUD (Create, Read, Update, Delete) operations for products.
* **Category System:** Organize the store by managing product categories.
* **Order Overview:** Manage customer orders and update shipping statuses.
* **User Analytics:** View registered users and manage their accounts.

---

## 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6), Bootstrap 5, jQuery |
| **Backend** | PHP (Procedural/OOP) |
| **Database** | MySQL |
| **Server** | Apache (XAMPP / WAMP / Laragon) |

---

## 📂 Project Structure

```text
Shopping_website/
├── admin/              # Administrative dashboard & logic
├── css/                # Custom stylesheets (SASS/CSS)
├── fonts/              # Icon fonts and typography
├── images/             # Product assets and UI graphics
├── includes/           # Reusable components (DB connect, Header, Footer)
├── js/                 # Frontend scripts and validation
├── index.php           # Landing page
├── cart.php            # Shopping cart logic
├── product_details.php # Single product view
└── database/           # SQL schema files

```

---

## 🚀 Getting Started

### Prerequisites

* **Web Server:** XAMPP, WAMP, or Laragon.
* **PHP:** Version 7.4 or higher.
* **MySQL:** Version 5.7 or higher.

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/ititiu20201/Shopping_website.git

```


2. **Database Setup**
* Open **phpMyAdmin**.
* Create a new database named `shopping_db`.
* Import the `.sql` file located in the `/database` folder.


3. **Configuration**
* Navigate to `includes/db.php` (or your config file).
* Update your database credentials:


```php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "shopping_db";

```


4. **Run the Project**
* Move the project folder to your server's root directory (e.g., `htdocs`).
* Open your browser and go to `http://localhost/Shopping_website`.



