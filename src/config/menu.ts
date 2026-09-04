/**
 * Centralized Menu Config Re-export
 * Re-exports categories and items from the database-ready service and data layer.
 */
export { initialCategories as menuCategories, initialMenuItems as menuItems } from '@/data/menuData';
export { menuService } from '@/services/menuService';
