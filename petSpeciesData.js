/**
 * Pet Species and Breed Data
 * Shared source of truth for iOS app, web frontend, and Cloud Functions.
 * Last updated: 2026-06-15
 */

const allSpecies = [
  "Alpaca", "Anole", "Axolotl", "Bearded Dragon", "Bird", "Caiman Lizard",
  "Cat", "Chameleon", "Chicken", "Chinchilla", "Cow", "Degu",
  "Dog", "Donkey", "Duck", "Ferret", "Fish (Freshwater)", "Fish (Saltwater)",
  "Frog", "Gecko", "Gerbil", "Goat", "Goose", "Groundhog",
  "Guinea Pig", "Hamster", "Hedgehog", "Hermit Crab", "Horse", "Iguana",
  "Isopod", "Jumping Spider", "Lizard", "Llama", "Millipede", "Monitor",
  "Mouse", "Otter", "Pig", "Prairie Dog", "Rabbit", "Rat (Fancy)",
  "Scorpion", "Sheep", "Skink", "Skunk", "Snail", "Snake",
  "Sugar Glider", "Tarantula", "Tortoise", "Turkey", "Turtle", "Other"
];

const breedsBySpecies = {
  "Alpaca": ["Huacaya", "Suri", "Enter Manually"],
  "Anole": ["Bahaman (Brown) Anole", "Green Anole", "Enter Manually"],
  "Axolotl": [
    "Copper", "Golden Albino", "Leucistic", "Melanoid", "Piebald",
    "Wild Type", "Enter Manually"
  ],
  "Bearded Dragon": [
    "Central (Inland)", "Hypomelanistic", "Leatherback", "Rankin's", "Silkback",
    "Standard", "Translucent", "Witblits", "Zero", "Enter Manually"
  ],
  "Bird": [
    "African Grey", "Amazon", "Black", "Bourke's Parakeet", "Brotogeris",
    "Budgie/Budgerigar", "Button Quail", "Caique", "Canary", "Chicken",
    "Cockatiel", "Cockatoo", "Conure", "Crimson Rosella", "Diamond Dove",
    "Double-breasted", "Dove", "Duck", "Eclectus", "Emu",
    "European Starling", "Fancy", "Finch", "Galah", "Goffin's Cockatoo",
    "Goose", "Gouldian Finch", "Green-Cheek Conure", "Grouse", "Guinea Fowl",
    "Indian Ringneck", "Jenday Conure", "Kakariki", "Lineolated Parakeet", "Lory/Lorikeet",
    "Lovebird", "Macaw", "Major Mitchell's Cockatoo", "Mourning", "Mynah",
    "Nicobar Pigeon", "Ostrich", "Parakeet - Other", "Parrot Other", "Parrotlet",
    "Peacock/Pea fowl", "Pheasant", "Pigeon", "Pionus", "Poicephalus",
    "Quail", "Quaker Parakeet", "Rhea", "Ringneck/Psittacula", "Rock",
    "Rose-breasted", "Rosella", "Senegal", "Society Finch", "Softbill (Other)",
    "Sulphur-Crested Cockatoo", "Sun Conure", "Swan", "Toucan", "Turkey",
    "Umbrella Cockatoo", "Zebra Finch", "Enter Manually"
  ],
  "Caiman Lizard": ["Guianan", "Northern", "Enter Manually"],
  "Cat": [
    "Abyssinian", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair",
    "Angora", "Applehead Siamese", "Australian Mist", "Balinese", "Bengal",
    "Birman", "Bobtail", "Bombay", "Brazilian Shorthair", "British Shorthair",
    "Burmese", "Burmilla", "Calico", "Canadian Hairless", "Chanilly/Tiffany",
    "Chartreux", "Chausie", "Chinchilla", "Colorpoint Shorthair", "Cornish Rex",
    "Cymric", "Devon Rex", "Dilute Calico", "Dilute Tortoiseshell", "Domestic Long Hair",
    "Domestic Medium Hair", "Domestic Short Hair", "Egyptian Mau", "European Burmese", "European Shorthair",
    "Exotic Shorthair", "Extra-Toes Cat (Hemingway Polydactyl)", "German Rex", "Havana", "Highlander",
    "Himalayan", "Japanese Bobtail", "Javanese", "Korat", "LaPerm",
    "Lykoi", "Maine Coon", "Malayan", "Manx", "Munchkin",
    "Nebelung", "Norwegian Forest Cat", "Ocicat", "Oriental Long Hair", "Oriental Short Hair",
    "Oriental Tabby", "Persian", "Peterbald", "Pixie-Bob", "Ragamuffin",
    "Ragdoll", "Rex", "Russian Blue", "Savannah", "Scottish Fold",
    "Scottish Straight", "Selkirk Rex", "Siamese", "Siberian", "Singapura",
    "Snowshoe", "Somali", "Sphynx (hairless cat)", "Tabby", "Tiffany",
    "Tiger", "Tonkinese", "Torbie", "Tortoiseshell", "Toyger",
    "Turkish Angora", "Turkish Van", "Turkish Vankedisi", "Tuxedo", "Enter Manually"
  ],
  "Chameleon": ["Jackson's", "Panther", "Veiled", "Enter Manually"],
  "Chicken": [
    "Ameraucana", "Araucana", "Australorp", "Bantam", "Barred Rock",
    "Brahma", "Cochin", "Cornish", "Dominique", "Easter Egger",
    "Gamefowl", "Jersey", "Leghorn", "New Hampshire", "Orpington",
    "Plymouth Rock", "Polish", "Rhode Island Red", "Sebright", "Silkie",
    "Wyandotte", "Enter Manually"
  ],
  "Chinchilla": [
    "Beige", "Black Velvet", "Ebony", "Mosaic", "Sapphire",
    "Standard Grey", "Violet", "White", "Enter Manually"
  ],
  "Cow": [
    "Angus", "Ayrshire", "Beefmaster", "Brahma", "Brangus",
    "Brown Swiss", "Charolais", "Cow", "Guernsey", "Hereford",
    "Holstein", "Jersey", "Limousin", "Longhorn", "Milking Shorthorn",
    "Murray Gray", "Pinzgauer", "Salers", "Santa Gertrudis", "Shorthorn",
    "Simmental", "Enter Manually"
  ],
  "Degu": [
    "Blue", "Cream", "Sand", "Standard", "Enter Manually"
  ],
  "Dog": [
    "Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akbash", "Akita",
    "Alaskan Klee Kai", "Alaskan Malamute", "American Bulldog", "American Eskimo Dog", "American Foxhound",
    "American Hairless Terrier", "American Pit Bull Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Anatolian Karabash Dog",
    "Anatolian Shepherd", "Appenzell Mountain Dog", "Argentinian Mastiff", "Aussiedoodle", "Australian Cattle Dog/Blue Heeler",
    "Australian Kelpie", "Australian Shepherd", "Australian Terrier", "Basenji", "Basset Griffon Vendeen",
    "Basset Hound", "Beagle", "Bearded Collie", "Beauceron", "Bedlington Terrier",
    "Belgian Griffon", "Belgian Shepherd", "Belgian Shepherd Dog Sheepdog", "Belgian Shepherd Laekenois", "Belgian Shepherd Malinois",
    "Belgian Shepherd Tervuren", "Bernedoodle", "Bernese Mountain Dog", "Bichon Frise", "Biewer",
    "Black and Tan Coonhound", "Black Labrador Retriever", "Black Mouth Cur", "Black Russian Terrier", "Bloodhound",
    "Blue Lacy", "Bluetick Coonhound", "Bobtail", "Boerboel Mastiff", "Bolognese",
    "Bordeaux", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier",
    "Bouvier des Flandres", "Boxer", "Boykin Spaniel", "Brazilian Mastiff", "Briard",
    "Brittany", "Brussels Griffon", "Bull Terrier", "Bulldog", "Bullmastiff",
    "Cairn Terrier", "Canaan Dog", "Cane Corso Mastiff", "Cardigan Welsh Corgi", "Carolina Dog",
    "Catahoula Leopard Dog", "Cattle Dog", "Caucasian Sheepdog (Caucasian Ovtcharka)", "Cavachon", "Cavalier King Charles Spaniel",
    "Cavapoo", "Chesapeake Bay Retriever", "Chihuahua", "Chinese Crested-Hairless", "Chinese Crested-Powder Puff",
    "Chinese Foo Dog", "Chinese Shar-Pei", "Chinook", "Chiweenie", "Chocolate Labrador Retriever",
    "Chow Chow", "Cirneco dellEtna", "Clumber Spaniel", "Cockalier", "Cockapoo",
    "Cocker Spaniel", "Collie", "Coonhound", "Corgi", "Coton de Tulear",
    "Curly-Coated Retriever", "Dachshund", "Dalmatian", "Dandie Dinmont Terrier", "Danish Broholmer",
    "Deerhound", "Doberman Pinscher", "Dogo Argentino", "Dogue de Bordeaux", "Dutch Shepherd",
    "Elkhound", "English Bulldog", "English Cocker Spaniel", "English Coonhound", "English Foxhound",
    "English Mastiff", "English Pointer", "English Setter", "English Sheepdog", "English Shepherd",
    "English Springer Spaniel", "English Toy Spaniel", "Entlebucher", "Eskimo Dog", "Eskimo Spitz",
    "Eurasier", "Feist", "Field Spaniel", "Fila Brasileiro", "Finnish Lapphund",
    "Finnish Spitz", "Flat-coated Retriever", "Fox Terrier", "Foxhound", "French Brittany",
    "French Bulldog", "French Mastiff", "Galgo Spanish Greyhound", "German Pinscher", "German Shepherd Dog",
    "German Shorthaired Pointer", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier",
    "Golden Retriever", "Goldendoodle", "Gordon Setter", "Great Dane", "Great Pyrenees",
    "Greater Swiss Mountain Dog", "Greyhound", "Halden Hound (Haldenstrover)", "Harrier", "Havanese",
    "Hollandse Tulphond", "Hound", "Hovawart", "Husky", "Ibizan Hound",
    "Illyrian Sheepdog", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound",
    "Italian Greyhound", "Italian Mastiff", "Italian Spinone", "Jack Russell Terrier", "Jack Russell Terrier (Parson Russell Terrier)",
    "Japanese Chin", "Jindo (Korean)", "Kai Dog", "Karelian Bear Dog", "Keeshond",
    "Kerry Blue Terrier", "Kishu", "Klee Kai", "Komondor", "Kuvasz",
    "Kyi Leo", "Labradoodle", "Labrador Retriever", "Lakeland Terrier", "Lancashire Heeler",
    "Leonberger", "Lhasa Apso", "Löwchen", "Maltese", "Maltipoo",
    "Manchester Terrier", "Maremma Sheepdog", "Markiesje", "Mastiff", "McNab",
    "Mexican Hairless", "Miniature American Shepherd", "Miniature Bull Terrier", "Miniature Pinscher", "Miniature Schnauzer",
    "Morkie", "Mountain Cur", "Mountain Dog", "Munsterlander", "Neapolitan Mastiff",
    "New Guinea Singing Dog", "Newfoundland Dog", "Norfolk Terrier", "Norwegian Buhund", "Norwegian Elkhound",
    "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck-Tolling Retriever", "Old English Sheepdog", "Otterhound",
    "Papillon", "Parson Russell Terrier", "Patterdale Terrier (Fell Terrier)", "Pekingese", "Pembroke Welsh Corgi",
    "Peruvian Inca Orchid", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Picardy Shepherd", "Pit Bull Terrier",
    "Plott Hound", "Podengo Portugueso", "Pointer", "Polish Lowland Sheepdog", "Pomeranian",
    "Pomsky", "Poodle (Miniature)", "Poodle (Standard)", "Poodle (T-Cup)", "Poodle (Toy)",
    "Poodle (unknown type)", "Portuguese Water Dog", "Presa Canario", "Pug", "Puggle",
    "Puli", "Pumi", "Queensland Heeler", "Rat Terrier", "Red Heeler",
    "Redbone Coonhound", "Retriever", "Rhodesian Ridgeback", "Rottweiler", "Russian Wolfhound",
    "Saarlooswolfhond", "Saint Bernard", "Saluki", "Saluki Greyhound", "Samoyed",
    "Schiller Hound", "Schipperke", "Schnauzer", "Scottish Deerhound", "Scottish Terrier Scottie",
    "Sealyham Terrier", "Setter", "Shar Pei", "Sheep Dog", "Sheepadoodle",
    "Shepherd", "Shetland Sheepdog Sheltie", "Shiba Inu", "Shih Tzu", "Shorkie",
    "Siberian Husky", "Silky Terrier", "Skye Terrier", "Sloughi", "Smooth Collie",
    "Smooth Fox Terrier", "Soft-Coated Wheaten Terrier", "South Russian Ovcharka", "Spaniel", "Spanish Mastiff",
    "Spinone Italiano", "Spitz", "Springer Spaniel", "Staffordshire Bull Terrier", "Sussex Spaniel",
    "Swedish Vallhund", "Tamaskan", "Terrier", "Thai Ridgeback", "Tibetan Mastiff",
    "Tibetan Spaniel", "Tibetan Terrier", "Tosa Inu", "Toy Fox Terrier", "Toy Terrier",
    "Treeing Walker Coonhound", "Vizsla", "Weimaraner", "Welsh Corgi", "Welsh Springer Spaniel",
    "Welsh Terrier", "West Highland White Terrier Westie", "Wheaten Terrier", "Whippet", "White German Shepherd",
    "White Swiss Shepherd Dog (Swiss Berger)", "Wire-haired Pointing Griffon", "Wirehaired Fox Terrier", "Wolf Dog", "Xoloitzcuintle/Mexican Hairless",
    "Yellow Labrador Retriever", "Yorkshire Terrier Yorkie", "Enter Manually"
  ],
  "Donkey": [
    "Abyssinian", "Anatolia", "Donkey", "Donkey/Mule", "Large Standard",
    "Mammoth", "Mary", "Mini", "Poitou", "Standard",
    "Enter Manually"
  ],
  "Duck": [
    "American Saxony", "Anconas", "Australian Spotteds", "Aylesbury", "Black East Indies",
    "Buff", "Call Duck", "Campbells", "Cayuga", "Coast",
    "Crested", "Duck", "Duclair", "Hook Bulls (Kromsnaveleend)", "Indian Runner",
    "Khaki Campbell", "Magpie", "Mallard", "Muscovy", "Odd",
    "Orpington", "Pekin", "Rouen", "Rouen Clair", "Runner",
    "Saxony", "Silky", "Silver Appleyards", "Swedish Blue", "Swedish Yellow",
    "Welsh Harlequin", "Wood", "Enter Manually"
  ],
  "Ferret": [
    "Albino", "Angora", "Dark-eyed White", "European Polecat Hybrid", "Sable",
    "Silver", "Standard", "Enter Manually"
  ],
  "Fish (Freshwater)": [
    "Angelfish", "Arowana", "Betta", "Cherry Barb", "Cichlid",
    "Corydoras", "Discus", "Goldfish", "Guppy", "Koi",
    "Kuhli Loach", "Molly", "Neon Tetra", "Oscar", "Platy",
    "Plecostomus", "Rainbowfish", "Ranchu Goldfish", "Swordtail", "Zebra Danio",
    "Enter Manually"
  ],
  "Fish (Saltwater)": [
    "Anthias", "Blenny", "Blue Tang", "Butterflyfish", "Cardinalfish",
    "Clownfish", "Damselfish", "Firefish", "Foxface Rabbitfish", "Goby",
    "Lionfish", "Mandarin Dragonet", "Royal Gramma", "Seahorse", "Triggerfish",
    "Wrasse", "Yellow Tang", "Enter Manually"
  ],
  "Frog": [
    "African Dwarf Frog", "American Bullfrog", "Dart Frog", "Pacman Frog", "Tomato Frog",
    "White's Tree Frog", "Enter Manually"
  ],
  "Gecko": [
    "African Fat-Tailed Gecko", "Crested Gecko", "Day Gecko", "Gargoyle", "Leopard Gecko",
    "Tokay Gecko", "Enter Manually"
  ],
  "Gerbil": ["Fat-Tailed", "Mongolian", "Enter Manually"],
  "Goat": [
    "Alpine", "Angora", "Boer", "Goat", "Kinder",
    "LaMancha", "Miniature", "Mix", "Nigerian Dwarf", "Nubian",
    "Oberhasli", "Pygmy", "Saanen", "Toggenburg", "Enter Manually"
  ],
  "Goose": [
    "African", "Chinese", "Embden", "Toulouse", "Enter Manually"
  ],
  "Groundhog": ["Enter Manually"],
  "Guinea Pig": [
    "Abyssinian", "Alpaca", "American", "Baldwin", "Coronet",
    "Crested", "English Crested", "Lunkarya", "Merino", "Peruvian",
    "Ridgeback", "Sheba Mini Yak", "Silkie", "Skinny", "Skinny Pig",
    "Teddy", "Texel", "White Crested", "Enter Manually"
  ],
  "Hamster": [
    "Chinese", "Dwarf Campbell Russian", "Roborovski Dwarf", "Syrian", "Winter White Dwarf",
    "Enter Manually"
  ],
  "Hedgehog": ["African Pygmy", "Algerian", "Long-Eared", "Enter Manually"],
  "Hermit Crab": ["Ecuadorian", "Purple Pincher", "Enter Manually"],
  "Horse": [
    "Akhal-Teke", "American Saddlebred", "American Walking Pony", "Andalusian", "Anglo-Arab",
    "Appaloosa", "Arabian", "Bashkir Curly", "Belgian", "Chincoteague",
    "Cleveland Bay", "Clydesdale", "Connemara", "Curly Horse", "Dale Pony",
    "Donkey/Mule", "Draft", "Fell Pony", "Friesian", "Gaited",
    "Gelderlander", "Gotland", "Grade", "Gypsy Vanner", "Hackney",
    "Haflinger", "Hanoverian", "Holsteiner", "Horse", "Icelandic",
    "Lipizzano", "Lusitano", "Miniature", "Miniature Horse", "Missouri Foxtrotter",
    "Morgan", "Mustang", "New Forest Pony", "Norwegian Fjord", "Oldenburg",
    "Paint", "Paint/Pinto", "Palomino", "Paso Fino", "Percheron",
    "Peruvian Paso", "Pinto", "Pony", "Pony of Americas", "Quarter Pony",
    "Quarterhorse", "Rocky Mountain", "Saddlebred", "Selle Francais", "Shetland",
    "Shetland Pony", "Shire", "Standardbred", "Suffolk", "Tennessee Walker",
    "Tennessee Walking Horse", "Thoroughbred", "Warmblood", "Welsh Pony", "Enter Manually"
  ],
  "Iguana": ["Green Iguana", "Rhino Iguana", "Enter Manually"],
  "Isopod": ["Dairy Cow", "Powder Blue", "Zebra", "Enter Manually"],
  "Jumping Spider": ["Regal Jumping Spider", "Enter Manually"],
  "Lizard": [
    "Bearded Dragon", "Blue-Tongued Skink", "Monitor", "Tegu", "Enter Manually"
  ],
  "Llama": ["Ccara", "Curaca", "Enter Manually"],
  "Millipede": [
    "Giant African", "Ivory", "Scarlet", "Smoky Oak", "Enter Manually"
  ],
  "Monitor": ["Ackie Monitor", "Savannah Monitor", "Enter Manually"],
  "Mouse": ["Fancy Mouse", "Enter Manually"],
  "Other": ["Enter Manually"],
  "Otter": ["Enter Manually"],
  "Pig": [
    "American Mini Pig", "Berkshire", "Chester White", "Duroc", "Feral",
    "Hampshire", "Hereford", "Juliana Pig", "Kunekune", "Landrace",
    "Mini Pig", "Pietrain", "Pig", "Pig (Farm)", "Poland China",
    "Pot Bellied", "Vietnamese Pot Bellied", "Wild Boar", "Yorkshire", "Enter Manually"
  ],
  "Prairie Dog": ["Black-tailed", "Enter Manually"],
  "Rabbit": [
    "American", "American Chinchilla", "American Fuzzy Lop", "American Sable", "Angora Rabbit",
    "Belgian Hare", "Beveren", "Britannia Petite", "Bunny Rabbit", "Californian",
    "Champagne D'Argent", "Checkered Giant", "Chinchilla", "Cinnamon", "Creme D'Argent",
    "Dutch", "Dwarf", "Dwarf Eared", "Dwarf Hotot", "English Angora",
    "English Lop", "English Spot", "Flemish Giant", "Florida White", "French Angora",
    "French-Lop", "Giant Angora", "Giant Chinchilla", "Harlequin", "Havana",
    "Himalayan", "Holland Lop", "Hotot", "Jersey Wooly", "Lilac",
    "Lionhead", "Longhaired Rabbit", "Lop Eared", "Mini Lop", "Mini Rex",
    "Mini Satin", "Netherland Dwarf", "New Zealand", "Palomino", "Polish",
    "Rex", "Rhinelander", "Satin", "Satin Angora", "Shorthaired Rabbit",
    "Silver", "Silver Fox", "Silver Marten", "Tan", "Thrianta",
    "Wild", "Enter Manually"
  ],
  "Rat (Fancy)": [
    "Dumbo", "Hairless", "Hooded", "Rex", "Satin",
    "Standard", "Enter Manually"
  ],
  "Scorpion": [
    "Asian Forest", "Desert Hairy", "Emperor", "Tanzanian Red-clawed", "Enter Manually"
  ],
  "Sheep": [
    "Dorper", "Dorset", "Hampshire", "Jacob", "Katahdin",
    "Merino", "Shetland", "Southdown", "Suffolk", "Enter Manually"
  ],
  "Skink": ["Blue-Tongued Skink", "Fire Skink", "Enter Manually"],
  "Skunk": ["Enter Manually"],
  "Snail": [
    "Apple Snail", "Assassin Snail", "Giant African Land Snail", "Mystery Snail", "Nerite",
    "Enter Manually"
  ],
  "Snake": [
    "Ball Python", "Boa", "Boa Constrictor", "Bull", "Carpet Python",
    "Corn Snake", "Corn/Rat Snake", "Garter Snake", "Hognose", "Hognose Snake",
    "King/Milk Snake", "Kingsnake", "Milk Snake", "Python", "Rat Snake",
    "Ribbon/Garter", "Rosy Boa", "Snake", "Enter Manually"
  ],
  "Sugar Glider": ["Mosaic", "Standard Grey", "White Face", "Enter Manually"],
  "Tarantula": [
    "Antilles Pink Toe", "Asian Chevron", "Bolivian Blueleg", "Brazilian Black", "Brazilian Black and White",
    "Brazilian Fiery Red", "Brazilian Pink", "Brazilian Red and White", "Cameroon Red", "Chilean Rose Hair",
    "Cobalt Blue", "Cobalt Redrump", "Colombian Brown", "Colombian Giant Redleg", "Colombian Lesserblack",
    "Colombian Pinkbloom", "Colombian Purplebloom", "Common Bluebloom", "Common Pinktoe", "Costa Rican Redleg",
    "Costa Rican Tigerrump", "Costa Rican Zebra (Stripeknee)", "Curly Hair", "Desert Blond", "Ecuadorian Brownvelvet",
    "Ecuadorian Purple", "Ecuadorian Red Bloom", "Featherleg Baboon", "Fringed Ornamental", "Goliath Baboon",
    "Goliath Birdeater", "Goliath Pinkfoot", "Goliath Stripeleg", "Greenbottle Blue", "Haitian Brown",
    "Indian Ornamental", "Ivory Ornamental", "King Baboon", "Malaysian Earthtiger", "Mexican Bloodleg",
    "Mexican Fireleg", "Mexican Flameknee", "Mexican Pink", "Mexican Redknee", "Mexican Redleg",
    "Mexican Redrump", "Mombasa Golden Starburst", "Peruvian Pink Toe", "Pink Zebra Beauty", "Redslate Ornamental",
    "Rio Grande Gold", "Salem Ornamental", "Salmon Pink Birdeater", "Santarem Pink-haired", "Skeleton Tarantula",
    "Sri Lankan Ornamental", "Straighthorned Baboon", "Tarantula", "Thailand Black", "Togo Starburst",
    "Trinidad Chevron", "Venezuelan Sun Tiger", "Whitetoe Tarantula", "Zimbabwe Grey Baboon", "Enter Manually"
  ],
  "Tortoise": [
    "Box Turtle", "Desert", "Greek Tortoise", "Hermann's Tortoise", "Leopard Tortoise",
    "Red-Eared Slider", "Red-footed Tortoise", "Russian Tortoise", "Sulcata (African Spur Thigh)", "Texas Tortoise",
    "Tortoise", "Turtle", "Yellow-Footed Tortoise", "Enter Manually"
  ],
  "Turkey": ["Bourbon Red", "Broad Breasted White", "Enter Manually"],
  "Turtle": [
    "Box Turtle", "Diamondback Terrapin", "Map Turtle", "Musk Turtle", "Painted Turtle",
    "Red-Eared Slider", "Enter Manually"
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { allSpecies, breedsBySpecies };
}
if (typeof window !== "undefined") {
  window.petSpeciesData = { allSpecies, breedsBySpecies };
}
