# Weecom Products Dashboard 

### Setup instructions: 
- Clone the repository.
- Make sure you're in the project directory.
- You might want to install Biome VS Code [extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) 
- Install the dependencies using bun, `bun install`. (I hope you've bun installed :)
- Start the dev server using `bun run dev`.

### Tech used:
- Bun: For runtime and package packager.
- Vite: For bundling and HMR.
- React.js: To build interactive UI.
- TypeScript: For type-safety.
- Tailwind CSS: For styling.
- shadcn/ui: For styled, accessible components.
- Biome: For format and linting.
- Lucide: For icons.
- nuqs: Type-safe search params state manager.
- Tanstack Query: For best in class type-safe remote state management.
- Dummy JSON (quick shoutout).

### Summarisation of my approach (I tried!)
Here’s a summary of my approach I took:

#### State Management & Query Params

- Used nuqs (for the first time, delightful experience) for type-safe URL query state, e.g. for page, search, and category filters (usePageQueryState, useSearchQueryState, useProductCategoryState).
- Search, category, and pagination state are synced with the URL for deep-linking and browser navigation.

#### Data Fetching

- Used TanStack React Query for remote data management (useProducts, useProductCategories).
API calls are abstracted in apiProducts.ts with type-safe return values.
- Product list queries use a debounced search value via a custom hook (useDebouncedValue) to avoid excessive API calls.

#### Validation & Forms

- Used React Hook Form for form state and Zod for schema validation (AddProductForm, EditProductForm).
- Number fields are coerced with z.coerce.number() and registered with { valueAsNumber: true } for type consistency.

#### UI Components

- UI is built with shadcn/ui and Tailwind CSS.
- Table, pagination, skeleton loaders, dialogs, and tooltips are modular and reusable.
- Product actions (edit, delete) are handled via dialogs for better UX.

#### Error & Loading States

- Loading states use skeleton components.
- Error states show retry buttons and messages.
- Empty states are handled with clear messaging ("No items here.").

#### Type Safety

- Types are inferred from Zod schemas and used throughout for API and form data.
- TypeScript strict mode is enabled in your config.
Project Structure


**Code is organized by feature (products) and by hooks/components.
Aliases (@/) are used for cleaner imports.**\
\
\
My approach for apps are always towards UX and maintainability.