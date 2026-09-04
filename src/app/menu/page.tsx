'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { menuService } from '@/services/menuService';
import { FoodCard } from '@/components/cards/FoodCard';
import { Button } from '@/ui/Button';
import { VegBadge } from '@/ui/Badge';
import { Search, ShoppingBag, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

function MenuPageContent() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategoryParam || 'all'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterSignature, setFilterSignature] = useState<boolean>(false);

  // Consume from centralized database-ready service layer
  const categories = useMemo(() => menuService.getCategoriesSync(), []);
  const allMenuItems = useMemo(() => menuService.getMenuItemsSync(), []);

  // Update selected category if URL param changes
  useEffect(() => {
    if (initialCategoryParam) {
      setSelectedCategory(initialCategoryParam);
    }
  }, [initialCategoryParam]);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Search query (dish name or description or category)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      // Signature / Bestseller filter
      const matchesSignature = !filterSignature || item.isSignature || item.isBestseller;

      return matchesCategory && matchesSearch && matchesSignature;
    });
  }, [allMenuItems, selectedCategory, searchQuery, filterSignature]);

  const activeCategoryObj = categories.find(
    (c) => c.slug === selectedCategory || c.id === selectedCategory
  );

  return (
    <div className="bg-brand-cream min-h-screen pb-20">
      {/* Menu Header */}
      <section className="bg-brand-cream-card border-b border-brand-brown/10 py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-green/30 text-xs font-semibold text-brand-green shadow-xs">
            <VegBadge size="sm" />
            <span>100% Pure Vegetarian Kitchen</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown">
            Explore Our Menu
          </h1>
          <p className="text-base sm:text-lg text-brand-brown-muted max-w-xl mx-auto leading-relaxed">
            Authentic South Indian favourites, made fresh to order. Crisp golden dosas, steaming idlis, traditional sweets, and refreshing coolers.
          </p>

          {/* Search and Quick Filters */}
          <div className="pt-4 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search dosas, idlis, shakes, halwa, iced tea..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-brand-brown/20 bg-white text-sm text-brand-brown focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 shadow-warm-xs transition-all"
              />
              <Search className="w-5 h-5 text-brand-brown/50 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-brand-brown-muted hover:text-brand-brown"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={() => setFilterSignature(!filterSignature)}
              className={cn(
                'px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all w-full sm:w-auto justify-center flex-shrink-0 shadow-warm-xs',
                filterSignature
                  ? 'bg-brand-orange text-white border border-brand-orange'
                  : 'bg-white text-brand-brown border border-brand-brown/20 hover:border-brand-orange'
              )}
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Signatures</span>
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-[65px] md:top-[76px] z-30 bg-brand-cream/95 backdrop-blur-md border-b border-brand-brown/10 shadow-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200',
                selectedCategory === 'all'
                  ? 'bg-brand-orange text-white shadow-warm-sm font-bold'
                  : 'bg-white/80 text-brand-brown hover:bg-white hover:text-brand-orange border border-brand-brown/10'
              )}
            >
              All Items ({allMenuItems.length})
            </button>

            {categories.map((cat) => {
              const count = allMenuItems.filter((i) => i.category === cat.slug).length;
              const isCurrent = selectedCategory === cat.slug;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5',
                    isCurrent
                      ? 'bg-brand-orange text-white shadow-warm-sm font-bold'
                      : 'bg-white/80 text-brand-brown hover:bg-white hover:text-brand-orange border border-brand-brown/10'
                  )}
                >
                  <span>{cat.name}</span>
                  {count > 0 && (
                    <span
                      className={cn(
                        'text-[10px] px-1.5 py-0.2 rounded-full font-mono',
                        isCurrent
                          ? 'bg-white/20 text-white'
                          : 'bg-brand-cream-dark text-brand-brown-muted'
                      )}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Menu Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Category Description Banner if single category selected */}
        {activeCategoryObj && (
          <div className="mb-8 p-6 rounded-3xl bg-white border border-brand-brown/10 shadow-warm-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Category
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                {activeCategoryObj.name}
              </h2>
              <p className="text-xs sm:text-sm text-brand-brown-muted mt-1">
                {activeCategoryObj.description}
              </p>
            </div>
            <Button
              href="/order-online"
              variant="primary"
              size="sm"
              leftIcon={<ShoppingBag className="w-4 h-4" />}
            >
              Order Online
            </Button>
          </div>
        )}

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-brown/10 p-8 max-w-lg mx-auto space-y-4">
            <p className="font-serif text-xl font-bold text-brand-brown">
              No matching dishes found
            </p>
            <p className="text-xs sm:text-sm text-brand-brown-muted">
              Try searching with different terms or reset your filters to explore all South Indian delicacies.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setFilterSignature(false);
              }}
              variant="outline"
              size="sm"
            >
              Reset All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-brand-brown">Loading menu...</div>}>
      <MenuPageContent />
    </Suspense>
  );
}
