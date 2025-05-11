Afghan Proverbs & Sayings RESTful API

A RESTful API built with **Node.js**, **Express**, and **JSON** to store and manage traditional Afghan proverbs and sayings in **Dari**, **Pashto**, and their **English translations**.

---

Features

can add New Proverb
-----
Data Model

Each proverb includes the following fields:

| Field          | Type     | Description                            |
|----------------|----------|----------------------------------------|
| `id`           | String   | Unique MongoDB Object ID               |
| `textDari`     | String   | Proverb in Dari                        |
| `textPashto`   | String   | Proverb in Pashto                      |
| `translationEn`| String   | English translation                    |
| `meaning`      | String   | Interpretation or meaning              |
| `category`     | [String] | One or more categories (e.g., "wisdom")|

---

Tech Stack

- **Node.js**
- **Express**
- **JSON** 

---

Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/afghan-proverbs-api.git
cd afghan-proverbs-api

# Install dependencies
npm install
