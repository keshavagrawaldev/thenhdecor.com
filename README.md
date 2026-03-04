# nhdecor.com

## Product Content Structure

Edit product content in [`lib/products.js`](/Users/pradumnasaraf/Dev/nhdecor.com-1/lib/products.js).

Each product supports:

- `slug`
- `name`
- `image`
- `preview`
- `description`
- `useCases`

### Images

- Put product images in `public/images/products/`
- Reference them in `lib/products.js` using `/images/products/<file-name>`
- Example:
  - `image: '/images/products/sofa-cover.jpeg'`

### Product Inquiry Email

Email CTA logic is in [`lib/contact.js`](/Users/pradumnasaraf/Dev/nhdecor.com-1/lib/contact.js).

- Update `businessEmail` to your real inbox.
- Subject/body are auto-filled based on product name.
