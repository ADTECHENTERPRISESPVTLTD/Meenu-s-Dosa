import { initialMenuItems } from '@/data/menuData';

export interface ValidationReport {
  totalItems: number;
  totalWithImages: number;
  totalNullImages: number;
  duplicateImages: Record<string, string[]>;
  categoryMismatches: Array<{ dish: string; category: string; imagePath: string }>;
  isValid: boolean;
}

/**
 * Image Validator utility for development and deployment audits
 */
export function validateMenuImages(): ValidationReport {
  const imageMap: Record<string, string[]> = {};
  const categoryMismatches: Array<{ dish: string; category: string; imagePath: string }> = [];

  let withImagesCount = 0;
  let nullImagesCount = 0;

  initialMenuItems.forEach((dish) => {
    if (!dish.image) {
      nullImagesCount++;
      return;
    }

    withImagesCount++;

    // Track for duplicate detection
    if (!imageMap[dish.image]) {
      imageMap[dish.image] = [];
    }
    imageMap[dish.image].push(dish.name);

    // Detect suspicious category mismatches if using local paths
    if (dish.image.startsWith('/images/menu/')) {
      const pathSegments = dish.image.split('/');
      // Expected format: /images/menu/<category>/<filename>
      const folderCategory = pathSegments[3];
      if (folderCategory && folderCategory !== dish.category) {
        categoryMismatches.push({
          dish: dish.name,
          category: dish.category,
          imagePath: dish.image,
        });
      }
    }
  });

  const duplicateImages: Record<string, string[]> = {};
  let hasDuplicates = false;

  Object.entries(imageMap).forEach(([img, dishList]) => {
    if (dishList.length > 1) {
      duplicateImages[img] = dishList;
      hasDuplicates = true;
    }
  });

  const isValid = !hasDuplicates && categoryMismatches.length === 0;

  return {
    totalItems: initialMenuItems.length,
    totalWithImages: withImagesCount,
    totalNullImages: nullImagesCount,
    duplicateImages,
    categoryMismatches,
    isValid,
  };
}
