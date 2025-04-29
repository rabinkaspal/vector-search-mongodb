import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

type Recipe = {
    title: string;
    description: string;
};

const recipes: Recipe[] = [
    {
        title: "Classic Spaghetti Bolognese",
        description:
            "A hearty Italian pasta dish featuring a rich tomato sauce with ground beef, onions, garlic, and herbs. Simmered slowly to develop deep flavors and served over al dente spaghetti with freshly grated Parmesan cheese on top.",
    },
    {
        title: "Chicken Tikka Masala",
        description:
            "Tender pieces of marinated chicken cooked in a creamy, spiced tomato sauce with flavors of ginger, garlic, and garam masala. This popular Indian-inspired dish pairs perfectly with basmati rice and warm naan bread.",
    },
    {
        title: "Vegetable Stir Fry",
        description:
            "A quick and healthy dish of crisp vegetables like bell peppers, broccoli, carrots, and snap peas tossed in a savory soy and ginger sauce. Ready in minutes and perfect served over steamed rice or noodles.",
    },
    {
        title: "Homemade Beef Lasagna",
        description:
            "Layers of wide pasta sheets, seasoned ground beef in tomato sauce, creamy bechamel, and melted cheese baked to perfection. This comforting Italian classic features a crispy top with a gooey, savory interior that's perfect for family dinners.",
    },
    {
        title: "Roast Chicken with Herbs",
        description:
            "A whole chicken rubbed with butter, garlic, and fresh herbs like rosemary and thyme, then roasted until the skin is crispy and golden while the meat remains juicy and tender. Served with roasted potatoes and vegetables for a complete meal.",
    },
    {
        title: "Mushroom Risotto",
        description:
            "Creamy Italian rice dish cooked slowly with white wine, vegetable broth, and sautéed mushrooms. Finished with butter and Parmesan cheese for a velvety texture, this comforting meal features earthy flavors and a luxurious mouthfeel.",
    },
    {
        title: "Fish Tacos",
        description:
            "Pieces of white fish seasoned and grilled or fried until flaky, served in warm corn tortillas with crunchy cabbage slaw, creamy avocado, zesty lime, and a drizzle of spicy sauce. Fresh, light, and bursting with vibrant flavors.",
    },
    {
        title: "Beef Bourguignon",
        description:
            "A classic French stew where beef chunks are slowly braised with red wine, carrots, onions, mushrooms, and herbs until tender. The rich, deep sauce develops complex flavors during the long cooking process, creating a hearty and elegant dish.",
    },
    {
        title: "Vegetable Curry",
        description:
            "A flavorful blend of mixed vegetables like cauliflower, potatoes, peas, and carrots simmered in a fragrant sauce of coconut milk, curry spices, and aromatics. This versatile vegetarian dish can be adjusted for heat preference and served with rice or flatbread.",
    },
    {
        title: "Grilled Salmon",
        description:
            "Fresh salmon fillets marinated with lemon, dill, and olive oil, then grilled to perfection with a slightly crisp exterior and moist, flaky interior. This heart-healthy dish pairs beautifully with steamed vegetables and a light herb sauce.",
    },
    {
        title: "Chocolate Chip Cookies",
        description:
            "Classic homemade cookies featuring a buttery, slightly chewy center with crisp edges and generous chunks of chocolate throughout. These timeless treats balance sweetness with a hint of salt and vanilla, making them irresistible when served warm.",
    },
    {
        title: "Beef Stroganoff",
        description:
            "Tender strips of beef sautéed with mushrooms and onions in a creamy sauce enhanced with sour cream and a touch of mustard. This Russian-inspired comfort food is traditionally served over egg noodles and garnished with fresh parsley.",
    },
    {
        title: "Vegetable Biryani",
        description:
            "Fragrant basmati rice cooked with mixed vegetables, saffron, and aromatic spices like cardamom, cinnamon, and cloves. Layers of flavor develop as the dish cooks, resulting in a colorful, festive rice dish that's both satisfying and flavorful.",
    },
    {
        title: "Lemon Garlic Roast Chicken",
        description:
            "A succulent whole chicken infused with bright lemon and savory garlic flavors, roasted until golden brown. The skin becomes crispy while the meat remains juicy, creating a simple yet impressive main dish that fills your home with enticing aromas.",
    },
    {
        title: "Spinach and Feta Stuffed Chicken Breast",
        description:
            "Chicken breasts butterflied and filled with a mixture of sautéed spinach, tangy feta cheese, and garlic, then baked until golden. This protein-rich dish offers a perfect balance of flavors and looks impressive despite being relatively simple to prepare.",
    },
    {
        title: "Classic Caesar Salad",
        description:
            "Crisp romaine lettuce tossed in a creamy dressing made with garlic, anchovies, lemon juice, and Parmesan, topped with homemade croutons and additional cheese. This timeless salad offers a perfect balance of creamy, tangy, and crunchy textures.",
    },
    {
        title: "Baked Mac and Cheese",
        description:
            "Elbow macaroni pasta baked in a rich sauce made from sharp cheddar and other cheeses, creating a creamy interior with a crispy, golden breadcrumb topping. This nostalgic comfort food is the ultimate crowd-pleaser for both children and adults alike.",
    },
    {
        title: "Beef and Broccoli Stir Fry",
        description:
            "Thinly sliced beef and crisp broccoli florets quickly cooked in a savory sauce with ginger, garlic, and soy sauce. This Chinese-inspired dish comes together in minutes and delivers a satisfying combination of tender meat and vegetables.",
    },
    {
        title: "Tomato Basil Soup",
        description:
            "A smooth, flavorful soup made from roasted tomatoes, fresh basil, and a touch of cream. This comforting classic balances the natural sweetness of tomatoes with aromatic herbs and serves as the perfect companion to a grilled cheese sandwich.",
    },
    {
        title: "Shrimp Scampi",
        description:
            "Succulent shrimp sautéed in a sauce of butter, garlic, white wine, and lemon juice, then tossed with pasta and garnished with fresh parsley. This elegant seafood dish comes together quickly but tastes like something from a fine restaurant.",
    },
    {
        title: "Eggplant Parmesan",
        description:
            "Slices of eggplant breaded and fried until golden, then layered with tomato sauce and cheese before being baked to bubbly perfection. This vegetarian Italian classic offers rich flavors and satisfying textures that even meat-lovers appreciate.",
    },
    {
        title: "Honey Glazed Salmon",
        description:
            "Fresh salmon fillets brushed with a sweet and savory glaze made from honey, soy sauce, and garlic, then baked until flaky. The glaze caramelizes slightly during cooking, creating a delicious contrast to the rich, tender fish beneath.",
    },
    {
        title: "Chicken Pot Pie",
        description:
            "A comforting dish featuring tender chunks of chicken, carrots, peas, and potatoes in a creamy sauce, all enclosed in a flaky, buttery crust. This hearty one-dish meal combines savory flavors with satisfying textures for the ultimate comfort food experience.",
    },
    {
        title: "Beef Tacos",
        description:
            "Seasoned ground beef cooked with onions and spices, served in crispy corn tortilla shells with fresh toppings like lettuce, tomato, cheese, and salsa. This Mexican-inspired favorite allows for customization and is perfect for casual dining.",
    },
    {
        title: "Mushroom and Spinach Quiche",
        description:
            "A savory custard pie filled with sautéed mushrooms, wilted spinach, and cheese in a buttery crust. This versatile dish works beautifully for breakfast, brunch, or dinner and can be served warm or at room temperature.",
    },
    {
        title: "Thai Green Curry",
        description:
            "A vibrant, aromatic curry featuring vegetables and protein of choice in a coconut milk sauce flavored with green curry paste, lemongrass, and lime leaves. This balanced dish offers complex flavors that are simultaneously spicy, sweet, and tangy.",
    },
    {
        title: "Homemade Pizza",
        description:
            "A hand-stretched dough topped with tomato sauce, melted cheese, and favorite toppings, then baked until the crust is crispy and the cheese is bubbling. This customizable classic allows for endless creativity while satisfying universal cravings.",
    },
    {
        title: "French Onion Soup",
        description:
            "Caramelized onions slowly cooked until deeply golden, simmered in rich beef broth and topped with a slice of toasted bread and melted Gruyère cheese. This classic French soup balances sweet onion flavors with savory broth.",
    },
    {
        title: "Lemon Herb Roasted Chicken",
        description:
            "Whole chicken rubbed with a mixture of lemon zest, herbs, butter, and garlic, then roasted until skin is crispy and meat is juicy. The bright citrus notes complement the savory herbs, creating a simple yet impressive main dish.",
    },
    {
        title: "Beef Wellington",
        description:
            "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry, then baked until golden brown. This elegant British dish creates a stunning presentation with layers of flavor and texture for special occasions.",
    },
    {
        title: "Vegetable Lasagna",
        description:
            "Layers of pasta sheets alternated with seasoned vegetables, creamy ricotta, tomato sauce, and melted cheese. This meat-free version of the Italian classic is packed with nutritious vegetables while still delivering on comfort and satisfaction.",
    },
    {
        title: "Chicken Alfredo",
        description:
            "Fettuccine pasta tossed in a rich, creamy sauce with garlic and Parmesan, topped with sliced grilled chicken breast. This indulgent Italian-American favorite combines tender pasta with a velvety sauce and protein for a satisfying meal.",
    },
    {
        title: "Stuffed Bell Peppers",
        description:
            "Bell peppers hollowed out and filled with a savory mixture of rice, ground meat, onions, tomatoes, and spices, then baked until tender. This colorful, complete meal presents beautifully and allows for creative variations to suit any taste.",
    },
    {
        title: "Pumpkin Soup",
        description:
            "A smooth, velvety soup made from roasted pumpkin purée, aromatic spices, and a touch of cream. This seasonal favorite balances the natural sweetness of pumpkin with warming spices for a comforting bowl perfect for cool weather.",
    },
    {
        title: "Teriyaki Chicken",
        description:
            "Chicken pieces marinated and glazed in a sweet and savory sauce made from soy sauce, mirin, and sugar, then grilled or pan-fried until caramelized. This Japanese-inspired dish offers a perfect balance of flavors and pairs well with rice.",
    },
    {
        title: "Shakshuka",
        description:
            "Eggs poached in a flavorful sauce of tomatoes, bell peppers, onions, and spices like cumin and paprika. This North African and Middle Eastern dish is usually served directly from the skillet with bread for scooping up the sauce.",
    },
    {
        title: "Pulled Pork Sandwiches",
        description:
            "Slow-cooked pork shoulder seasoned with spices, then shredded and tossed with barbecue sauce and served on soft buns with coleslaw. This Southern classic features tender, flavorful meat with a perfect balance of tangy, sweet, and smoky notes.",
    },
    {
        title: "Greek Salad",
        description:
            "Crisp cucumber, ripe tomatoes, red onion, Kalamata olives, and feta cheese tossed with olive oil and oregano. This refreshing Mediterranean salad balances fresh vegetables with briny olives and cheese for a simple yet satisfying dish.",
    },
    {
        title: "Pad Thai",
        description:
            "Rice noodles stir-fried with eggs, tofu or shrimp, bean sprouts, and a sauce balancing sweet, sour, and savory flavors, garnished with peanuts and lime. This iconic Thai street food offers a complex flavor profile and varying textures in each bite.",
    },
    {
        title: "Baked Potato Soup",
        description:
            "A hearty soup featuring tender potatoes in a creamy base with bacon, cheese, and chives. This comforting bowl transforms the classic baked potato and its toppings into a satisfying soup perfect for cold weather dining.",
    },
    {
        title: "Chicken Parmesan",
        description:
            "Breaded chicken cutlets topped with tomato sauce and melted cheese, often served over pasta. This Italian-American classic combines crispy chicken with tangy sauce and gooey cheese for an irresistible combination of flavors and textures.",
    },
    {
        title: "Lentil Soup",
        description:
            "A hearty soup made with lentils, vegetables, and aromatic herbs and spices, simmered until the lentils are tender. This nutritious, protein-rich dish is both comforting and satisfying, perfect for a wholesome meal with rustic bread.",
    },
    {
        title: "BBQ Ribs",
        description:
            "Pork ribs slow-cooked until tender then glazed with barbecue sauce and finished on the grill or under the broiler. This quintessential American dish features meat that falls off the bone with a perfect balance of sweet, tangy, and smoky flavors.",
    },
    {
        title: "Caprese Salad",
        description:
            "A simple Italian salad of sliced ripe tomatoes, fresh mozzarella, and basil, drizzled with olive oil and balsamic glaze. This refreshing appetizer celebrates fresh ingredients and offers a perfect balance of flavors and textures.",
    },
    {
        title: "Beef Enchiladas",
        description:
            "Corn tortillas filled with seasoned ground beef and cheese, rolled and baked with enchilada sauce and more cheese on top. This Mexican-inspired dish combines savory meat, tangy sauce, and melted cheese for a satisfying meal.",
    },
    {
        title: "Potato Leek Soup",
        description:
            "A smooth, creamy soup made from sautéed leeks and potatoes simmered in broth until tender, then puréed. This classic French soup, also known as vichyssoise when served cold, offers subtle flavors that highlight the sweetness of leeks.",
    },
    {
        title: "Ratatouille",
        description:
            "A French Provençal stewed vegetable dish featuring eggplant, zucchini, bell peppers, and tomatoes with herbs de Provence. This rustic preparation celebrates summer vegetables and can be served as a side or main dish.",
    },
    {
        title: "Baked Ziti",
        description:
            "Ziti pasta mixed with tomato sauce, ricotta, and other cheeses, then baked until bubbly and golden. This Italian-American casserole is a crowd-pleasing comfort food that's perfect for feeding a family or gathering.",
    },
    {
        title: "Gazpacho",
        description:
            "A cold Spanish soup made from raw blended vegetables, primarily tomatoes, cucumbers, and bell peppers, with garlic and olive oil. This refreshing summer dish is served chilled and celebrates the bright flavors of fresh vegetables.",
    },
    {
        title: "Chicken Fajitas",
        description:
            "Strips of seasoned chicken cooked with sliced bell peppers and onions, served sizzling hot with warm tortillas and toppings like guacamole and sour cream. This Tex-Mex favorite allows diners to build their own wraps with their preferred fillings.",
    },
    {
        title: "Clam Chowder",
        description:
            "A creamy soup featuring tender clams, potatoes, onions, and often bacon, in a rich, thickened broth. This New England classic balances the briny flavor of clams with creamy comfort and is traditionally served with oyster crackers.",
    },
    {
        title: "Chicken Curry",
        description:
            "Pieces of chicken simmered in a flavorful sauce made with curry spices, onions, tomatoes, and often coconut milk. This versatile dish appears in many cultures with regional variations, offering complex flavors that develop during cooking.",
    },
    {
        title: "Tuna Casserole",
        description:
            "A nostalgic dish combining pasta, canned tuna, peas, and a creamy sauce, topped with breadcrumbs or crushed chips and baked until golden. This budget-friendly comfort food transforms simple pantry ingredients into a satisfying meal.",
    },
    {
        title: "Margherita Pizza",
        description:
            "A classic Italian pizza topped with tomato sauce, fresh mozzarella, basil leaves, and olive oil. This simple yet perfect combination, representing the colors of the Italian flag, allows quality ingredients to shine without overwhelming toppings.",
    },
    {
        title: "Chicken Noodle Soup",
        description:
            "A comforting soup featuring tender chicken, vegetables like carrots and celery, and egg noodles in a flavorful broth. This classic remedy for cold days and sick days alike offers warmth and nourishment in every spoonful.",
    },
    {
        title: "Falafel",
        description:
            "Crispy fried balls made from ground chickpeas or fava beans mixed with herbs and spices, often served in pita with tahini sauce and fresh vegetables. These Middle Eastern fritters offer a flavorful vegetarian protein option with contrasting textures.",
    },
    {
        title: "Spinach and Artichoke Dip",
        description:
            "A creamy dip made with chopped spinach, artichoke hearts, cream cheese, and other cheeses, baked until hot and bubbly. This popular appetizer balances rich, tangy flavors and is typically served with tortilla chips or bread.",
    },
    {
        title: "Shepherd's Pie",
        description:
            "A savory pie of ground lamb cooked with vegetables and gravy, topped with a layer of mashed potatoes and baked until golden. This British comfort food creates a complete meal in one dish with contrasting layers of flavor and texture.",
    },
    {
        title: "Chicken Marsala",
        description:
            "Chicken cutlets sautéed with mushrooms in a sauce made with Marsala wine, butter, and herbs. This Italian-American dish features tender chicken in a rich, slightly sweet sauce that's perfect served over pasta or with potatoes.",
    },
    {
        title: "Potato Salad",
        description:
            "Cooked potatoes mixed with mayonnaise, mustard, eggs, celery, onions, and herbs to create a creamy side dish. This picnic and barbecue staple can be customized endless ways while providing a comforting, crowd-pleasing option.",
    },
    {
        title: "Beef Stir Fry",
        description:
            "Thin slices of beef quickly cooked at high heat with mixed vegetables and a savory sauce, typically served over rice. This adaptable dish allows for creativity with seasonal vegetables while delivering a quick, satisfying meal.",
    },
    {
        title: "Minestrone Soup",
        description:
            "An Italian vegetable soup made with seasonal vegetables, beans, pasta, and often tomatoes in a flavorful broth. This hearty, adaptable soup makes use of available ingredients and becomes more flavorful as it sits.",
    },
    {
        title: "Chicken Shawarma",
        description:
            "Marinated chicken cooked on a vertical rotisserie, thinly sliced and served in pita with garlic sauce, pickles, and vegetables. This Middle Eastern street food features aromatic spices that create deeply flavorful, tender meat.",
    },
    {
        title: "Beef Stew",
        description:
            "Chunks of beef slowly simmered with vegetables like carrots, potatoes, and onions in a rich broth until tender. This hearty one-pot meal develops deep flavors during its long cooking time and is perfect for cold weather.",
    },
    {
        title: "Garlic Bread",
        description:
            "Bread sliced and spread with a mixture of butter, garlic, and herbs, then toasted until golden and fragrant. This popular side dish pairs perfectly with pasta and soups, offering a crunchy exterior with a soft, flavorful interior.",
    },
    {
        title: "Pesto Pasta",
        description:
            "Pasta tossed with a vibrant green sauce made from basil, pine nuts, garlic, Parmesan cheese, and olive oil. This classic Italian preparation celebrates fresh herbs and can be served hot or cold for a quick, flavorful meal.",
    },
    {
        title: "Chicken Enchiladas",
        description:
            "Corn tortillas filled with shredded chicken and cheese, rolled and baked with enchilada sauce and more cheese on top. This Mexican-inspired comfort food combines tender chicken with bold sauce and melted cheese.",
    },
    {
        title: "Apple Pie",
        description:
            "A classic dessert featuring sliced apples tossed with cinnamon and sugar, baked in a flaky pie crust until bubbly and golden. This iconic American treat balances sweet and tart flavors with contrasting textures of tender fruit and crisp pastry.",
    },
    {
        title: "Lobster Bisque",
        description:
            "A luxurious creamy soup made with lobster stock, cream, brandy, and tender pieces of lobster meat. This elegant French dish offers rich flavor and silky texture, often served as a sophisticated first course.",
    },
    {
        title: "Buffalo Chicken Wings",
        description:
            "Chicken wings fried until crispy then tossed in a spicy sauce made with hot sauce and butter, traditionally served with celery sticks and blue cheese dressing. This classic American bar food balances heat with cool, creamy contrast.",
    },
    {
        title: "Corn Chowder",
        description:
            "A hearty soup featuring sweet corn kernels, potatoes, onions, and often bacon in a creamy base. This comforting dish showcases seasonal corn and offers a perfect balance of sweet and savory flavors in each spoonful.",
    },
    {
        title: "Chicken Caesar Wrap",
        description:
            "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a tortilla for a portable meal. This convenient lunch option transforms the classic salad into a handheld format without sacrificing flavor.",
    },
    {
        title: "Chocolate Cake",
        description:
            "A rich, moist cake made with cocoa powder or melted chocolate, often layered with chocolate frosting. This classic dessert satisfies chocolate cravings with its intense flavor and tender crumb, perfect for celebrations or simple indulgence.",
    },
    {
        title: "Chicken and Dumplings",
        description:
            "A comforting stew of chicken and vegetables topped with soft, biscuit-like dumplings that steam and cook in the flavorful broth. This Southern classic combines a hearty soup with pillowy dumplings for the ultimate comfort food experience.",
    },
    {
        title: "Greek Moussaka",
        description:
            "A layered casserole of eggplant, spiced ground meat, and potatoes topped with a creamy bechamel sauce and baked until golden. This traditional Greek dish balances hearty layers with a light, fluffy topping for a satisfying meal.",
    },
    {
        title: "Cobb Salad",
        description:
            "A composed salad featuring rows of chicken, bacon, hard-boiled eggs, avocado, blue cheese, and tomatoes arranged over lettuce. This American classic offers a complete meal with contrasting flavors and textures in each forkful.",
    },
    {
        title: "Butternut Squash Soup",
        description:
            "A velvety soup made from roasted butternut squash pureed with aromatics, broth, and often a touch of cream. This autumn favorite highlights the natural sweetness of squash with warming spices for a comforting bowl.",
    },
    {
        title: "Chicken Biryani",
        description:
            "Fragrant basmati rice layered with marinated chicken, caramelized onions, and aromatic spices, then slow-cooked to perfection. This celebratory Indian dish offers complex flavors and textures in a festive presentation.",
    },
    {
        title: "Stuffed Mushrooms",
        description:
            "Mushroom caps filled with a savory mixture often containing breadcrumbs, cheese, herbs, and sometimes sausage, then baked until golden. These elegant appetizers offer a perfect bite-sized package of earthy mushroom and flavorful filling.",
    },
    {
        title: "Carrot Cake",
        description:
            "A moist spice cake featuring grated carrots, nuts, and spices like cinnamon, typically frosted with cream cheese icing. This popular dessert balances sweet and spice with tangy frosting and offers hidden vegetables for added moisture.",
    },
    {
        title: "Lemon Chicken",
        description:
            "Chicken pieces cooked in a bright sauce featuring lemon juice, chicken broth, and herbs until tender and infused with citrus flavor. This light yet satisfying dish balances the richness of chicken with the brightness of lemon.",
    },
    {
        title: "Stuffed Cabbage Rolls",
        description:
            "Cabbage leaves wrapped around a filling of ground meat, rice, and seasonings, simmered in a tomato sauce until tender. This Eastern European comfort food transforms humble ingredients into a satisfying, complete meal with layers of flavor.",
    },
    {
        title: "Fettuccine Alfredo",
        description:
            "Ribbon pasta tossed in a rich, creamy sauce made with butter, cream, and Parmesan cheese. This simple yet indulgent Italian classic allows the velvety sauce to cling to each strand of pasta for maximum flavor in every bite.",
    },
    {
        title: "Bruschetta",
        description:
            "Toasted bread rubbed with garlic and topped with a mixture of diced tomatoes, fresh basil, olive oil, and sometimes mozzarella. This Italian appetizer celebrates fresh, simple ingredients and offers a perfect balance of flavors and textures.",
    },
    {
        title: "Shrimp and Grits",
        description:
            "Creamy stone-ground grits topped with sautéed shrimp, often accompanied by bacon, mushrooms, and a flavorful sauce. This Southern comfort food combines coastal seafood with hearty grains for a satisfying meal with contrasting textures.",
    },
    {
        title: "Banana Bread",
        description:
            "A moist quick bread made with mashed ripe bananas, often featuring nuts or chocolate chips throughout. This homey treat transforms overripe bananas into a fragrant loaf perfect for breakfast, snacking, or dessert.",
    },
    {
        title: "Vegetable Frittata",
        description:
            "An Italian egg dish similar to an unfolded omelet, filled with vegetables, cheese, and herbs, started on the stovetop and finished in the oven. This versatile dish works for any meal and can showcase seasonal produce.",
    },
    {
        title: "Beef and Guinness Stew",
        description:
            "Chunks of beef slowly simmered with onions, carrots, and Guinness stout until tender in a rich, dark gravy. This Irish classic develops deep, complex flavors during its long cooking time and pairs perfectly with mashed potatoes.",
    },
    {
        title: "Chicken Quesadillas",
        description:
            "Flour tortillas filled with seasoned chicken and cheese, folded and cooked until crispy outside with melted cheese inside. This Tex-Mex favorite can include additions like peppers and onions and is typically served with salsa and sour cream.",
    },
    {
        title: "Pasta Primavera",
        description:
            "Pasta tossed with a variety of fresh spring vegetables in a light sauce, often featuring garlic, olive oil, and Parmesan. This vibrant dish celebrates seasonal produce while providing a lighter alternative to heavier pasta preparations.",
    },
    {
        title: "Cheesecake",
        description:
            "A rich dessert featuring a smooth filling made with cream cheese, eggs, and sugar atop a graham cracker crust. This versatile sweet can be flavored countless ways and offers the perfect balance of tangy and sweet with contrasting textures.",
    },
    {
        title: "Jambalaya",
        description:
            "A Louisiana Creole rice dish featuring meat, vegetables, and spices, often including elements of Spanish and French cuisine. This one-pot meal combines protein, vegetables, and rice with bold flavors from Cajun seasoning.",
    },
    {
        title: "Garlic Mashed Potatoes",
        description:
            "Creamy potatoes mashed with roasted garlic, butter, and cream until smooth and flavorful. This comforting side dish elevates traditional mashed potatoes with the sweet, mellow flavor of roasted garlic for a perfect accompaniment to many meals.",
    },
    {
        title: "Kung Pao Chicken",
        description:
            "A spicy Sichuan stir-fry featuring chicken, peanuts, vegetables, and chili peppers in a flavorful sauce. This Chinese dish balances heat, sweetness, and the numbing quality of Sichuan peppercorns for a complex flavor experience.",
    },
    {
        title: "Tiramisu",
        description:
            "An Italian dessert featuring layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder. This elegant no-bake treat balances the bitter notes of coffee and cocoa with the sweetness of creamy mascarpone.",
    },
    {
        title: "Chicken Piccata",
        description:
            "Thinly pounded chicken cutlets sautéed and served in a sauce of lemon, butter, capers, and white wine. This Italian-American dish balances rich and bright flavors with the tangy brine of capers complementing the lemon butter sauce.",
    },
    {
        title: "Hummus",
        description:
            "A creamy Middle Eastern dip made from pureed chickpeas, tahini, lemon juice, garlic, and olive oil. This versatile spread offers protein and flavor, perfect for dipping vegetables and pita or as a sandwich spread.",
    },
    {
        title: "Paella",
        description:
            "A Spanish rice dish cooked in a wide pan with saffron, vegetables, and various combinations of meat, seafood, and chorizo. This colorful, communal dish develops a prized crispy bottom layer called socarrat during cooking.",
    },
    {
        title: "Chicken Fried Steak",
        description:
            "Tenderized beef steak breaded and fried like chicken, then topped with creamy country gravy. This Southern comfort food offers a crispy coating surrounding tender meat, traditionally served with mashed potatoes and vegetables.",
    },
];

async function main() {
    console.log("Start seeding ...");

    try {
        // Clear existing data
        await prisma.recipe.deleteMany({});

        // insert recipes in batches
        const batchSize = 10;
        for (let i = 0; i < recipes.length; i += batchSize) {
            const batch = recipes.slice(i, i + batchSize);
            await Promise.all(
                batch.map(recipe =>
                    prisma.recipe.create({
                        data: recipe,
                    })
                )
            );
            console.log(`Seeded recipes ${i + 1} to  ${i + batch.length}`);
        }
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await prisma.$disconnect();
        console.log("Seeding finished.");
    }
}
main().catch(e => {
    console.error(e);
    process.exit(1);
});
