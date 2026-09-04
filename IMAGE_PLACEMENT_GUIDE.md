# IMAGE PLACEMENT GUIDE — MEENU'S DOSA

> **Single Source of Truth for Restaurant Food Photos**
> 
> Follow this manual guide to add or replace food photos on the Meenu's Dosa website. 
> There is **no automatic image searching, scraping, or external downloading**. The website strictly uses **8 category photographs** located in the `public/images/categories/` directory.

---

## 1. Summary of Image Mapping

| Category | Image File to Provide | Exact File Location | Used For |
| :--- | :--- | :--- | :--- |
| **Dosas** | `dosa.jpg` | `public/images/categories/dosa.jpg` | All 18 Dosa dishes + Hero section |
| **Idli / Vada / Upma** | `idli.jpg` | `public/images/categories/idli.jpg` | All 9 Idli, Vada & Upma dishes |
| **South Indian Rice** | `rice.jpg` | `public/images/categories/rice.jpg` | All 6 South Indian Rice dishes |
| **Uttapam** | `uttapam.jpg` | `public/images/categories/uttapam.jpg` | All 6 Uttapam dishes |
| **Exclusives** | `exclusives.jpg` | `public/images/categories/exclusives.jpg` | All 2 Exclusive specialties |
| **Desserts** | `desserts.jpg` | `public/images/categories/desserts.jpg` | All 4 Traditional Desserts |
| **Cold Beverages** | `beverages.jpg` | `public/images/categories/beverages.jpg` | All 8 Cold Shakes, Coffees & Lassis |
| **Mocktails / Sodas** | `mocktails.jpg` | `public/images/categories/mocktails.jpg` | Mocktail & Iced Tea beverages |

---

## 2. Detailed Dish Mapping for Each Photo

### Image 1 — DOSA

**File name:**
`dosa.jpg`

**Exact location:**
`public/images/categories/dosa.jpg`

**Used for:**
ALL dosa dishes across the menu and the homepage Hero visual.

These include:
* Butter Masala Dosa
* Butter Plain Dosa
* Cheese Masala Dosa
* Cheese Plain Dosa
* Masala Dosa
* Plain Dosa
* Garlic Roast Plain Dosa
* Ghee Roast Masala Dosa
* Ghee Roast Plain Dosa
* Mysore Masala Dosa
* Mysore Plain Dosa
* Onion Dosa
* Paneer Masala Dosa
* Paneer Plain Dosa
* Plain Set Dosa
* Podi Seeragam Set Dosa
* Rawa Masala Dosa
* Plain Rawa Dosa

**ONE PHOTO ONLY.**

---

### Image 2 — IDLI / VADA / UPMA

**File name:**
`idli.jpg`

**Exact location:**
`public/images/categories/idli.jpg`

**Used for:**
ALL dishes in the Idli / Vada / Upma category.

These include:
* Button Idli Fry
* Ghee Podi Thaat Idli
* Ghee Veggie Rawa Upma
* Idli Sambar
* Idli Vada Sambar
* Molapodi Idli
* Vada Sambar
* Veggie Rawa Upma
* Rasam Idli

**ONE PHOTO ONLY.**

---

### Image 3 — SOUTH INDIAN RICE

**File name:**
`rice.jpg`

**Exact location:**
`public/images/categories/rice.jpg`

**Used for:**
ALL dishes in the South Indian Rice category.

These include:
* Curd Rice
* Lemon Rice
* Rasam Rice
* Sambar Rice
* Tamarind Rice
* Tomato Rice

**ONE PHOTO ONLY.**

---

### Image 4 — UTTAPAM

**File name:**
`uttapam.jpg`

**Exact location:**
`public/images/categories/uttapam.jpg`

**Used for:**
ALL dishes in the Uttapam category.

These include:
* Cheese Uttapam
* Onion Uttapam
* Paneer Uttapam
* Regular Uttapam
* Tomato Uttapam
* Mixed Vegetable Uttapam

**ONE PHOTO ONLY.**

---

### Image 5 — EXCLUSIVES

**File name:**
`exclusives.jpg`

**Exact location:**
`public/images/categories/exclusives.jpg`

**Used for:**
ALL dishes in the Exclusives category.

These include:
* Idiyappam
* Idiyappam With Coconut Milk

**ONE PHOTO ONLY.**

---

### Image 6 — DESSERTS

**File name:**
`desserts.jpg`

**Exact location:**
`public/images/categories/desserts.jpg`

**Used for:**
ALL dishes in the Desserts category.

These include:
* Paysam
* Dadi Ka Halwa
* Kesari Halwa
* Pinapple Sheera

**ONE PHOTO ONLY.**

---

### Image 7 — COLD BEVERAGES

**File name:**
`beverages.jpg`

**Exact location:**
`public/images/categories/beverages.jpg`

**Used for:**
ALL dishes in the Cold Beverages category.

These include:
* Butterscotch Shake
* Monin Chocolate Shake
* Davidoff Cold Coffee
* Oreo Shake
* Swadeshi Buttermilk
* Hazelnut Cold Coffee
* Vanilla Shake
* Sangam Lassi

**ONE PHOTO ONLY.**

---

### Image 8 — MOCKTAILS / SODAS

**File name:**
`mocktails.jpg`

**Exact location:**
`public/images/categories/mocktails.jpg`

**Used for:**
ALL dishes in the Mocktails / Sodas category.

These include:
* Lemon Iced Tea

**ONE PHOTO ONLY.**

---

## HOW TO ADD YOUR PHOTOS

1. Find the `public` folder in the project root directory.
2. Open the `images` folder.
3. Open the `categories` folder (`public/images/categories/`).
4. Put the 8 photos there.
5. Rename them **EXACTLY** according to the required filenames:
   - `dosa.jpg`
   - `idli.jpg`
   - `rice.jpg`
   - `uttapam.jpg`
   - `exclusives.jpg`
   - `desserts.jpg`
   - `beverages.jpg`
   - `mocktails.jpg`
6. Do not change the extensions unless the code configuration is updated accordingly.

### Example Folder Structure:

```text
public/
└── images/
    └── categories/
        ├── dosa.jpg
        ├── idli.jpg
        ├── rice.jpg
        ├── uttapam.jpg
        ├── exclusives.jpg
        ├── desserts.jpg
        ├── beverages.jpg
        └── mocktails.jpg
```

---

## 3. Fallback Behavior

If any of the 8 images is missing or temporarily unavailable:
- The website **will NEVER** search the internet or query external APIs.
- The website **will NEVER** substitute an unrelated photo.
- The website displays an elegant, branded **"Photo coming soon"** placeholder card with clean typography.
- As soon as you place the designated `.jpg` file in `public/images/categories/`, it instantly displays on the site upon browser refresh.
