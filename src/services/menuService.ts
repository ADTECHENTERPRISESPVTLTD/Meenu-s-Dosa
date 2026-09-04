import { MenuItem, MenuCategory } from '@/types';
import { initialCategories, initialMenuItems } from '@/data/menuData';

/**
 * Menu Service Abstraction Layer
 * 
 * ARCHITECTURAL DESIGN FOR FUTURE MONGODB INTEGRATION:
 * The UI layer strictly consumes this service layer and never directly imports
 * static JSON or database collections.
 * 
 * CURRENT IMPLEMENTATION:
 * Returns structured in-memory/local data.
 * 
 * FUTURE MIGRATION PATH:
 * Replace internal data returns with:
 *   const res = await fetch(`${API_URL}/api/menu`);
 *   return res.json();
 * No UI components or pages will require refactoring.
 */
export const menuService = {
  /**
   * Fetch all active menu categories
   */
  async getCategories(): Promise<MenuCategory[]> {
    return initialCategories.filter((cat) => cat.isAvailable);
  },

  /**
   * Synchronous get categories for SSR/Static pages
   */
  getCategoriesSync(): MenuCategory[] {
    return initialCategories.filter((cat) => cat.isAvailable);
  },

  /**
   * Fetch a single category by its stable slug
   */
  async getCategoryBySlug(slug: string): Promise<MenuCategory | undefined> {
    return initialCategories.find((cat) => cat.slug === slug || cat.id === slug);
  },

  /**
   * Fetch all menu items
   */
  async getMenuItems(): Promise<MenuItem[]> {
    return initialMenuItems.filter((item) => item.isAvailable);
  },

  /**
   * Synchronous get menu items for SSR/Static pages
   */
  getMenuItemsSync(): MenuItem[] {
    return initialMenuItems.filter((item) => item.isAvailable);
  },

  /**
   * Fetch a single dish by its unique ID
   */
  async getMenuItemById(id: string): Promise<MenuItem | undefined> {
    return initialMenuItems.find((item) => item.id === id);
  },

  /**
   * Fetch a single dish by its URL slug
   */
  async getMenuItemBySlug(slug: string): Promise<MenuItem | undefined> {
    return initialMenuItems.find((item) => item.slug === slug);
  },

  /**
   * Fetch dishes belonging to a specific category
   */
  async getMenuItemsByCategory(categorySlug: string): Promise<MenuItem[]> {
    return initialMenuItems.filter(
      (item) => (item.category === categorySlug || categorySlug === 'all') && item.isAvailable
    );
  },

  /**
   * Fetch featured / signature dishes for homepage and highlight sections
   */
  async getFeaturedItems(): Promise<MenuItem[]> {
    return initialMenuItems
      .filter((item) => (item.isSignature || item.isBestseller) && item.isAvailable)
      .slice(0, 8);
  },

  /**
   * Synchronous get featured dishes
   */
  getFeaturedItemsSync(): MenuItem[] {
    return initialMenuItems
      .filter((item) => (item.isSignature || item.isBestseller) && item.isAvailable)
      .slice(0, 8);
  },

  /**
   * Validation utility to ensure every menu item has a unique image reference.
   * Reports duplicates in development.
   */
  validateMenuImageUniqueness(): {
    isUnique: boolean;
    totalItems: number;
    duplicateImages: Record<string, string[]>;
  } {
    const imageMap: Record<string, string[]> = {};

    initialMenuItems.forEach((item) => {
      if (!item.image) return;
      if (!imageMap[item.image]) {
        imageMap[item.image] = [];
      }
      imageMap[item.image].push(item.name);
    });

    const duplicates: Record<string, string[]> = {};
    let hasDuplicates = false;

    Object.entries(imageMap).forEach(([img, items]) => {
      if (items.length > 1) {
        duplicates[img] = items;
        hasDuplicates = true;
      }
    });

    return {
      isUnique: !hasDuplicates,
      totalItems: initialMenuItems.length,
      duplicateImages: duplicates,
    };
  },
};
