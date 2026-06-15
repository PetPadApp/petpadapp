/**
 * Single source of truth for PetPad species and breeds.
 * Used by iOS app (via Cloud Function or local sync) and website adoption filters.
 */

const allSpecies = [
  "Alpaca",
  "Anole",
  "Axolotl",
  "Bearded Dragon",
  "Bird",
  "Caiman Lizard",
  "Cat",
  "Chameleon",
  "Chicken",
  "Chinchilla",
  "Cow",
  "Degu",
  "Dog",
  "Donkey",
  "Duck",
  "Ferret",
  "Fish (Freshwater)",
  "Fish (Saltwater)",
  "Frog",
  "Gecko",
  "Gerbil",
  "Goat",
  "Goose",
  "Groundhog",
  "Guinea Pig",
  "Hamster",
  "Hedgehog",
  "Hermit Crab",
  "Horse",
  "Iguana",
  "Isopod",
  "Jumping Spider",
  "Lizard",
  "Llama",
  "Millipede",
  "Monitor",
  "Mouse",
  "Otter",
  "Pig",
  "Prairie Dog",
  "Rabbit",
  "Rat (Fancy)",
  "Scorpion",
  "Sheep",
  "Skink",
  "Skunk",
  "Snail",
  "Snake",
  "Sugar Glider",
  "Tarantula",
  "Tortoise",
  "Turkey",
  "Turtle",
  "Other"
];

