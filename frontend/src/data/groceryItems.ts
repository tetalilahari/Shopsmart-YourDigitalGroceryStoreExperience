export interface GroceryItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  unit: string;
  originalPrice?: number;
  discount?: number;
}

export const groceryItems: GroceryItem[] = [
  // Fresh Produce (20 items)
  {
    id: '1',
    name: 'Organic Bananas',
    price: 2.99,
    originalPrice: 3.49,
    discount: 15,
    image: '🍌',
    category: 'Fresh Produce',
    description: 'Fresh organic bananas, perfect for snacking',
    unit: 'per bunch'
  },
  {
    id: '2',
    name: 'Fresh Avocados',
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    image: '🥑',
    category: 'Fresh Produce',
    description: 'Ripe avocados ready to eat',
    unit: 'each'
  },
  {
    id: '3',
    name: 'Red Apples',
    price: 3.99,
    image: '🍎',
    category: 'Fresh Produce',
    description: 'Crisp and sweet red apples',
    unit: 'per lb'
  },
  {
    id: '4',
    name: 'Fresh Spinach',
    price: 2.49,
    image: '🥬',
    category: 'Fresh Produce',
    description: 'Fresh baby spinach leaves',
    unit: '5oz bag'
  },
  {
    id: '5',
    name: 'Organic Carrots',
    price: 1.79,
    originalPrice: 2.29,
    discount: 22,
    image: '🥕',
    category: 'Fresh Produce',
    description: 'Organic carrots, great for cooking',
    unit: '1lb bag'
  },
  {
    id: '6',
    name: 'Fresh Broccoli',
    price: 2.99,
    image: '🥦',
    category: 'Fresh Produce',
    description: 'Fresh broccoli crowns',
    unit: 'each'
  },
  {
    id: '7',
    name: 'Roma Tomatoes',
    price: 2.49,
    image: '🍅',
    category: 'Fresh Produce',
    description: 'Fresh roma tomatoes',
    unit: 'per lb'
  },
  {
    id: '8',
    name: 'Fresh Oranges',
    price: 4.99,
    image: '🍊',
    category: 'Fresh Produce',
    description: 'Sweet and juicy oranges',
    unit: '3lb bag'
  },
  {
    id: '9',
    name: 'Green Bell Peppers',
    price: 1.99,
    image: '🫑',
    category: 'Fresh Produce',
    description: 'Fresh green bell peppers',
    unit: 'each'
  },
  {
    id: '10',
    name: 'Fresh Strawberries',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    image: '🍓',
    category: 'Fresh Produce',
    description: 'Sweet fresh strawberries',
    unit: '1lb container'
  },
  {
    id: '11',
    name: 'Cucumbers',
    price: 1.49,
    image: '🥒',
    category: 'Fresh Produce',
    description: 'Fresh cucumbers',
    unit: 'each'
  },
  {
    id: '12',
    name: 'Sweet Potatoes',
    price: 2.99,
    image: '🍠',
    category: 'Fresh Produce',
    description: 'Fresh sweet potatoes',
    unit: 'per lb'
  },
  {
    id: '13',
    name: 'Fresh Limes',
    price: 0.99,
    image: '🟢',
    category: 'Fresh Produce',
    description: 'Fresh limes',
    unit: 'each'
  },
  {
    id: '14',
    name: 'Iceberg Lettuce',
    price: 1.99,
    image: '🥬',
    category: 'Fresh Produce',
    description: 'Fresh iceberg lettuce head',
    unit: 'each'
  },
  {
    id: '15',
    name: 'Fresh Mushrooms',
    price: 2.49,
    image: '🍄',
    category: 'Fresh Produce',
    description: 'White button mushrooms',
    unit: '8oz package'
  },
  {
    id: '16',
    name: 'Green Grapes',
    price: 4.49,
    image: '🍇',
    category: 'Fresh Produce',
    description: 'Sweet green grapes',
    unit: '2lb bag'
  },
  {
    id: '17',
    name: 'Fresh Lemons',
    price: 2.49,
    image: '🍋',
    category: 'Fresh Produce',
    description: 'Fresh lemons',
    unit: '2lb bag'
  },
  {
    id: '18',
    name: 'Red Onions',
    price: 1.99,
    image: '🧅',
    category: 'Fresh Produce',
    description: 'Fresh red onions',
    unit: '3lb bag'
  },
  {
    id: '19',
    name: 'Fresh Pineapple',
    price: 3.99,
    image: '🍍',
    category: 'Fresh Produce',
    description: 'Sweet fresh pineapple',
    unit: 'each'
  },
  {
    id: '20',
    name: 'Baby Potatoes',
    price: 2.99,
    image: '🥔',
    category: 'Fresh Produce',
    description: 'Fresh baby potatoes',
    unit: '1.5lb bag'
  },

  // Dairy & Eggs (18 items)
  {
    id: '21',
    name: 'Greek Yogurt',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Creamy Greek yogurt, high in protein',
    unit: '32oz container'
  },
  {
    id: '22',
    name: 'Organic Milk',
    price: 3.99,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Fresh organic whole milk',
    unit: '1 gallon'
  },
  {
    id: '23',
    name: 'Cheddar Cheese',
    price: 5.49,
    originalPrice: 6.49,
    discount: 15,
    image: '🧀',
    category: 'Dairy & Eggs',
    description: 'Sharp cheddar cheese block',
    unit: '8oz block'
  },
  {
    id: '24',
    name: 'Fresh Eggs',
    price: 3.29,
    image: '🥚',
    category: 'Dairy & Eggs',
    description: 'Farm fresh large eggs',
    unit: '12 count'
  },
  {
    id: '25',
    name: 'Butter',
    price: 4.79,
    originalPrice: 5.49,
    discount: 13,
    image: '🧈',
    category: 'Dairy & Eggs',
    description: 'Unsalted butter sticks',
    unit: '1lb package'
  },
  {
    id: '26',
    name: 'Mozzarella Cheese',
    price: 4.99,
    image: '🧀',
    category: 'Dairy & Eggs',
    description: 'Fresh mozzarella cheese',
    unit: '8oz package'
  },
  {
    id: '27',
    name: 'Cream Cheese',
    price: 2.99,
    image: '🧀',
    category: 'Dairy & Eggs',
    description: 'Philadelphia cream cheese',
    unit: '8oz package'
  },
  {
    id: '28',
    name: 'Sour Cream',
    price: 2.49,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Regular sour cream',
    unit: '16oz container'
  },
  {
    id: '29',
    name: 'Cottage Cheese',
    price: 3.99,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Low-fat cottage cheese',
    unit: '24oz container'
  },
  {
    id: '30',
    name: 'Heavy Cream',
    price: 3.49,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Heavy whipping cream',
    unit: '1 pint'
  },
  {
    id: '31',
    name: 'Parmesan Cheese',
    price: 6.99,
    image: '🧀',
    category: 'Dairy & Eggs',
    description: 'Grated parmesan cheese',
    unit: '8oz container'
  },
  {
    id: '32',
    name: 'Almond Milk',
    price: 3.49,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Unsweetened almond milk',
    unit: '64oz carton'
  },
  {
    id: '33',
    name: 'String Cheese',
    price: 4.49,
    image: '🧀',
    category: 'Dairy & Eggs',
    description: 'Mozzarella string cheese',
    unit: '12 count'
  },
  {
    id: '34',
    name: 'Organic Eggs',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    image: '🥚',
    category: 'Dairy & Eggs',
    description: 'Organic free-range eggs',
    unit: '12 count'
  },
  {
    id: '35',
    name: '2% Milk',
    price: 3.49,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Reduced fat 2% milk',
    unit: '1 gallon'
  },
  {
    id: '36',
    name: 'Vanilla Yogurt',
    price: 3.99,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Vanilla flavored yogurt',
    unit: '32oz container'
  },
  {
    id: '37',
    name: 'Swiss Cheese',
    price: 5.99,
    image: '🧀',
    category: 'Dairy & Eggs',
    description: 'Sliced swiss cheese',
    unit: '8oz package'
  },
  {
    id: '38',
    name: 'Buttermilk',
    price: 2.99,
    image: '🥛',
    category: 'Dairy & Eggs',
    description: 'Cultured buttermilk',
    unit: '1 quart'
  },

  // Meat & Seafood (17 items)
  {
    id: '39',
    name: 'Chicken Breast',
    price: 8.99,
    image: '🐔',
    category: 'Meat & Seafood',
    description: 'Boneless skinless chicken breast',
    unit: 'per lb'
  },
  {
    id: '40',
    name: 'Ground Beef',
    price: 6.99,
    originalPrice: 7.99,
    discount: 13,
    image: '🥩',
    category: 'Meat & Seafood',
    description: '85% lean ground beef',
    unit: 'per lb'
  },
  {
    id: '41',
    name: 'Fresh Salmon',
    price: 12.99,
    originalPrice: 15.99,
    discount: 19,
    image: '🐟',
    category: 'Meat & Seafood',
    description: 'Atlantic salmon fillet',
    unit: 'per lb'
  },
  {
    id: '42',
    name: 'Pork Chops',
    price: 7.99,
    image: '🥩',
    category: 'Meat & Seafood',
    description: 'Bone-in pork chops',
    unit: 'per lb'
  },
  {
    id: '43',
    name: 'Chicken Thighs',
    price: 5.99,
    image: '🐔',
    category: 'Meat & Seafood',
    description: 'Bone-in chicken thighs',
    unit: 'per lb'
  },
  {
    id: '44',
    name: 'Shrimp',
    price: 9.99,
    originalPrice: 12.99,
    discount: 23,
    image: '🦐',
    category: 'Meat & Seafood',
    description: 'Large raw shrimp',
    unit: '1lb bag'
  },
  {
    id: '45',
    name: 'Ground Turkey',
    price: 5.99,
    image: '🦃',
    category: 'Meat & Seafood',
    description: '93% lean ground turkey',
    unit: 'per lb'
  },
  {
    id: '46',
    name: 'Bacon',
    price: 6.49,
    originalPrice: 7.99,
    discount: 19,
    image: '🥓',
    category: 'Meat & Seafood',
    description: 'Thick cut bacon',
    unit: '1lb package'
  },
  {
    id: '47',
    name: 'Tilapia Fillets',
    price: 8.99,
    image: '🐟',
    category: 'Meat & Seafood',
    description: 'Fresh tilapia fillets',
    unit: 'per lb'
  },
  {
    id: '48',
    name: 'Ribeye Steak',
    price: 15.99,
    image: '🥩',
    category: 'Meat & Seafood',
    description: 'USDA Choice ribeye steak',
    unit: 'per lb'
  },
  {
    id: '49',
    name: 'Chicken Wings',
    price: 4.99,
    image: '🐔',
    category: 'Meat & Seafood',
    description: 'Fresh chicken wings',
    unit: 'per lb'
  },
  {
    id: '50',
    name: 'Cod Fillets',
    price: 10.99,
    image: '🐟',
    category: 'Meat & Seafood',
    description: 'Fresh cod fillets',
    unit: 'per lb'
  },
  {
    id: '51',
    name: 'Turkey Breast',
    price: 9.99,
    image: '🦃',
    category: 'Meat & Seafood',
    description: 'Boneless turkey breast',
    unit: 'per lb'
  },
  {
    id: '52',
    name: 'Italian Sausage',
    price: 5.49,
    image: '🌭',
    category: 'Meat & Seafood',
    description: 'Mild Italian sausage',
    unit: '1lb package'
  },
  {
    id: '53',
    name: 'Crab Legs',
    price: 18.99,
    image: '🦀',
    category: 'Meat & Seafood',
    description: 'Snow crab legs',
    unit: 'per lb'
  },
  {
    id: '54',
    name: 'Lamb Chops',
    price: 13.99,
    image: '🐑',
    category: 'Meat & Seafood',
    description: 'Bone-in lamb chops',
    unit: 'per lb'
  },
  {
    id: '55',
    name: 'Scallops',
    price: 16.99,
    image: '🦪',
    category: 'Meat & Seafood',
    description: 'Large sea scallops',
    unit: 'per lb'
  },

  // Bakery (20 items)
  {
    id: '56',
    name: 'Whole Wheat Bread',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    image: '🍞',
    category: 'Bakery',
    description: 'Fresh whole wheat bread loaf',
    unit: '20oz loaf'
  },
  {
    id: '57',
    name: 'Fresh Bagels',
    price: 3.99,
    image: '🥯',
    category: 'Bakery',
    description: 'Assorted fresh bagels',
    unit: '6 pack'
  },
  {
    id: '58',
    name: 'Croissants',
    price: 4.49,
    originalPrice: 5.49,
    discount: 18,
    image: '🥐',
    category: 'Bakery',
    description: 'Buttery French croissants',
    unit: '4 pack'
  },
  {
    id: '59',
    name: 'Sourdough Bread',
    price: 3.49,
    image: '🍞',
    category: 'Bakery',
    description: 'Artisan sourdough bread',
    unit: '1 loaf'
  },
  {
    id: '60',
    name: 'Dinner Rolls',
    price: 2.99,
    image: '🥖',
    category: 'Bakery',
    description: 'Fresh dinner rolls',
    unit: '8 pack'
  },
  {
    id: '61',
    name: 'Blueberry Muffins',
    price: 4.99,
    image: '🧁',
    category: 'Bakery',
    description: 'Fresh blueberry muffins',
    unit: '6 pack'
  },
  {
    id: '62',
    name: 'Danish Pastries',
    price: 5.49,
    originalPrice: 6.99,
    discount: 21,
    image: '🥐',
    category: 'Bakery',
    description: 'Assorted Danish pastries',
    unit: '4 pack'
  },
  {
    id: '63',
    name: 'French Baguette',
    price: 2.49,
    image: '🥖',
    category: 'Bakery',
    description: 'Traditional French baguette',
    unit: 'each'
  },
  {
    id: '64',
    name: 'Chocolate Cake',
    price: 12.99,
    image: '🎂',
    category: 'Bakery',
    description: 'Double layer chocolate cake',
    unit: 'whole cake'
  },
  {
    id: '65',
    name: 'Apple Pie',
    price: 8.99,
    image: '🥧',
    category: 'Bakery',
    description: 'Fresh baked apple pie',
    unit: '9 inch'
  },
  {
    id: '66',
    name: 'Donuts',
    price: 5.99,
    originalPrice: 7.49,
    discount: 20,
    image: '🍩',
    category: 'Bakery',
    description: 'Glazed donuts',
    unit: '6 pack'
  },
  {
    id: '67',
    name: 'Cinnamon Rolls',
    price: 4.99,
    image: '🥐',
    category: 'Bakery',
    description: 'Fresh cinnamon rolls',
    unit: '4 pack'
  },
  {
    id: '68',
    name: 'Banana Bread',
    price: 3.99,
    image: '🍞',
    category: 'Bakery',
    description: 'Homemade banana bread',
    unit: '1 loaf'
  },
  {
    id: '69',
    name: 'Cookies',
    price: 3.49,
    image: '🍪',
    category: 'Bakery',
    description: 'Chocolate chip cookies',
    unit: '12 pack'
  },
  {
    id: '70',
    name: 'Focaccia Bread',
    price: 4.49,
    image: '🍞',
    category: 'Bakery',
    description: 'Herb focaccia bread',
    unit: '1 loaf'
  },
  {
    id: '71',
    name: 'English Muffins',
    price: 2.99,
    image: '🥯',
    category: 'Bakery',
    description: 'Whole grain English muffins',
    unit: '6 pack'
  },
  {
    id: '72',
    name: 'Pita Bread',
    price: 2.49,
    image: '🫓',
    category: 'Bakery',
    description: 'Fresh pita bread',
    unit: '6 pack'
  },
  {
    id: '73',
    name: 'Pretzels',
    price: 3.99,
    image: '🥨',
    category: 'Bakery',
    description: 'Soft pretzels',
    unit: '4 pack'
  },
  {
    id: '74',
    name: 'Cupcakes',
    price: 6.99,
    image: '🧁',
    category: 'Bakery',
    description: 'Vanilla cupcakes',
    unit: '6 pack'
  },
  {
    id: '75',
    name: 'Cheesecake',
    price: 9.99,
    image: '🍰',
    category: 'Bakery',
    description: 'New York style cheesecake',
    unit: 'whole cake'
  },

  // Pantry (20 items)
  {
    id: '76',
    name: 'Pasta',
    price: 1.99,
    originalPrice: 2.49,
    discount: 20,
    image: '🍝',
    category: 'Pantry',
    description: 'Whole wheat pasta',
    unit: '1lb box'
  },
  {
    id: '77',
    name: 'Rice',
    price: 3.99,
    image: '🍚',
    category: 'Pantry',
    description: 'Long grain white rice',
    unit: '2lb bag'
  },
  {
    id: '78',
    name: 'Olive Oil',
    price: 7.99,
    originalPrice: 9.99,
    discount: 20,
    image: '🫒',
    category: 'Pantry',
    description: 'Extra virgin olive oil',
    unit: '500ml bottle'
  },
  {
    id: '79',
    name: 'Canned Tomatoes',
    price: 1.49,
    image: '🥫',
    category: 'Pantry',
    description: 'Diced tomatoes in juice',
    unit: '14.5oz can'
  },
  {
    id: '80',
    name: 'Black Beans',
    price: 1.29,
    image: '🥫',
    category: 'Pantry',
    description: 'Canned black beans',
    unit: '15oz can'
  },
  {
    id: '81',
    name: 'Peanut Butter',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    image: '🥜',
    category: 'Pantry',
    description: 'Creamy peanut butter',
    unit: '18oz jar'
  },
  {
    id: '82',
    name: 'Honey',
    price: 5.49,
    image: '🍯',
    category: 'Pantry',
    description: 'Pure wildflower honey',
    unit: '12oz bottle'
  },
  {
    id: '83',
    name: 'Oatmeal',
    price: 3.49,
    image: '🥣',
    category: 'Pantry',
    description: 'Old fashioned oats',
    unit: '42oz container'
  },
  {
    id: '84',
    name: 'Flour',
    price: 2.99,
    image: '🌾',
    category: 'Pantry',
    description: 'All-purpose flour',
    unit: '5lb bag'
  },
  {
    id: '85',
    name: 'Sugar',
    price: 2.49,
    image: '🍬',
    category: 'Pantry',
    description: 'Granulated white sugar',
    unit: '4lb bag'
  },
  {
    id: '86',
    name: 'Vegetable Oil',
    price: 3.99,
    image: '🫒',
    category: 'Pantry',
    description: 'Pure vegetable oil',
    unit: '48oz bottle'
  },
  {
    id: '87',
    name: 'Chicken Broth',
    price: 1.99,
    image: '🥫',
    category: 'Pantry',
    description: 'Low sodium chicken broth',
    unit: '32oz carton'
  },
  {
    id: '88',
    name: 'Quinoa',
    price: 5.99,
    originalPrice: 7.49,
    discount: 20,
    image: '🌾',
    category: 'Pantry',
    description: 'Organic quinoa',
    unit: '1lb bag'
  },
  {
    id: '89',
    name: 'Baking Soda',
    price: 0.99,
    image: '📦',
    category: 'Pantry',
    description: 'Pure baking soda',
    unit: '1lb box'
  },
  {
    id: '90',
    name: 'Vanilla Extract',
    price: 3.99,
    image: '🧪',
    category: 'Pantry',
    description: 'Pure vanilla extract',
    unit: '2oz bottle'
  },
  {
    id: '91',
    name: 'Coconut Oil',
    price: 6.99,
    image: '🥥',
    category: 'Pantry',
    description: 'Organic coconut oil',
    unit: '14oz jar'
  },
  {
    id: '92',
    name: 'Soy Sauce',
    price: 2.49,
    image: '🥫',
    category: 'Pantry',
    description: 'Low sodium soy sauce',
    unit: '10oz bottle'
  },
  {
    id: '93',
    name: 'Hot Sauce',
    price: 1.99,
    image: '🌶️',
    category: 'Pantry',
    description: 'Cayenne hot sauce',
    unit: '5oz bottle'
  },
  {
    id: '94',
    name: 'Vinegar',
    price: 1.79,
    image: '🫙',
    category: 'Pantry',
    description: 'White distilled vinegar',
    unit: '32oz bottle'
  },
  {
    id: '95',
    name: 'Cereal',
    price: 4.49,
    originalPrice: 5.49,
    discount: 18,
    image: '🥣',
    category: 'Pantry',
    description: 'Whole grain cereal',
    unit: '18oz box'
  },

  // Beverages (20 items)
  {
    id: '96',
    name: 'Orange Juice',
    price: 4.99,
    originalPrice: 5.99,
    discount: 17,
    image: '🧃',
    category: 'Beverages',
    description: 'Fresh squeezed orange juice',
    unit: '64oz bottle'
  },
  {
    id: '97',
    name: 'Sparkling Water',
    price: 5.99,
    image: '💧',
    category: 'Beverages',
    description: 'Natural sparkling water',
    unit: '12 pack'
  },
  {
    id: '98',
    name: 'Coffee',
    price: 8.99,
    originalPrice: 10.99,
    discount: 18,
    image: '☕',
    category: 'Beverages',
    description: 'Medium roast coffee beans',
    unit: '12oz bag'
  },
  {
    id: '99',
    name: 'Green Tea',
    price: 3.99,
    image: '🍵',
    category: 'Beverages',
    description: 'Organic green tea bags',
    unit: '20 count'
  },
  {
    id: '100',
    name: 'Apple Juice',
    price: 3.49,
    image: '🧃',
    category: 'Beverages',
    description: '100% apple juice',
    unit: '64oz bottle'
  },
  {
    id: '101',
    name: 'Soda Pack',
    price: 6.99,
    originalPrice: 8.49,
    discount: 18,
    image: '🥤',
    category: 'Beverages',
    description: 'Cola 12-pack cans',
    unit: '12 pack'
  },
  {
    id: '102',
    name: 'Energy Drink',
    price: 2.99,
    image: '⚡',
    category: 'Beverages',
    description: 'Sugar-free energy drink',
    unit: '16oz can'
  },
  {
    id: '103',
    name: 'Bottled Water',
    price: 4.99,
    image: '💧',
    category: 'Beverages',
    description: 'Pure spring water',
    unit: '24 pack'
  },
  {
    id: '104',
    name: 'Iced Tea',
    price: 2.99,
    image: '🧊',
    category: 'Beverages',
    description: 'Sweet iced tea',
    unit: '64oz bottle'
  },
  {
    id: '105',
    name: 'Sports Drink',
    price: 4.49,
    image: '🏃',
    category: 'Beverages',
    description: 'Electrolyte sports drink',
    unit: '8 pack'
  },
  {
    id: '106',
    name: 'Coconut Water',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    image: '🥥',
    category: 'Beverages',
    description: 'Pure coconut water',
    unit: '16.9oz bottle'
  },
  {
    id: '107',
    name: 'Cranberry Juice',
    price: 3.99,
    image: '🧃',
    category: 'Beverages',
    description: '100% cranberry juice',
    unit: '64oz bottle'
  },
  {
    id: '108',
    name: 'Wine',
    price: 12.99,
    image: '🍷',
    category: 'Beverages',
    description: 'Red wine',
    unit: '750ml bottle'
  },
  {
    id: '109',
    name: 'Beer',
    price: 8.99,
    image: '🍺',
    category: 'Beverages',
    description: 'Craft beer 6-pack',
    unit: '6 pack'
  },
  {
    id: '110',
    name: 'Lemonade',
    price: 2.99,
    image: '🍋',
    category: 'Beverages',
    description: 'Fresh lemonade',
    unit: '64oz bottle'
  },
  {
    id: '111',
    name: 'Kombucha',
    price: 4.99,
    image: '🍵',
    category: 'Beverages',
    description: 'Organic kombucha',
    unit: '16oz bottle'
  },
  {
    id: '112',
    name: 'Protein Shake',
    price: 3.49,
    image: '🥤',
    category: 'Beverages',
    description: 'Chocolate protein shake',
    unit: '11oz bottle'
  },
  {
    id: '113',
    name: 'Smoothie',
    price: 4.99,
    originalPrice: 6.49,
    discount: 23,
    image: '🥤',
    category: 'Beverages',
    description: 'Mixed berry smoothie',
    unit: '15.2oz bottle'
  },
  {
    id: '114',
    name: 'Hot Chocolate',
    price: 2.99,
    image: '☕',
    category: 'Beverages',
    description: 'Hot chocolate mix',
    unit: '8 packets'
  },
  {
    id: '115',
    name: 'Fruit Punch',
    price: 2.49,
    image: '🧃',
    category: 'Beverages',
    description: 'Tropical fruit punch',
    unit: '64oz bottle'
  },

  // Snacks (15 items)
  {
    id: '116',
    name: 'Mixed Nuts',
    price: 8.99,
    originalPrice: 10.99,
    discount: 18,
    image: '🥜',
    category: 'Snacks',
    description: 'Roasted mixed nuts',
    unit: '1lb container'
  },
  {
    id: '117',
    name: 'Potato Chips',
    price: 3.49,
    originalPrice: 3.99,
    discount: 13,
    image: '🍟',
    category: 'Snacks',
    description: 'Classic potato chips',
    unit: '8oz bag'
  },
  {
    id: '118',
    name: 'Granola Bars',
    price: 4.99,
    image: '🥜',
    category: 'Snacks',
    description: 'Oats and honey granola bars',
    unit: '8 count'
  },
  {
    id: '119',
    name: 'Pretzels',
    price: 2.99,
    image: '🥨',
    category: 'Snacks',
    description: 'Salted mini pretzels',
    unit: '16oz bag'
  },
  {
    id: '120',
    name: 'Popcorn',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    image: '🍿',
    category: 'Snacks',
    description: 'Butter popcorn',
    unit: '6 pack'
  },
  {
    id: '121',
    name: 'Trail Mix',
    price: 5.99,
    image: '🥜',
    category: 'Snacks',
    description: 'Nuts and dried fruit mix',
    unit: '14oz bag'
  },
  {
    id: '122',
    name: 'Crackers',
    price: 2.49,
    image: '🍪',
    category: 'Snacks',
    description: 'Whole grain crackers',
    unit: '13.7oz box'
  },
  {
    id: '123',
    name: 'Fruit Snacks',
    price: 3.99,
    image: '🍓',
    category: 'Snacks',
    description: 'Mixed fruit gummies',
    unit: '10 pouches'
  },
  {
    id: '124',
    name: 'Rice Cakes',
    price: 2.99,
    image: '🍘',
    category: 'Snacks',
    description: 'Brown rice cakes',
    unit: '4.9oz package'
  },
  {
    id: '125',
    name: 'Protein Bars',
    price: 7.99,
    originalPrice: 9.99,
    discount: 20,
    image: '🍫',
    category: 'Snacks',
    description: 'Chocolate protein bars',
    unit: '6 pack'
  },
  {
    id: '126',
    name: 'Beef Jerky',
    price: 6.99,
    image: '🥩',
    category: 'Snacks',
    description: 'Original beef jerky',
    unit: '3.25oz bag'
  },
  {
    id: '127',
    name: 'Cheese Crackers',
    price: 3.49,
    image: '🧀',
    category: 'Snacks',
    description: 'Cheddar cheese crackers',
    unit: '12oz box'
  },
  {
    id: '128',
    name: 'Chocolate',
    price: 2.99,
    originalPrice: 3.99,
    discount: 25,
    image: '🍫',
    category: 'Snacks',
    description: 'Milk chocolate bar',
    unit: '1.55oz bar'
  },
  {
    id: '129',
    name: 'Candy',
    price: 1.99,
    image: '🍬',
    category: 'Snacks',
    description: 'Assorted gummy candy',
    unit: '5oz bag'
  },
  {
    id: '130',
    name: 'Chips & Dip',
    price: 4.99,
    image: '🥣',
    category: 'Snacks',
    description: 'Tortilla chips with salsa',
    unit: 'combo pack'
  },

  // Frozen Foods (15 items)
  {
    id: '131',
    name: 'Frozen Berries',
    price: 4.99,
    image: '🫐',
    category: 'Frozen',
    description: 'Mixed frozen berries',
    unit: '12oz bag'
  },
  {
    id: '132',
    name: 'Ice Cream',
    price: 5.99,
    originalPrice: 6.99,
    discount: 14,
    image: '🍦',
    category: 'Frozen',
    description: 'Vanilla ice cream',
    unit: '1.5qt container'
  },
  {
    id: '133',
    name: 'Frozen Pizza',
    price: 6.99,
    originalPrice: 8.99,
    discount: 22,
    image: '🍕',
    category: 'Frozen',
    description: 'Margherita frozen pizza',
    unit: '12 inch'
  },
  {
    id: '134',
    name: 'Frozen Vegetables',
    price: 2.49,
    image: '🥦',
    category: 'Frozen',
    description: 'Mixed frozen vegetables',
    unit: '16oz bag'
  },
  {
    id: '135',
    name: 'Frozen Chicken',
    price: 7.99,
    image: '🐔',
    category: 'Frozen',
    description: 'Frozen chicken nuggets',
    unit: '2lb bag'
  },
  {
    id: '136',
    name: 'Frozen Waffles',
    price: 3.99,
    originalPrice: 4.99,
    discount: 20,
    image: '🧇',
    category: 'Frozen',
    description: 'Whole grain waffles',
    unit: '10 count'
  },
  {
    id: '137',
    name: 'Frozen Fries',
    price: 2.99,
    image: '🍟',
    category: 'Frozen',
    description: 'Crispy french fries',
    unit: '2lb bag'
  },
  {
    id: '138',
    name: 'Frozen Yogurt',
    price: 4.49,
    image: '🍦',
    category: 'Frozen',
    description: 'Strawberry frozen yogurt',
    unit: '1qt container'
  },
  {
    id: '139',
    name: 'Frozen Burritos',
    price: 5.99,
    image: '🌯',
    category: 'Frozen',
    description: 'Bean and cheese burritos',
    unit: '8 pack'
  },
  {
    id: '140',
    name: 'Frozen Seafood',
    price: 9.99,
    image: '🦐',
    category: 'Frozen',
    description: 'Frozen shrimp ring',
    unit: '1lb package'
  },
  {
    id: '141',
    name: 'Frozen Fruit',
    price: 3.99,
    image: '🍓',
    category: 'Frozen',
    description: 'Frozen strawberries',
    unit: '16oz bag'
  },
  {
    id: '142',
    name: 'Frozen Meals',
    price: 4.99,
    image: '🍽️',
    category: 'Frozen',
    description: 'Chicken alfredo meal',
    unit: '12oz package'
  },
  {
    id: '143',
    name: 'Frozen Bread',
    price: 2.99,
    image: '🍞',
    category: 'Frozen',
    description: 'Frozen dinner rolls',
    unit: '12 count'
  },
  {
    id: '144',
    name: 'Frozen Juice',
    price: 1.99,
    image: '🧃',
    category: 'Frozen',
    description: 'Frozen orange juice concentrate',
    unit: '12oz can'
  },
  {
    id: '145',
    name: 'Frozen Dessert',
    price: 3.99,
    image: '🍰',
    category: 'Frozen',
    description: 'Frozen cheesecake',
    unit: '17oz package'
  },

  // Health & Wellness (10 items)
  {
    id: '146',
    name: 'Vitamins',
    price: 12.99,
    originalPrice: 15.99,
    discount: 19,
    image: '💊',
    category: 'Health & Wellness',
    description: 'Daily multivitamins',
    unit: '60 count'
  },
  {
    id: '147',
    name: 'Protein Powder',
    price: 24.99,
    originalPrice: 29.99,
    discount: 17,
    image: '🥤',
    category: 'Health & Wellness',
    description: 'Whey protein powder',
    unit: '2lb container'
  },
  {
    id: '148',
    name: 'Omega-3',
    price: 15.99,
    image: '💊',
    category: 'Health & Wellness',
    description: 'Fish oil omega-3 capsules',
    unit: '120 count'
  },
  {
    id: '149',
    name: 'Probiotics',
    price: 18.99,
    originalPrice: 22.99,
    discount: 17,
    image: '💊',
    category: 'Health & Wellness',
    description: 'Daily probiotic capsules',
    unit: '30 count'
  },
  {
    id: '150',
    name: 'Vitamin C',
    price: 8.99,
    image: '💊',
    category: 'Health & Wellness',
    description: 'Vitamin C tablets',
    unit: '100 count'
  },
  {
    id: '151',
    name: 'Calcium',
    price: 9.99,
    image: '💊',
    category: 'Health & Wellness',
    description: 'Calcium with vitamin D',
    unit: '120 count'
  },
  {
    id: '152',
    name: 'Fiber Supplement',
    price: 11.99,
    originalPrice: 14.99,
    discount: 20,
    image: '🥤',
    category: 'Health & Wellness',
    description: 'Daily fiber supplement',
    unit: '48 servings'
  },
  {
    id: '153',
    name: 'Herbal Tea',
    price: 4.99,
    image: '🍵',
    category: 'Health & Wellness',
    description: 'Chamomile herbal tea',
    unit: '20 bags'
  },
  {
    id: '154',
    name: 'Energy Supplements',
    price: 16.99,
    image: '⚡',
    category: 'Health & Wellness',
    description: 'Natural energy supplements',
    unit: '60 capsules'
  },
  {
    id: '155',
    name: 'Meal Replacement',
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: '🥤',
    category: 'Health & Wellness',
    description: 'Meal replacement shakes',
    unit: '12 pack'
  }
];

export const getItemsByCategory = (category: string) => {
  return groceryItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
};

export const getDealsItems = () => {
  return groceryItems.filter(item => item.discount && item.discount > 0);
};

export const getFreshItems = () => {
  return groceryItems.filter(item => item.category === 'Fresh Produce');
};

export const searchItems = (query: string) => {
  if (!query.trim()) return [];
  return groceryItems.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const getAllCategories = () => {
  return [...new Set(groceryItems.map(item => item.category))];
};

export const getAllItems = () => {
  return groceryItems;
};
