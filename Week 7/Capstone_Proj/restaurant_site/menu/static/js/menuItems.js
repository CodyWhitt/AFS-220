const menuItems = [
    // Soup & Salad
    {
      title: 'SOUP & SALAD COMBO',
      price: 6.95,
      description: 'A cup of our Soup Du Jour and your choice of a Small Caesar or Small Garden Salad',
      category: 'soup_salad',
    },
    {
      title: 'SOUP DU JOUR',
      price: 3.95,
      description: '',
      category: 'soup_salad',
    },
    {
      title: 'SIDE SALAD',
      price: 3.95,
      description: 'Caesar Salad | Garden Salad',
      category: 'soup_salad',
    },
    {
      title: 'GRILLED ANTIPASTO SALAD',
      price: 12.95,
      description: 'Grilled seasonal vegetables and white beans tossed with lemon juice, olive oil, and fresh herbs, topped with goat cheese, and served on a bed of arugula with fresh pita',
      category: 'soup_salad',
    },
    {
      title: 'GREEK SALAD',
      price: 13.95,
      description: 'Romaine lettuce, field greens, artichoke hearts, capers, tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese served with Kalamata-feta dressing',
      category: 'soup_salad',
    },
    {
      title: 'CRAB CAKE SALAD',
      price: 12.95,
      description: 'Two crab cakes, romaine lettuce, and spring mix served with walnut basil pesto, chipotle aioli, balsamic vinegar, and olive oil',
      category: 'soup_salad',
    },
    {
      title: 'COBB SALAD',
      price: 16.95,
      description: 'Romaine lettuce, eggs, tomatoes, cucumbers, chicken, bacon, pepperoncini, avocados, and gorgonzola cheese served with red pepper ranch dressing',
      category: 'soup_salad',
    },
    {
      title: 'GRILLED SALMON SALAD',
      price: 19.95,
      description: 'Green leaf lettuce, field greens, tomatoes, oranges, red onions, and grilled salmon topped with vinegar and served with Italian dressing',
      category: 'soup_salad',
    },
    {
      title: 'CAPRESE SALAD',
      price: 11.95,
      description: 'Sliced tomatoes topped with fresh mozzarella, balsamic vinegar, olive oil, and basil served with roasted red bell peppers',
      category: 'soup_salad',
    },
    {
      title: 'PREMIUM ADD-ONS',
      price: null,
      description: 'Organic Chicken $6.95\nFried Chicken $6.95\nShrimp $9.45\nSalmon $11.95',
      category: 'soup_salad',
    },
    {
      title: 'DRESSINGS',
      price: null,
      description: 'Roasted red pepper ranch | Gorgonzola cream | Kalamata-feta | Balsamic vinaigrette | Citrus vinaigrette | Honey mustard | Italian | Caesar',
      category: 'soup_salad',
    },
  
    // Pasta Bar
    {
      title: 'PICK A PASTA',
      price: null,
      description: 'Fettuccine | Spaghetti | Penne | Angel Hair | Gluten-Free +$2',
      category: 'pasta_bar',
    },
    {
      title: 'PICK A SAUCE',
      price: null,
      description: 'Marinara | Spicy Marinara | Bolognese | Alfredo | Roasted Red Pepper Alfredo | Creamy Basil Pesto | Tomato Alfredo | Four Cheese (mozzarella, parmesan, gorgonzola, cheddar)',
      category: 'pasta_bar',
    },
    {
      title: 'PICK TWO ADD-INS',
      price: null,
      description: 'Tomatoes | Spinach | Artichokes | Peas | Onions | Olives | Eggplant | Mushrooms | Green Peppers | Red Peppers | Jalapeños | Gorgonzola | Feta',
      category: 'pasta_bar',
    },
    {
      title: 'SPECIALTY TOPPINGS',
      price: null,
      description: 'Sausage | Pancetta | Prosciutto $3\nMeatballs $4\nGrilled Chicken | Fried Chicken $6.95\nShrimp $9.45\nSalmon (8 oz.) $11.95',
      category: 'pasta_bar',
    },
  
    // North End Neighborhood Sandwiches
    {
      title: 'SAUSAGE, PEPPER & ONION SUB',
      price: 8.95,
      description: 'HALF $8.95 | WHOLE $16.95 | SPECIAL $10.95\nOur house sausage with sautéed peppers, onions, and marinara',
      category: 'sandwiches',
    },
    {
      title: 'CHICKEN PARM SUB',
      price: 11.95,
      description: 'HALF $11.95 | WHOLE $22.95 | SPECIAL $12.95\nOur famous chicken parmesan stuffed in a sub roll',
      category: 'sandwiches',
    },
    {
      title: 'VEAL PARM SUB',
      price: 12.95,
      description: 'HALF $12.95 | WHOLE $26.95 | SPECIAL $14.95\nOur veal parmesan stuffed in a sub roll',
      category: 'sandwiches',
    },
    {
      title: 'EGGPLANT PARM SUB',
      price: 12.95,
      description: 'HALF $12.95 | WHOLE $24.95 | SPECIAL $12.95\nOur eggplant parmesan stuffed in a sub roll',
      category: 'sandwiches',
    },
    {
      title: 'SAUSAGE PARM SUB',
      price: 9.95,
      description: 'HALF $9.95 | WHOLE $19.95 | SPECIAL $12.95\nOur house sausage covered with marinara and melted mozzarella cheese',
      category: 'sandwiches',
    },
    {
      title: 'THE ITALIAN HERO SUB',
      price: 14.95,
      description: 'HALF $14.95 | WHOLE $28.95 | SPECIAL $15.95\nSlices of prosciutto and salami, banana peppers, fresh mozzarella, our house bruschetta mix, arugula, and balsamic vinaigrette',
      category: 'sandwiches',
    },
    {
      title: 'THE OCEANO SUB',
      price: 10.95,
      description: 'HALF $10.95 | WHOLE $22.95 | SPECIAL $12.95\nFried calamari, shrimp, banana peppers, and chipotle mayo',
      category: 'sandwiches',
    },
    {
      title: 'SPICY CHICKEN SUB',
      price: 9.95,
      description: 'HALF $9.95 | WHOLE $18.95 | SPECIAL $11.95\nOrganic fried chicken breast coated in spices and stuffed in a sub roll with spring mix, tomatoes, and chipotle mayo',
      category: 'sandwiches',
    },
    {
      title: 'MEATBALL PARM SUB',
      price: 10.95,
      description: 'HALF $10.95 | WHOLE $21.95 | SPECIAL $11.95\nOur meatballs loaded into a sub roll and topped with marinara and melted mozzarella cheese',
      category: 'sandwiches',
    },
    {
      title: 'CHICKEN BRUSCHETTA SANDWICH',
      price: 14.95,
      description: 'WHOLE $14.95\nFresh pita stuffed with grilled organic chicken breast, pesto, bruschetta tomato mix, feta cheese, and spring mix. Served with fries or a side salad.',
      category: 'sandwiches',
    },
    {
      title: 'THE PORTO',
      price: 12.95,
      description: 'WHOLE $12.95\nFresh pita stuffed with portobello mushroom and eggplant slices, roasted red bell pepper, fresh mozzarella and basil aioli. Served with fries or a side salad.',
      category: 'sandwiches',
    },
  ];
  