const breedsBySpecies = {
  "Dog": [
    "Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akbash", "Akita",
    "Alaskan Klee Kai", "Alaskan Malamute", "American Bulldog", "American Eskimo Dog",
    "American Foxhound", "American Hairless Terrier", "American Pit Bull Terrier",
    "American Staffordshire Terrier", "American Water Spaniel", "Anatolian Karabash Dog",
    "Anatolian Shepherd", "Appenzell Mountain Dog", "Argentinian Mastiff", "Australian Cattle Dog/Blue Heeler",
    "Australian Kelpie", "Australian Shepherd", "Australian Terrier", "Basenji", "Basset Griffon Vendeen",
    "Basset Hound", "Beagle", "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Griffon",
    "Belgian Shepherd Dog Sheepdog", "Belgian Shepherd Laekenois", "Belgian Shepherd Malinois",
    "Belgian Shepherd Tervuren", "Bernese Mountain Dog", "Bichon Frise", "Biewer", "Black and Tan Coonhound",
    "Black Labrador Retriever", "Black Mouth Cur", "Black Russian Terrier", "Bloodhound", "Blue Lacy",
    "Bluetick Coonhound", "Bobtail", "Boerboel Mastiff", "Bolognese", "Bordeaux", "Border Collie",
    "Border Terrier", "Borzoi", "Boston Terrier", "Bouvier des Flandres", "Boxer", "Boykin Spaniel",
    "Brazilian Mastiff", "Briard", "Brittany", "Brussels Griffon", "Bull Terrier", "Bulldog", "Bullmastiff",
    "Cairn Terrier", "Canaan Dog", "Cane Corso Mastiff", "Cardigan Welsh Corgi", "Carolina Dog",
    "Catahoula Leopard Dog", "Cattle Dog", "Caucasian Sheepdog (Caucasian Ovtcharka)", "Cavalier King Charles Spaniel",
    "Cavapoo", "Chesapeake Bay Retriever", "Chiweenie", "Chihuahua", "Chinese Crested-Hairless", "Chinese Crested-Powder Puff",
    "Chinese Foo Dog", "Chinese Shar-Pei", "Chinook", "Chocolate Labrador Retriever", "Chow Chow",
    "Cirneco dellEtna", "Clumber Spaniel", "Cockapoo", "Cocker Spaniel", "Collie", "Coonhound", "Corgi",
    "Coton de Tulear", "Curly-Coated Retriever", "Dachshund", "Dalmatian", "Dandie Dinmont Terrier",
    "Danish Broholmer", "Deerhound", "Doberman Pinscher", "Dogo Argentino", "Dogue de Bordeaux",
    "Dutch Shepherd", "Elkhound", "English Bulldog", "English Cocker Spaniel", "English Coonhound",
    "English Foxhound", "English Mastiff", "English Pointer", "English Setter", "English Sheepdog",
    "English Shepherd", "English Springer Spaniel", "English Toy Spaniel", "Entlebucher", "Eskimo Dog",
    "Eskimo Spitz", "Eurasier", "Feist", "Field Spaniel", "Fila Brasileiro", "Finnish Lapphund",
    "Finnish Spitz", "Flat-coated Retriever", "Fox Terrier", "Foxhound", "French Brittany",
    "French Bulldog", "French Mastiff", "Galgo Spanish Greyhound", "German Pinscher", "German Shepherd Dog",
    "German Shorthaired Pointer", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer",
    "Glen of Imaal Terrier", "Goldendoodle", "Golden Retriever", "Gordon Setter", "Great Dane", "Great Pyrenees",
    "Greater Swiss Mountain Dog", "Greyhound", "Halden Hound (Haldenstrover)", "Harrier", "Havanese",
    "Hollandse Tulphond", "Hound", "Hovawart", "Husky", "Ibizan Hound", "Illyrian Sheepdog",
    "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Italian Greyhound",
    "Italian Mastiff", "Italian Spinone", "Jack Russell Terrier", "Jack Russell Terrier (Parson Russell Terrier)",
    "Japanese Chin", "Jindo (Korean)", "Kai Dog", "Karelian Bear Dog", "Keeshond", "Kerry Blue Terrier",
    "Kishu", "Klee Kai", "Komondor", "Kuvasz", "Kyi Leo", "Labradoodle", "Labrador Retriever", "Lakeland Terrier",
    "Lancashire Heeler", "Leonberger", "Lhasa Apso", "Löwchen", "Maltese", "Maltipoo", "Manchester Terrier",
    "Maremma Sheepdog", "Markiesje", "Mastiff", "McNab", "Mexican Hairless", "Miniature Bull Terrier",
    "Miniature Pinscher", "Miniature Schnauzer", "Mountain Cur", "Mountain Dog", "Munsterlander",
    "Neapolitan Mastiff", "New Guinea Singing Dog", "Newfoundland Dog", "Norfolk Terrier",
    "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier",
    "Nova Scotia Duck-Tolling Retriever", "Old English Sheepdog", "Otterhound", "Papillon",
    "Parson Russell Terrier", "Patterdale Terrier (Fell Terrier)", "Pekingese", "Pembroke Welsh Corgi",
    "Peruvian Inca Orchid", "Petit Basset Griffon Vendeen", "Pharaoh Hound", "Picardy Shepherd",
    "Pit Bull Terrier", "Plott Hound", "Podengo Portugueso", "Pointer", "Polish Lowland Sheepdog",
    "Pomeranian", "Pomsky", "Poodle (Miniature)", "Poodle (Standard)", "Poodle (T-Cup)", "Poodle (Toy)",
    "Poodle (unknown type)", "Portuguese Water Dog", "Presa Canario", "Pug", "Puggle", "Puli", "Pumi",
    "Queensland Heeler", "Rat Terrier", "Red Heeler", "Redbone Coonhound", "Retriever",
    "Rhodesian Ridgeback", "Rottweiler", "Russian Wolfhound", "Saarlooswolfhond", "Saint Bernard",
    "Saluki", "Saluki Greyhound", "Samoyed", "Schiller Hound", "Schipperke", "Schnauzer",
    "Scottish Deerhound", "Scottish Terrier Scottie", "Sealyham Terrier", "Setter", "Shar Pei",
    "Sheep Dog", "Shepherd", "Shetland Sheepdog Sheltie", "Shiba Inu", "Shih Tzu", "Siberian Husky",
    "Silky Terrier", "Skye Terrier", "Sloughi", "Smooth Collie", "Smooth Fox Terrier",
    "Soft-Coated Wheaten Terrier", "South Russian Ovcharka", "Spaniel", "Spanish Mastiff",
    "Spinone Italiano", "Spitz", "Springer Spaniel", "Staffordshire Bull Terrier", "Sussex Spaniel",
    "Swedish Vallhund", "Tamaskan", "Terrier", "Thai Ridgeback", "Tibetan Mastiff", "Tibetan Spaniel",
    "Tibetan Terrier", "Tosa Inu", "Toy Fox Terrier", "Toy Terrier", "Treeing Walker Coonhound",
    "Vizsla", "Weimaraner", "Welsh Corgi", "Welsh Springer Spaniel", "Welsh Terrier",
    "West Highland White Terrier Westie", "Wheaten Terrier", "Whippet", "White German Shepherd",
    "White Swiss Shepherd Dog (Swiss Berger)", "Wire-haired Pointing Griffon", "Wirehaired Fox Terrier",
    "Wolf Dog", "Xoloitzcuintle/Mexican Hairless", "Yellow Labrador Retriever", "Yorkshire Terrier Yorkie",
    "Enter Manually"
  ],
  "Cat": [
    "Abyssinian", "American Curl", "American Shorthair", "American Wirehair", "Angora",
    "Applehead Siamese", "Balinese", "Bengal", "Birman", "Bobtail", "Bombay", "Brazilian Shorthair",
    "British Shorthair", "Burmese", "Burmilla", "Calico", "Canadian Hairless", "Chanilly/Tiffany",
    "Chartreux", "Chausie", "Chinchilla", "Colorpoint Shorthair", "Cornish Rex", "Cymric", "Devon Rex",
    "Dilute Calico", "Dilute Tortoiseshell", "Domestic Long Hair", "Domestic Medium Hair",
    "Domestic Short Hair", "Egyptian Mau", "European Burmese", "European Shorthair", "Exotic Shorthair",
    "Extra-Toes Cat (Hemingway Polydactyl)", "German Rex", "Havana", "Himalayan", "Japanese Bobtail",
    "Javanese", "Korat", "LaPerm", "Maine Coon", "Malayan", "Manx", "Munchkin", "Nebelung",
    "Norwegian Forest Cat", "Ocicat", "Oriental Long Hair", "Oriental Short Hair", "Oriental Tabby",
    "Persian", "Pixie-Bob", "Ragamuffin", "Ragdoll", "Rex", "Russian Blue", "Savannah", "Scottish Fold",
    "Scottish Straight", "Selkirk Rex", "Siamese", "Siberian", "Singapura", "Snowshoe", "Somali",
    "Sphynx (hairless cat)", "Tabby", "Tiffany", "Tiger", "Tonkinese", "Torbie", "Tortoiseshell",
    "Turkish Angora", "Turkish Van", "Tuxedo",
    "Enter Manually"
  ],
  "Bird": [
    "African Grey", "Amazon", "Black", "Brotogeris", "Budgie/Budgerigar", "Button Quail", "Caique",
    "Canary", "Chicken", "Cockatiel", "Cockatoo", "Conure", "Double-breasted", "Dove", "Duck",
    "Eclectus", "Emu", "European Starling", "Fancy", "Finch", "Goose", "Grouse", "Guinea Fowl",
    "Kakariki", "Lory/Lorikeet", "Lovebird", "Macaw", "Mourning", "Mynah", "Ostrich",
    "Parakeet - Other", "Parrot Other", "Parrotlet", "Peacock/Pea fowl", "Pheasant", "Pigeon",
    "Pionus", "Poicephalus", "Quail", "Quaker Parakeet", "Rhea", "Ringneck/Psittacula", "Rock",
    "Rose-breasted", "Rosella", "Senegal", "Softbill (Other)", "Swan", "Toucan", "Turkey",
    "Enter Manually"
  ],
  "Fish (Freshwater)": [
    "Betta", "Goldfish", "Angelfish", "Guppy", "Molly", "Platy", "Neon Tetra", "Corydoras", "Cichlid", "Plecostomus",
    "Enter Manually"
  ],
  "Fish (Saltwater)": [
    "Clownfish", "Damselfish", "Blue Tang", "Yellow Tang", "Blenny", "Goby", "Wrasse", "Butterflyfish",
    "Enter Manually"
  ],
  "Hamster": [
    "Syrian", "Dwarf Campbell Russian", "Winter White Dwarf", "Roborovski Dwarf", "Chinese",
    "Enter Manually"
  ],
  "Rat (Fancy)": [
    "Standard", "Dumbo", "Rex", "Hairless", "Satin", "Hooded",
    "Enter Manually"
  ],
  "Guinea Pig": [
    "American", "Abyssinian", "Peruvian", "Silkie", "Teddy", "Skinny",
    "Enter Manually"
  ],
  "Frog": [
    "African Dwarf Frog", "Pacman Frog", "White's Tree Frog", "American Bullfrog",
    "Enter Manually"
  ],
  "Gecko": [
    "Leopard Gecko", "Crested Gecko", "African Fat-Tailed Gecko", "Day Gecko", "Gargoyle",
    "Enter Manually"
  ],
  "Rabbit": [
    "American", "American Chinchilla", "American Fuzzy Lop", "American Sable", "Angora Rabbit",
    "Belgian Hare", "Beveren", "Britannia Petite", "Bunny Rabbit", "Californian",
    "Champagne D'Argent", "Checkered Giant", "Chinchilla", "Cinnamon", "Creme D'Argent", "Dutch",
    "Dwarf", "Dwarf Eared", "Dwarf Hotot", "English Angora", "English Lop", "English Spot",
    "Flemish Giant", "Florida White", "French-Lop", "Giant Angora", "Giant Chinchilla",
    "Harlequin", "Havana", "Himalayan", "Holland Lop", "Hotot", "Jersey Wooly", "Lilac",
    "Lionhead", "Longhaired Rabbit", "Lop Eared", "Mini Lop", "Mini Rex", "Mini Satin",
    "Netherland Dwarf", "New Zealand", "Palomino", "Polish", "Rex", "Rhinelander", "Satin",
    "Satin Angora", "Shorthaired Rabbit", "Silver", "Silver Fox", "Silver Marten", "Tan",
    "Thrianta", "Wild",
    "Enter Manually"
  ],
  "Horse": [
    "Akhal-Teke", "American Saddlebred", "Andalusian", "Anglo-Arab", "Appaloosa", "Arabian",
    "Bashkir Curly", "Belgian", "Cleveland Bay", "Clydesdale", "Curly Horse", "Donkey/Mule",
    "Draft", "Friesian", "Gaited", "Gelderlander", "Grade", "Gypsy Vanner", "Hanoverian",
    "Holsteiner", "Horse", "Icelandic", "Lipizzano", "Lusitano", "Miniature Horse",
    "Missouri Foxtrotter", "Morgan", "Mustang", "Norwegian Fjord", "Oldenburg", "Paint/Pinto",
    "Palomino", "Paso Fino", "Percheron", "Peruvian Paso", "Pony", "Quarterhorse",
    "Rocky Mountain", "Saddlebred", "Selle Francais", "Shetland Pony", "Shire", "Standardbred",
    "Suffolk", "Tennessee Walker", "Thoroughbred", "Warmblood",
    "American Walking Pony", "Appaloosa", "Chincoteague", "Connemara", "Dale Pony", "Fell Pony",
    "Gotland", "Hackney", "Haflinger", "Miniature", "New Forest Pony", "Paint", "Pinto", "Pony",
    "Pony of Americas", "Quarter Pony", "Shetland", "Tennessee Walking Horse", "Welsh Pony",
    "Enter Manually"
  ],
  "Chicken": [
    "Araucana", "Australorp", "Bantam", "Barred Rock", "Cochin", "Cornish", "Dominique",
    "Gamefowl", "Jersey", "Leghorn", "New Hampshire", "Orpington", "Polish", "Rhode Island Red",
    "Sebright", "Silkie", "Wyandotte",
    "Enter Manually"
  ],
  "Duck": [
    "Call Duck", "Cayuga", "Indian Runner", "Khaki Campbell", "Mallard", "Muscovy", "Pekin",
    "Rouen", "Swedish Blue", "Welsh Harlequin",
    "American Saxony", "Anconas", "Australian Spotteds", "Aylesbury", "Black East Indies",
    "Buff", "Campbells", "Coast", "Crested", "Duck", "Duclair",
    "Hook Bulls (Kromsnaveleend)", "Magpie", "Odd", "Orpington", "Rouen Clair", "Runner",
    "Saxony", "Silky", "Silver Appleyards", "Swedish Yellow", "Wood",
    "Enter Manually"
  ],
  "Goat": [
    "Alpine", "Angora", "Boer", "Goat", "Kinder", "LaMancha", "Miniature", "Mix",
    "Nigerian Dwarf", "Nubian", "Oberhasli", "Pygmy", "Saanen", "Toggenburg",
    "Enter Manually"
  ],
  "Donkey": [
    "Abyssinian", "Anatolia", "Donkey", "Donkey/Mule", "Large Standard", "Mammoth", "Mary",
    "Mini", "Poitou", "Standard",
    "Enter Manually"
  ],
  "Cow": [
    "Angus", "Ayrshire", "Beefmaster", "Brahma", "Brangus", "Brown Swiss", "Charolais", "Cow",
    "Guernsey", "Hereford", "Holstein", "Jersey", "Limousin", "Longhorn", "Milking Shorthorn",
    "Murray Gray", "Pinzgauer", "Salers", "Santa Gertrudis", "Shorthorn", "Simmental",
    "Enter Manually"
  ],
  "Snake": [
    "Ball Python", "Boa Constrictor", "Corn Snake", "Rat Snake", "Hognose Snake",
    "Kingsnake", "Milk Snake", "Garter Snake", "Boa", "Bull", "Corn/Rat Snake", "Hognose",
    "King/Milk Snake", "Python", "Ribbon/Garter", "Snake",
    "Enter Manually"
  ],
  "Tortoise": [
    "Desert", "Greek Tortoise", "Leopard Tortoise", "Red-footed Tortoise", "Russian Tortoise",
    "Sulcata (African Spur Thigh)", "Texas Tortoise", "Tortoise",
    "Box Turtle", "Red-Eared Slider", "Turtle",
    "Enter Manually"
  ],
  "Turtle": [
    "Box Turtle", "Red-Eared Slider", "Painted Turtle", "Map Turtle",
    "Enter Manually"
  ],
  "Tarantula": [
    "Antilles Pink Toe", "Asian Chevron", "Bolivian Blueleg", "Brazilian Black",
    "Brazilian Black and White", "Brazilian Fiery Red", "Brazilian Pink", "Brazilian Red and White",
    "Cameroon Red", "Chilean Rose Hair", "Cobalt Blue", "Cobalt Redrump", "Colombian Brown",
    "Colombian Giant Redleg", "Colombian Lesserblack", "Colombian Pinkbloom", "Colombian Purplebloom",
    "Common Bluebloom", "Common Pinktoe", "Costa Rican Redleg", "Costa Rican Tigerrump",
    "Costa Rican Zebra (Stripeknee)", "Curly Hair", "Desert Blond", "Ecuadorian Brownvelvet",
    "Ecuadorian Purple", "Ecuadorian Red Bloom", "Featherleg Baboon", "Fringed Ornamental",
    "Goliath Baboon", "Goliath Birdeater", "Goliath Pinkfoot", "Goliath Stripeleg",
    "Greenbottle Blue", "Haitian Brown", "Indian Ornamental", "Ivory Ornamental", "King Baboon",
    "Malaysian Earthtiger", "Mexican Bloodleg", "Mexican Fireleg", "Mexican Flameknee",
    "Mexican Pink", "Mexican Redknee", "Mexican Redleg", "Mexican Redrump", "Mombasa Golden Starburst",
    "Peruvian Pink Toe", "Pink Zebra Beauty", "Redslate Ornamental", "Rio Grande Gold",
    "Salem Ornamental", "Salmon Pink Birdeater", "Santarem Pink-haired", "Skeleton Tarantula",
    "Sri Lankan Ornamental", "Straighthorned Baboon", "Tarantula", "Thailand Black", "Togo Starburst",
    "Trinidad Chevron", "Venezuelan Sun Tiger", "Whitetoe Tarantula", "Zimbabwe Grey Baboon",
    "Enter Manually"
  ],
  "Pig": [
    "Berkshire", "Chester White", "Duroc", "Feral", "Hampshire", "Hereford", "Landrace",
    "Pietrain", "Pig", "Pig (Farm)", "Poland China", "Pot Bellied", "Vietnamese Pot Bellied",
    "Wild Boar", "Yorkshire",
    "Enter Manually"
  ],
  "Sheep": [
    "Dorper", "Merino", "Suffolk", "Hampshire", "Jacob", "Katahdin",
    "Enter Manually"
  ],
  "Alpaca": ["Huacaya", "Suri", "Enter Manually"],
  "Llama": ["Ccara", "Curaca", "Enter Manually"],
  "Chinchilla": ["Standard Grey", "Mosaic", "Black Velvet", "Beige", "Enter Manually"],
  "Degu": ["Enter Manually"],
  "Ferret": ["Sable", "Albino", "Dark-eyed White", "Silver", "Enter Manually"],
  "Gerbil": ["Mongolian", "Enter Manually"],
  "Goose": ["Embden", "Toulouse", "Chinese", "African", "Enter Manually"],
  "Groundhog": ["Enter Manually"],
  "Hedgehog": ["African Pygmy", "Enter Manually"],
  "Hermit Crab": ["Purple Pincher", "Ecuadorian", "Enter Manually"],
  "Iguana": ["Green Iguana", "Rhino Iguana", "Enter Manually"],
  "Lizard": ["Bearded Dragon", "Blue-Tongued Skink", "Monitor", "Tegu", "Enter Manually"],
  "Mouse": ["Fancy Mouse", "Enter Manually"],
  "Otter": ["Enter Manually"],
  "Prairie Dog": ["Black-tailed", "Enter Manually"],
  "Skunk": ["Enter Manually"],
  "Sugar Glider": ["Standard Grey", "White Face", "Mosaic", "Enter Manually"],
  "Turkey": ["Broad Breasted White", "Bourbon Red", "Enter Manually"],
  "Anole": ["Green Anole", "Bahaman (Brown) Anole", "Enter Manually"],
  "Axolotl": [
    "Leucistic", "Wild Type", "Golden Albino", "Melanoid", "Copper", "Piebald",
    "Enter Manually"
  ],
  "Bearded Dragon": ["Central (Inland)", "Rankin's", "Enter Manually"],
  "Caiman Lizard": ["Northern", "Guianan", "Enter Manually"],
  "Chameleon": ["Veiled", "Jackson's", "Panther", "Enter Manually"],
  "Isopod": ["Dairy Cow", "Powder Blue", "Zebra", "Enter Manually"],
  "Jumping Spider": ["Regal Jumping Spider", "Enter Manually"],
  "Millipede": ["Giant African", "Ivory", "Smoky Oak", "Scarlet", "Enter Manually"],
  "Monitor": ["Savannah Monitor", "Ackie Monitor", "Enter Manually"],
  "Scorpion": ["Emperor", "Asian Forest", "Desert Hairy", "Tanzanian Red-clawed", "Enter Manually"],
  "Skink": ["Blue-Tongued Skink", "Fire Skink", "Enter Manually"],
  "Snail": [
    "Mystery Snail", "Nerite", "Apple Snail", "Assassin Snail", "Giant African Land Snail",
    "Enter Manually"
  ],
  "Other": ["Enter Manually"]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { allSpecies, breedsBySpecies };
}
if (typeof window !== "undefined") {
  window.petSpeciesData = { allSpecies, breedsBySpecies };
}
