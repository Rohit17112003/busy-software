# BUSY ERP

A modern **ERP (Enterprise Resource Planning)** application built with **Next.js**, **React**, **Tailwind CSS**, and **Redux Toolkit**. The project follows the **Atomic Design** methodology to create reusable, scalable, and maintainable UI components.

---

## ✨ Features

### 📊 Dashboard
- Business Overview
- Sales & Purchase Statistics
- Outstanding Summary
- Inventory Summary
- Recent Transactions
- Quick Actions

### 🏢 Company
- Company Management
- Financial Year

### 📚 Masters
- Account Master
- Item Master
- Unit Master
- GST Master
- Warehouse

### 💳 Vouchers
- Sales
- Purchase
- Payment
- Receipt
- Journal
- Contra
- Debit Note
- Credit Note

### 📦 Inventory
- Stock
- Stock Journal
- Material Issue
- Material Receive

### 📈 Reports
- Ledger
- Trial Balance
- Profit & Loss
- Balance Sheet
- GST Reports
- Stock Reports
- Outstanding Reports

### ⚙ Administration
- Users
- Roles & Permissions
- Backup & Restore
- Settings

---

# 🚀 Tech Stack

- Next.js 16
- React 19
- Tailwind CSS
- Redux Toolkit
- Axios
- Yup
- Remix Icons
- Atomic Design Architecture

---

# 📂 Project Structure

```text
src/
│
├── app/
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
│
├── redux/
│   ├── slice/
│   ├── store.js
│   └── ...
│
├── hooks/
├── services/
├── utils/
├── constants/
├── assets/
└── styles/
```

---

# 🏗 Atomic Design

```
Pages
   ▲
Templates
   ▲
Organisms
   ▲
Molecules
   ▲
Atoms
```

### Atoms
Small reusable UI components.

Examples

- Button
- Input
- Badge
- Spinner
- Card
- Avatar
- Icon

### Molecules

Combination of atoms.

Examples

- Search Box
- Stat Card
- Form Fields
- Table Header
- Profile Dropdown

### Organisms

Complete UI sections.

Examples

- Sidebar
- Header
- Dashboard Stats
- Recent Transactions
- Quick Actions
- Dashboard Overview

### Templates

Application layouts.

Examples

- MainLayout
- AuthLayout

### Pages

Business pages assembled from templates and organisms.

Examples

- Dashboard
- Login
- Company
- Sales
- Purchase
- Ledger
- Reports

---

# 📦 Installation

```bash
git clone <repository-url>

cd busy-erp

npm install
```

---

# ▶ Development

```bash
npm run dev
```

Application runs at:

```
http://localhost:3000
```

---

# 🏗 Production Build

```bash
npm run build
```

---

# 🚀 Start Production

```bash
npm start
```

---

# 📱 Responsive

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🎨 UI Highlights

- Atomic Design Architecture
- Reusable Components
- Responsive Dashboard
- Modern Sidebar
- Modular Forms
- Reusable Cards
- Dynamic Tables
- Clean ERP Interface

---

# 📄 License

This project is intended for educational and business purposes.

---

## Developed With ❤️ Using

- Next.js
- React
- Tailwind CSS
- Redux Toolkit

**BUSY ERP**

*Accounting • Inventory • GST • Reports • Business Management*