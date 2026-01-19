import React, { useState, useMemo, useEffect } from 'react';

// ============================================================================
// COMPLETE 2025-26 DEVIN BOOKER CARD CHECKLIST
// Sources: ChecklistInsider, Beckett, Topps Official
// ============================================================================

const BOOKER_CARDS = {
  flagship: {
    name: "Topps Flagship",
    icon: "🏀",
    cards: [
      // ========== BASE CARD #156 ==========
      { id: "F-156", name: "Base Card #156", parallel: "Base", numbered: null, rarity: "Common" },
      // Rainbow Parallels (Hobby/Jumbo)
      { id: "F-156-RAINBOW", name: "#156 Rainbow Foilboard", parallel: "Rainbow Foilboard", numbered: null, rarity: "Uncommon" },
      { id: "F-156-GOLD", name: "#156 Gold /2025", parallel: "Gold", numbered: 2025, rarity: "Uncommon" },
      { id: "F-156-PURPLE-R", name: "#156 Purple Rainbow /250", parallel: "Purple Rainbow", numbered: 250, rarity: "Rare" },
      { id: "F-156-BLUE-R", name: "#156 Blue Rainbow /150", parallel: "Blue Rainbow", numbered: 150, rarity: "Rare" },
      { id: "F-156-GREEN-R", name: "#156 Green Rainbow /99", parallel: "Green Rainbow", numbered: 99, rarity: "Super Rare" },
      { id: "F-156-BLACK", name: "#156 Black /68", parallel: "Black", numbered: 68, rarity: "Super Rare" },
      { id: "F-156-GOLD-R", name: "#156 Gold Rainbow /50", parallel: "Gold Rainbow", numbered: 50, rarity: "Super Rare" },
      { id: "F-156-ORANGE-R", name: "#156 Orange Rainbow /25", parallel: "Orange Rainbow", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-156-WOOD", name: "#156 Wood /25", parallel: "Wood", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-156-BLACK-R", name: "#156 Black Rainbow /10", parallel: "Black Rainbow", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-156-RED-R", name: "#156 Red Rainbow /5", parallel: "Red Rainbow", numbered: 5, rarity: "Legendary" },
      { id: "F-156-FOILFRACTOR", name: "#156 Foilfractor 1/1", parallel: "Foilfractor", numbered: 1, rarity: "Legendary" },
      { id: "F-156-FIRST", name: "#156 First Card 1/1", parallel: "First Card", numbered: 1, rarity: "Legendary" },
      // Victory (Hobby Exclusive)
      { id: "F-156-VICTORY", name: "#156 Victory SSP", parallel: "Victory", numbered: null, rarity: "Super Rare" },
      // Sandglitter (Jumbo Exclusive)
      { id: "F-156-SANDGLITTER", name: "#156 Sandglitter", parallel: "Sandglitter", numbered: null, rarity: "Uncommon" },
      { id: "F-156-BLUE-SAND", name: "#156 Blue Sandglitter", parallel: "Blue Sandglitter", numbered: null, rarity: "Rare" },
      // Holo Foil Parallels (Retail)
      { id: "F-156-HOLO", name: "#156 Holo Foil", parallel: "Holo Foil", numbered: null, rarity: "Uncommon" },
      { id: "F-156-AQUA-HOLO", name: "#156 Aqua Holo Foil SP", parallel: "Aqua Holo Foil", numbered: null, rarity: "Rare" },
      { id: "F-156-PINK-HOLO", name: "#156 Pink Holo Foil SP", parallel: "Pink Holo Foil", numbered: null, rarity: "Rare" },
      { id: "F-156-PURPLE-HOLO", name: "#156 Purple Holo Foil /250", parallel: "Purple Holo Foil", numbered: 250, rarity: "Rare" },
      { id: "F-156-BLUE-HOLO", name: "#156 Blue Holo Foil /150", parallel: "Blue Holo Foil", numbered: 150, rarity: "Rare" },
      { id: "F-156-GREEN-HOLO", name: "#156 Green Holo Foil /99", parallel: "Green Holo Foil", numbered: 99, rarity: "Super Rare" },
      { id: "F-156-GOLD-HOLO", name: "#156 Gold Holo Foil /50", parallel: "Gold Holo Foil", numbered: 50, rarity: "Super Rare" },
      { id: "F-156-ORANGE-HOLO", name: "#156 Orange Holo Foil /25", parallel: "Orange Holo Foil", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-156-BLACK-HOLO", name: "#156 Black Holo Foil /10", parallel: "Black Holo Foil", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-156-RED-HOLO", name: "#156 Red Holo Foil /5", parallel: "Red Holo Foil", numbered: 5, rarity: "Legendary" },
      { id: "F-156-PLAT-HOLO", name: "#156 Platinum Holo Foil 1/1", parallel: "Platinum Holo Foil", numbered: 1, rarity: "Legendary" },
      // Hanger Exclusives - Diamante
      { id: "F-156-DIAMANTE", name: "#156 Diamante", parallel: "Diamante", numbered: null, rarity: "Uncommon" },
      { id: "F-156-PINK-DIAMANTE", name: "#156 Pink Diamante SP", parallel: "Pink Diamante", numbered: null, rarity: "Rare" },
      { id: "F-156-GOLD-DIAMANTE", name: "#156 Gold Diamante /50", parallel: "Gold Diamante", numbered: 50, rarity: "Super Rare" },
      { id: "F-156-ORANGE-DIAMANTE", name: "#156 Orange Diamante /25", parallel: "Orange Diamante", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-156-BLACK-DIAMANTE", name: "#156 Black Diamante /10", parallel: "Black Diamante", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-156-RED-DIAMANTE", name: "#156 Red Diamante /5", parallel: "Red Diamante", numbered: 5, rarity: "Legendary" },
      // Value Blaster Exclusives - Season Tip-Off
      { id: "F-156-TIPOFF", name: "#156 Season Tip-Off", parallel: "Season Tip-Off", numbered: null, rarity: "Uncommon" },
      { id: "F-156-TIPOFF-GREEN", name: "#156 Season Tip-Off Green /99", parallel: "Season Tip-Off Green", numbered: 99, rarity: "Super Rare" },
      { id: "F-156-TIPOFF-GOLD", name: "#156 Season Tip-Off Gold /50", parallel: "Season Tip-Off Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-156-TIPOFF-ORANGE", name: "#156 Season Tip-Off Orange /25", parallel: "Season Tip-Off Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-156-TIPOFF-RED", name: "#156 Season Tip-Off Red /5", parallel: "Season Tip-Off Red", numbered: 5, rarity: "Legendary" },
      { id: "F-156-TIPOFF-BLACK", name: "#156 Season Tip-Off Black 1/1", parallel: "Season Tip-Off Black", numbered: 1, rarity: "Legendary" },
      // Super Box Exclusives - Crackleboard
      { id: "F-156-CRACKLE", name: "#156 Crackleboard", parallel: "Crackleboard", numbered: null, rarity: "Uncommon" },
      { id: "F-156-CRACKLE-GREEN", name: "#156 Green Crackleboard /99", parallel: "Green Crackleboard", numbered: 99, rarity: "Super Rare" },
      { id: "F-156-CRACKLE-GOLD", name: "#156 Gold Crackleboard /50", parallel: "Gold Crackleboard", numbered: 50, rarity: "Super Rare" },
      { id: "F-156-CRACKLE-ORANGE", name: "#156 Orange Crackleboard /25", parallel: "Orange Crackleboard", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-156-CRACKLE-BLACK", name: "#156 Black Crackleboard /10", parallel: "Black Crackleboard", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-156-CRACKLE-RED", name: "#156 Red Crackleboard /5", parallel: "Red Crackleboard", numbered: 5, rarity: "Legendary" },
      { id: "F-156-CRACKLE-PLAT", name: "#156 Platinum Crackleboard 1/1", parallel: "Platinum Crackleboard", numbered: 1, rarity: "Legendary" },
      // Fanatics Exclusives
      { id: "F-156-FOIL-PATTERN", name: "#156 Topps Foil Pattern", parallel: "Topps Foil Pattern", numbered: null, rarity: "Uncommon" },
      // Variations
      { id: "F-156-GOLDEN", name: "#156 Golden Mirror Image SSP", parallel: "Golden Mirror", numbered: null, rarity: "Super Rare" },
      { id: "F-156-CLEAR", name: "#156 Clear Acetate /10", parallel: "Clear Acetate", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-156-TCB", name: "#156 Team Color Border SSP", parallel: "Team Color Border", numbered: null, rarity: "Super Rare" },
      { id: "F-156-PLAYER-NUM", name: "#156 Player Number Variation", parallel: "Player Number", numbered: null, rarity: "Super Rare" },
      
      // ========== COMBO CARD #294 - Heat Check Suns Duo ==========
      { id: "F-294", name: "#294 Heat Check Suns Duo", parallel: "Base", numbered: null, rarity: "Common" },
      { id: "F-294-RAINBOW", name: "#294 Heat Check Rainbow Foilboard", parallel: "Rainbow Foilboard", numbered: null, rarity: "Uncommon" },
      { id: "F-294-GOLD", name: "#294 Heat Check Gold /2025", parallel: "Gold", numbered: 2025, rarity: "Uncommon" },
      { id: "F-294-PURPLE-R", name: "#294 Heat Check Purple Rainbow /250", parallel: "Purple Rainbow", numbered: 250, rarity: "Rare" },
      { id: "F-294-BLUE-R", name: "#294 Heat Check Blue Rainbow /150", parallel: "Blue Rainbow", numbered: 150, rarity: "Rare" },
      { id: "F-294-GREEN-R", name: "#294 Heat Check Green Rainbow /99", parallel: "Green Rainbow", numbered: 99, rarity: "Super Rare" },
      { id: "F-294-BLACK", name: "#294 Heat Check Black /68", parallel: "Black", numbered: 68, rarity: "Super Rare" },
      { id: "F-294-GOLD-R", name: "#294 Heat Check Gold Rainbow /50", parallel: "Gold Rainbow", numbered: 50, rarity: "Super Rare" },
      { id: "F-294-ORANGE-R", name: "#294 Heat Check Orange Rainbow /25", parallel: "Orange Rainbow", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-294-WOOD", name: "#294 Heat Check Wood /25", parallel: "Wood", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-294-BLACK-R", name: "#294 Heat Check Black Rainbow /10", parallel: "Black Rainbow", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-294-RED-R", name: "#294 Heat Check Red Rainbow /5", parallel: "Red Rainbow", numbered: 5, rarity: "Legendary" },
      { id: "F-294-FOILFRACTOR", name: "#294 Heat Check Foilfractor 1/1", parallel: "Foilfractor", numbered: 1, rarity: "Legendary" },
      { id: "F-294-HOLO", name: "#294 Heat Check Holo Foil", parallel: "Holo Foil", numbered: null, rarity: "Uncommon" },
      { id: "F-294-GOLDEN", name: "#294 Heat Check Golden Mirror SSP", parallel: "Golden Mirror", numbered: null, rarity: "Super Rare" },
      
      // ========== INSERT SETS ==========
      // Daily Dribble
      { id: "F-DD-DB", name: "Daily Dribble #DD-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-DD-DB-GREEN", name: "Daily Dribble #DD-DB Green /99", parallel: "Green", numbered: 99, rarity: "Super Rare" },
      { id: "F-DD-DB-GOLD", name: "Daily Dribble #DD-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-DD-DB-ORANGE", name: "Daily Dribble #DD-DB Orange /25", parallel: "Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-DD-DB-BLACK", name: "Daily Dribble #DD-DB Black /10", parallel: "Black", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-DD-DB-RED", name: "Daily Dribble #DD-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      { id: "F-DD-DB-FOIL", name: "Daily Dribble #DD-DB Foilfractor 1/1", parallel: "Foilfractor", numbered: 1, rarity: "Legendary" },
      // Levitation
      { id: "F-LEV-DB", name: "Levitation #L-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-LEV-DB-GREEN", name: "Levitation #L-DB Green /99", parallel: "Green", numbered: 99, rarity: "Super Rare" },
      { id: "F-LEV-DB-GOLD", name: "Levitation #L-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-LEV-DB-ORANGE", name: "Levitation #L-DB Orange /25", parallel: "Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-LEV-DB-BLACK", name: "Levitation #L-DB Black /10", parallel: "Black", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-LEV-DB-RED", name: "Levitation #L-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      { id: "F-LEV-DB-FOIL", name: "Levitation #L-DB Foilfractor 1/1", parallel: "Foilfractor", numbered: 1, rarity: "Legendary" },
      // Comic Court (Case Hit SSP)
      { id: "F-CC-DB", name: "Comic Court #CC-DB", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      { id: "F-CC-DB-HOLO", name: "Comic Court #CC-DB Holo Foil", parallel: "Holo Foil", numbered: null, rarity: "Super Rare" },
      // 8-Bit Ballers
      { id: "F-8B-DB", name: "8-Bit Ballers #8B-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-8B-DB-HOLO", name: "8-Bit Ballers #8B-DB Holo /250", parallel: "Holo", numbered: 250, rarity: "Rare" },
      { id: "F-8B-DB-BLUE-HOLO", name: "8-Bit Ballers #8B-DB Blue Holo /150", parallel: "Blue Holo", numbered: 150, rarity: "Rare" },
      { id: "F-8B-DB-GREEN-HOLO", name: "8-Bit Ballers #8B-DB Green Holo /99", parallel: "Green Holo", numbered: 99, rarity: "Super Rare" },
      { id: "F-8B-DB-GOLD", name: "8-Bit Ballers #8B-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-8B-DB-RED", name: "8-Bit Ballers #8B-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      // Scan and Slam
      { id: "F-SS-DB", name: "Scan and Slam #SS-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-SS-DB-SURGE", name: "Scan and Slam #SS-DB Surge /99", parallel: "Surge", numbered: 99, rarity: "Super Rare" },
      { id: "F-SS-DB-FLASH", name: "Scan and Slam #SS-DB Flash Drop /50", parallel: "Flash Drop", numbered: 50, rarity: "Super Rare" },
      { id: "F-SS-DB-CART", name: "Scan and Slam #SS-DB Cart Load /25", parallel: "Cart Load", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-SS-DB-CYBER", name: "Scan and Slam #SS-DB Cyber Circuit /5", parallel: "Cyber Circuit", numbered: 5, rarity: "Legendary" },
      { id: "F-SS-DB-DOOR", name: "Scan and Slam #SS-DB Doorbuster 1/1", parallel: "Doorbuster", numbered: 1, rarity: "Legendary" },
      // Limited Stock Legends
      { id: "F-LSL-DB", name: "Limited Stock Legends #LSL-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-LSL-DB-SURGE", name: "Limited Stock Legends #LSL-DB Surge /99", parallel: "Surge", numbered: 99, rarity: "Super Rare" },
      { id: "F-LSL-DB-FLASH", name: "Limited Stock Legends #LSL-DB Flash Drop /50", parallel: "Flash Drop", numbered: 50, rarity: "Super Rare" },
      { id: "F-LSL-DB-CART", name: "Limited Stock Legends #LSL-DB Cart Load /25", parallel: "Cart Load", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-LSL-DB-CYBER", name: "Limited Stock Legends #LSL-DB Cyber Circuit /5", parallel: "Cyber Circuit", numbered: 5, rarity: "Legendary" },
      { id: "F-LSL-DB-DOOR", name: "Limited Stock Legends #LSL-DB Doorbuster 1/1", parallel: "Doorbuster", numbered: 1, rarity: "Legendary" },
      // 1980-81 Topps Chrome
      { id: "F-80-DB", name: "1980-81 Chrome #80-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-80-DB-MOJO", name: "1980-81 Chrome #80-DB Mojo Refractor", parallel: "Mojo Refractor", numbered: null, rarity: "Super Rare" },
      { id: "F-80-DB-MAGENTA", name: "1980-81 Chrome #80-DB Magenta /399", parallel: "Magenta", numbered: 399, rarity: "Rare" },
      { id: "F-80-DB-TEAL", name: "1980-81 Chrome #80-DB Teal /299", parallel: "Teal", numbered: 299, rarity: "Rare" },
      { id: "F-80-DB-YELLOW", name: "1980-81 Chrome #80-DB Yellow /275", parallel: "Yellow", numbered: 275, rarity: "Rare" },
      { id: "F-80-DB-AQUA", name: "1980-81 Chrome #80-DB Aqua /199", parallel: "Aqua", numbered: 199, rarity: "Rare" },
      { id: "F-80-DB-BLUE", name: "1980-81 Chrome #80-DB Blue /150", parallel: "Blue", numbered: 150, rarity: "Rare" },
      { id: "F-80-DB-GREEN", name: "1980-81 Chrome #80-DB Green /99", parallel: "Green", numbered: 99, rarity: "Super Rare" },
      { id: "F-80-DB-PURPLE", name: "1980-81 Chrome #80-DB Purple /75", parallel: "Purple", numbered: 75, rarity: "Super Rare" },
      { id: "F-80-DB-GOLD", name: "1980-81 Chrome #80-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-80-DB-ORANGE", name: "1980-81 Chrome #80-DB Orange /25", parallel: "Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-80-DB-BLACK", name: "1980-81 Chrome #80-DB Black /10", parallel: "Black", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-80-DB-RED", name: "1980-81 Chrome #80-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      { id: "F-80-DB-SUPER", name: "1980-81 Chrome #80-DB Superfractor 1/1", parallel: "Superfractor", numbered: 1, rarity: "Legendary" },
      // All Kings (Die-Cut)
      { id: "F-AK-DB", name: "All Kings #AK-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-AK-DB-GOLD", name: "All Kings #AK-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-AK-DB-RED", name: "All Kings #AK-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      // No Limit
      { id: "F-NL-DB", name: "No Limit #NL-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-NL-DB-GOLD", name: "No Limit #NL-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-NL-DB-RED", name: "No Limit #NL-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      // Hardwood Stars
      { id: "F-HS-DB", name: "Hardwood Stars #HS-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-HS-DB-LUMBER", name: "Hardwood Stars #HS-DB Lumber SSP", parallel: "Lumber", numbered: null, rarity: "Super Rare" },
      // Stars of the NBA
      { id: "F-STAR-DB", name: "Stars of the NBA #STAR-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "F-STAR-DB-GOLD", name: "Stars of the NBA #STAR-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      
      // ========== RELICS ==========
      { id: "F-FRO-DB", name: "Flagship Real One Relic #FRO-DB", parallel: "Base", numbered: null, rarity: "Super Rare" },
      { id: "F-FRO-DB-GOLD", name: "Flagship Real One Relic #FRO-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "F-FRO-DB-ORANGE", name: "Flagship Real One Relic #FRO-DB Orange /25", parallel: "Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "F-FRO-DB-BLACK", name: "Flagship Real One Relic #FRO-DB Black /10", parallel: "Black", numbered: 10, rarity: "Ultra Rare" },
      { id: "F-FRO-DB-RED", name: "Flagship Real One Relic #FRO-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      { id: "F-FRO-DB-PLAT", name: "Flagship Real One Relic #FRO-DB Platinum 1/1", parallel: "Platinum", numbered: 1, rarity: "Legendary" },
    ]
  },
  
  blackout: {
    name: "Blackout Black Friday (Target)",
    icon: "🎯",
    cards: [
      // ========== BASE #156 BLACKOUT PARALLELS ==========
      { id: "BF-156", name: "#156 Blackout Base", parallel: "Blackout", numbered: null, rarity: "Uncommon" },
      { id: "BF-156-SURGE", name: "#156 Surge /99", parallel: "Surge", numbered: 99, rarity: "Super Rare" },
      { id: "BF-156-FLASH", name: "#156 Flash Drop /50", parallel: "Flash Drop", numbered: 50, rarity: "Super Rare" },
      { id: "BF-156-CART", name: "#156 Cart Load /25", parallel: "Cart Load", numbered: 25, rarity: "Ultra Rare" },
      { id: "BF-156-CYBER", name: "#156 Cyber Circuit /5", parallel: "Cyber Circuit", numbered: 5, rarity: "Legendary" },
      { id: "BF-156-DOOR", name: "#156 Doorbuster 1/1", parallel: "Doorbuster", numbered: 1, rarity: "Legendary" },
      // ========== COMBO #294 BLACKOUT PARALLELS ==========
      { id: "BF-294", name: "#294 Heat Check Blackout", parallel: "Blackout", numbered: null, rarity: "Uncommon" },
      { id: "BF-294-SURGE", name: "#294 Heat Check Surge /99", parallel: "Surge", numbered: 99, rarity: "Super Rare" },
      { id: "BF-294-FLASH", name: "#294 Heat Check Flash Drop /50", parallel: "Flash Drop", numbered: 50, rarity: "Super Rare" },
      { id: "BF-294-CART", name: "#294 Heat Check Cart Load /25", parallel: "Cart Load", numbered: 25, rarity: "Ultra Rare" },
      { id: "BF-294-CYBER", name: "#294 Heat Check Cyber Circuit /5", parallel: "Cyber Circuit", numbered: 5, rarity: "Legendary" },
      { id: "BF-294-DOOR", name: "#294 Heat Check Doorbuster 1/1", parallel: "Doorbuster", numbered: 1, rarity: "Legendary" },
      // ========== BLACKOUT EXCLUSIVE INSERTS ==========
      // Scan and Slam Blackout
      { id: "BF-SS-DB", name: "Scan and Slam #SS-DB Blackout Base", parallel: "Blackout", numbered: null, rarity: "Rare" },
      { id: "BF-SS-DB-SURGE", name: "Scan and Slam #SS-DB Surge /99", parallel: "Surge", numbered: 99, rarity: "Super Rare" },
      { id: "BF-SS-DB-FLASH", name: "Scan and Slam #SS-DB Flash Drop /50", parallel: "Flash Drop", numbered: 50, rarity: "Super Rare" },
      { id: "BF-SS-DB-CART", name: "Scan and Slam #SS-DB Cart Load /25", parallel: "Cart Load", numbered: 25, rarity: "Ultra Rare" },
      { id: "BF-SS-DB-CYBER", name: "Scan and Slam #SS-DB Cyber Circuit /5", parallel: "Cyber Circuit", numbered: 5, rarity: "Legendary" },
      { id: "BF-SS-DB-DOOR", name: "Scan and Slam #SS-DB Doorbuster 1/1", parallel: "Doorbuster", numbered: 1, rarity: "Legendary" },
      // Limited Stock Legends Blackout
      { id: "BF-LSL-DB", name: "Limited Stock Legends #LSL-DB Blackout Base", parallel: "Blackout", numbered: null, rarity: "Rare" },
      { id: "BF-LSL-DB-SURGE", name: "Limited Stock Legends #LSL-DB Surge /99", parallel: "Surge", numbered: 99, rarity: "Super Rare" },
      { id: "BF-LSL-DB-FLASH", name: "Limited Stock Legends #LSL-DB Flash Drop /50", parallel: "Flash Drop", numbered: 50, rarity: "Super Rare" },
      { id: "BF-LSL-DB-CART", name: "Limited Stock Legends #LSL-DB Cart Load /25", parallel: "Cart Load", numbered: 25, rarity: "Ultra Rare" },
      { id: "BF-LSL-DB-CYBER", name: "Limited Stock Legends #LSL-DB Cyber Circuit /5", parallel: "Cyber Circuit", numbered: 5, rarity: "Legendary" },
      { id: "BF-LSL-DB-DOOR", name: "Limited Stock Legends #LSL-DB Doorbuster 1/1", parallel: "Doorbuster", numbered: 1, rarity: "Legendary" },
      // Ripper Relics (Target Exclusive)
      { id: "BF-RR-DB", name: "Ripper Relics #RR-DB", parallel: "Base", numbered: null, rarity: "Super Rare" },
      { id: "BF-RR-DB-5", name: "Ripper Relics #RR-DB /5", parallel: "Numbered", numbered: 5, rarity: "Legendary" },
    ]
  },
  
  holiday: {
    name: "Topps Holiday",
    icon: "🎄",
    cards: [
      // ========== HOLIDAY BASE #H-DB ==========
      { id: "H-DB", name: "Holiday Base #H-DB", parallel: "Base", numbered: null, rarity: "Common" },
      { id: "H-DB-SNOWFLAKE", name: "Holiday #H-DB Snowflake Foil", parallel: "Snowflake Foil", numbered: null, rarity: "Uncommon" },
      { id: "H-DB-CANDY-CANE", name: "Holiday #H-DB Candy Cane", parallel: "Candy Cane", numbered: null, rarity: "Uncommon" },
      { id: "H-DB-ORNAMENT", name: "Holiday #H-DB Ornament Foil", parallel: "Ornament Foil", numbered: null, rarity: "Uncommon" },
      { id: "H-DB-FESTIVE", name: "Holiday #H-DB Festive Foil", parallel: "Festive Foil", numbered: null, rarity: "Uncommon" },
      { id: "H-DB-BLUE-METAL", name: "Holiday #H-DB Blue Metallic Glitter", parallel: "Blue Metallic Glitter", numbered: null, rarity: "Rare" },
      { id: "H-DB-PURPLE", name: "Holiday #H-DB Purple /99", parallel: "Purple", numbered: 99, rarity: "Super Rare" },
      { id: "H-DB-GOLD", name: "Holiday #H-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "H-DB-GREEN", name: "Holiday #H-DB Green /25", parallel: "Green", numbered: 25, rarity: "Ultra Rare" },
      { id: "H-DB-RED", name: "Holiday #H-DB Red /10", parallel: "Red", numbered: 10, rarity: "Ultra Rare" },
      { id: "H-DB-PLAT", name: "Holiday #H-DB Platinum 1/1", parallel: "Platinum", numbered: 1, rarity: "Legendary" },
      // Holiday Variations
      { id: "H-DB-SWEATER", name: "Holiday #H-DB Ugly Sweater SSP", parallel: "Ugly Sweater", numbered: null, rarity: "Super Rare" },
      { id: "H-DB-WINTER", name: "Holiday #H-DB Winter Wonder SSP", parallel: "Winter Wonder", numbered: null, rarity: "Super Rare" },
      // ========== HOLIDAY INSERTS ==========
      { id: "H-SNOW-DB", name: "Snow Globe #SG-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "H-SNOW-DB-GOLD", name: "Snow Globe #SG-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "H-SNOW-DB-RED", name: "Snow Globe #SG-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      { id: "H-WISH-DB", name: "Holiday Wishlist #HW-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "H-WISH-DB-GOLD", name: "Holiday Wishlist #HW-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "H-JOY-DB", name: "Joy to the Hardwood #JH-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "H-JOY-DB-GOLD", name: "Joy to the Hardwood #JH-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      // Die-Cut Ornament
      { id: "H-DCO-DB", name: "Die-Cut Ornament #DCO-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      // Evergreen Die Cut
      { id: "H-EV-DB", name: "Evergreen Die Cut #EV-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      // Cookie Back SSP
      { id: "H-COOKIE-DB", name: "Cookie Back #SSB-DB SSP", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      // Hidden Elf SSP
      { id: "H-ELF-DB", name: "Hidden Elf #HE-DB SSP", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      // Holiday Relics
      { id: "H-REL-DB", name: "Holiday Relic #HR-DB", parallel: "Base", numbered: null, rarity: "Super Rare" },
      { id: "H-REL-DB-GOLD", name: "Holiday Relic #HR-DB Gold /25", parallel: "Gold", numbered: 25, rarity: "Ultra Rare" },
      { id: "H-REL-DB-RED", name: "Holiday Relic #HR-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
    ]
  },
  
  chrome: {
    name: "Topps Chrome",
    icon: "✨",
    cards: [
      // ========== CHROME BASE #195 ==========
      { id: "C-195", name: "Chrome Base #195", parallel: "Base", numbered: null, rarity: "Common" },
      { id: "C-195-REF", name: "Chrome #195 Refractor", parallel: "Refractor", numbered: null, rarity: "Uncommon" },
      { id: "C-195-PRISM", name: "Chrome #195 Prism Refractor", parallel: "Prism", numbered: null, rarity: "Uncommon" },
      { id: "C-195-NEG", name: "Chrome #195 Negative Refractor", parallel: "Negative", numbered: null, rarity: "Uncommon" },
      { id: "C-195-MAGENTA", name: "Chrome #195 Magenta Refractor /399", parallel: "Magenta", numbered: 399, rarity: "Rare" },
      { id: "C-195-TEAL", name: "Chrome #195 Teal Refractor /299", parallel: "Teal", numbered: 299, rarity: "Rare" },
      { id: "C-195-YELLOW", name: "Chrome #195 Yellow Refractor /275", parallel: "Yellow", numbered: 275, rarity: "Rare" },
      { id: "C-195-AQUA", name: "Chrome #195 Aqua Refractor /199", parallel: "Aqua", numbered: 199, rarity: "Rare" },
      { id: "C-195-BLUE", name: "Chrome #195 Blue Refractor /150", parallel: "Blue", numbered: 150, rarity: "Rare" },
      { id: "C-195-GREEN", name: "Chrome #195 Green Refractor /99", parallel: "Green", numbered: 99, rarity: "Super Rare" },
      { id: "C-195-PURPLE", name: "Chrome #195 Purple Refractor /75", parallel: "Purple", numbered: 75, rarity: "Super Rare" },
      { id: "C-195-GOLD", name: "Chrome #195 Gold Refractor /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "C-195-ORANGE", name: "Chrome #195 Orange Refractor /25", parallel: "Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-195-BLACK", name: "Chrome #195 Black Refractor /10", parallel: "Black", numbered: 10, rarity: "Ultra Rare" },
      { id: "C-195-RED", name: "Chrome #195 Red Refractor /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      { id: "C-195-FROZEN", name: "Chrome #195 Frozenfractor /5", parallel: "Frozenfractor", numbered: 5, rarity: "Legendary" },
      { id: "C-195-SUPER", name: "Chrome #195 Superfractor 1/1", parallel: "Superfractor", numbered: 1, rarity: "Legendary" },
      // Wave Refractors
      { id: "C-195-WAVE", name: "Chrome #195 Wave Refractor", parallel: "Wave", numbered: null, rarity: "Uncommon" },
      { id: "C-195-BLUE-WAVE", name: "Chrome #195 Blue Wave /150", parallel: "Blue Wave", numbered: 150, rarity: "Rare" },
      { id: "C-195-GREEN-WAVE", name: "Chrome #195 Green Wave /99", parallel: "Green Wave", numbered: 99, rarity: "Super Rare" },
      { id: "C-195-PURPLE-WAVE", name: "Chrome #195 Purple Wave /75", parallel: "Purple Wave", numbered: 75, rarity: "Super Rare" },
      { id: "C-195-GOLD-WAVE", name: "Chrome #195 Gold Wave /50", parallel: "Gold Wave", numbered: 50, rarity: "Super Rare" },
      { id: "C-195-ORANGE-WAVE", name: "Chrome #195 Orange Wave /25", parallel: "Orange Wave", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-195-BLACK-WAVE", name: "Chrome #195 Black Wave /10", parallel: "Black Wave", numbered: 10, rarity: "Ultra Rare" },
      { id: "C-195-RED-WAVE", name: "Chrome #195 Red Wave /5", parallel: "Red Wave", numbered: 5, rarity: "Legendary" },
      // Geometric Refractors (Breaker Delight)
      { id: "C-195-GEO", name: "Chrome #195 Geometric Refractor", parallel: "Geometric", numbered: null, rarity: "Uncommon" },
      { id: "C-195-GEO-PURPLE", name: "Chrome #195 Geometric Purple /75", parallel: "Geometric Purple", numbered: 75, rarity: "Super Rare" },
      { id: "C-195-GEO-GOLD", name: "Chrome #195 Geometric Gold /50", parallel: "Geometric Gold", numbered: 50, rarity: "Super Rare" },
      { id: "C-195-GEO-ORANGE", name: "Chrome #195 Geometric Orange /25", parallel: "Geometric Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-195-GEO-BLACK", name: "Chrome #195 Geometric Black /10", parallel: "Geometric Black", numbered: 10, rarity: "Ultra Rare" },
      { id: "C-195-GEO-RED", name: "Chrome #195 Geometric Red /5", parallel: "Geometric Red", numbered: 5, rarity: "Legendary" },
      { id: "C-195-GEO-WHITE", name: "Chrome #195 Geometric White /2", parallel: "Geometric White", numbered: 2, rarity: "Legendary" },
      // Retail Exclusives
      { id: "C-195-PULSAR", name: "Chrome #195 Pulsar Refractor (Hanger)", parallel: "Pulsar", numbered: null, rarity: "Uncommon" },
      { id: "C-195-SKYLIGHT", name: "Chrome #195 SkyLight Refractor (Mega)", parallel: "SkyLight", numbered: null, rarity: "Uncommon" },
      { id: "C-195-XFRACTOR", name: "Chrome #195 Blue X-Fractor (Mega)", parallel: "Blue X-Fractor", numbered: null, rarity: "Rare" },
      { id: "C-195-RWB", name: "Chrome #195 Red White Blue (Blaster)", parallel: "Red White Blue", numbered: null, rarity: "Uncommon" },
      { id: "C-195-FIRST", name: "Chrome #195 First Day Issue (Jumbo)", parallel: "First Day Issue", numbered: null, rarity: "Super Rare" },
      // Variations
      { id: "C-195-VAR", name: "Chrome #195 Image Variation SSP", parallel: "Image Variation", numbered: null, rarity: "Super Rare" },
      // Basketball Border variants
      { id: "C-195-BORDER", name: "Chrome #195 Basketball Border", parallel: "Basketball Border", numbered: null, rarity: "Uncommon" },
      { id: "C-195-BORDER-AQUA", name: "Chrome #195 Aqua Border /199", parallel: "Aqua Border", numbered: 199, rarity: "Rare" },
      { id: "C-195-BORDER-BLUE", name: "Chrome #195 Blue Border /150", parallel: "Blue Border", numbered: 150, rarity: "Rare" },
      { id: "C-195-BORDER-PURPLE", name: "Chrome #195 Purple Border /75", parallel: "Purple Border", numbered: 75, rarity: "Super Rare" },
      // Pulsar variants (Hanger exclusive)
      { id: "C-195-GOLD-PULSAR", name: "Chrome #195 Gold Pulsar /50", parallel: "Gold Pulsar", numbered: 50, rarity: "Super Rare" },
      { id: "C-195-ORANGE-PULSAR", name: "Chrome #195 Orange Pulsar /25", parallel: "Orange Pulsar", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-195-BLACK-PULSAR", name: "Chrome #195 Black Pulsar /10", parallel: "Black Pulsar", numbered: 10, rarity: "Ultra Rare" },
      { id: "C-195-PURPLE-PULSAR", name: "Chrome #195 Purple Pulsar /75", parallel: "Purple Pulsar", numbered: 75, rarity: "Super Rare" },
      // Teal RayWave variants
      { id: "C-195-TEAL-WAVE", name: "Chrome #195 Teal RayWave /199", parallel: "Teal RayWave", numbered: 199, rarity: "Rare" },
      { id: "C-195-YELLOW-WAVE", name: "Chrome #195 Yellow RayWave /275", parallel: "Yellow RayWave", numbered: 275, rarity: "Rare" },
      { id: "C-195-AQUA-WAVE", name: "Chrome #195 Aqua Wave /199", parallel: "Aqua Wave", numbered: 199, rarity: "Rare" },
      
      // ========== CHROME INSERTS ==========
      // Go Time
      { id: "C-GT-DB", name: "Go Time #GT-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "C-GT-DB-REF", name: "Go Time #GT-DB Refractor", parallel: "Refractor", numbered: null, rarity: "Rare" },
      { id: "C-GT-DB-MAGENTA", name: "Go Time #GT-DB Magenta /399", parallel: "Magenta", numbered: 399, rarity: "Rare" },
      { id: "C-GT-DB-TEAL", name: "Go Time #GT-DB Teal /299", parallel: "Teal", numbered: 299, rarity: "Rare" },
      { id: "C-GT-DB-YELLOW", name: "Go Time #GT-DB Yellow /275", parallel: "Yellow", numbered: 275, rarity: "Rare" },
      { id: "C-GT-DB-AQUA", name: "Go Time #GT-DB Aqua /199", parallel: "Aqua", numbered: 199, rarity: "Rare" },
      { id: "C-GT-DB-GREEN", name: "Go Time #GT-DB Green /99", parallel: "Green", numbered: 99, rarity: "Super Rare" },
      { id: "C-GT-DB-PURPLE", name: "Go Time #GT-DB Purple /75", parallel: "Purple", numbered: 75, rarity: "Super Rare" },
      { id: "C-GT-DB-GOLD", name: "Go Time #GT-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "C-GT-DB-ORANGE", name: "Go Time #GT-DB Orange /25", parallel: "Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-GT-DB-RED", name: "Go Time #GT-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      { id: "C-GT-DB-SUPER", name: "Go Time #GT-DB Superfractor 1/1", parallel: "Superfractor", numbered: 1, rarity: "Legendary" },
      // Go Time RayWave variants
      { id: "C-GT-DB-RAYWAVE", name: "Go Time #GT-DB RayWave", parallel: "RayWave", numbered: null, rarity: "Rare" },
      { id: "C-GT-DB-RAYWAVE-TEAL", name: "Go Time #GT-DB Teal RayWave /199", parallel: "Teal RayWave", numbered: 199, rarity: "Rare" },
      { id: "C-GT-DB-RAYWAVE-YELLOW", name: "Go Time #GT-DB Yellow RayWave /275", parallel: "Yellow RayWave", numbered: 275, rarity: "Rare" },
      // Go Time Pulsar (retail)
      { id: "C-GT-DB-PULSAR", name: "Go Time #GT-DB Pulsar", parallel: "Pulsar", numbered: null, rarity: "Rare" },
      // Sleek Finishers
      { id: "C-SF-DB", name: "Sleek Finishers #SF-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "C-SF-DB-REF", name: "Sleek Finishers #SF-DB Refractor", parallel: "Refractor", numbered: null, rarity: "Rare" },
      { id: "C-SF-DB-AQUA", name: "Sleek Finishers #SF-DB Aqua /199", parallel: "Aqua", numbered: 199, rarity: "Rare" },
      { id: "C-SF-DB-BLUE", name: "Sleek Finishers #SF-DB Blue /150", parallel: "Blue", numbered: 150, rarity: "Rare" },
      { id: "C-SF-DB-GREEN", name: "Sleek Finishers #SF-DB Green /99", parallel: "Green", numbered: 99, rarity: "Super Rare" },
      { id: "C-SF-DB-PURPLE", name: "Sleek Finishers #SF-DB Purple /75", parallel: "Purple", numbered: 75, rarity: "Super Rare" },
      { id: "C-SF-DB-GOLD", name: "Sleek Finishers #SF-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "C-SF-DB-ORANGE", name: "Sleek Finishers #SF-DB Orange /25", parallel: "Orange", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-SF-DB-RED", name: "Sleek Finishers #SF-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      // Sleek Finishers Geometric variants
      { id: "C-SF-DB-GEO-GREEN", name: "Sleek Finishers #SF-DB Green Geometric /99", parallel: "Green Geometric", numbered: 99, rarity: "Super Rare" },
      { id: "C-SF-DB-GEO-GOLD", name: "Sleek Finishers #SF-DB Gold Geometric /50", parallel: "Gold Geometric", numbered: 50, rarity: "Super Rare" },
      { id: "C-SF-DB-GEO-ORANGE", name: "Sleek Finishers #SF-DB Orange Geometric /25", parallel: "Orange Geometric", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-SF-DB-GEO-RED", name: "Sleek Finishers #SF-DB Red Geometric /5", parallel: "Red Geometric", numbered: 5, rarity: "Legendary" },
      // Clutch Gene
      { id: "C-CG-DB", name: "Clutch Gene #CG-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "C-CG-DB-REF", name: "Clutch Gene #CG-DB Refractor", parallel: "Refractor", numbered: null, rarity: "Rare" },
      { id: "C-CG-DB-GREEN", name: "Clutch Gene #CG-DB Green /99", parallel: "Green", numbered: 99, rarity: "Super Rare" },
      { id: "C-CG-DB-GOLD", name: "Clutch Gene #CG-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      { id: "C-CG-DB-RED", name: "Clutch Gene #CG-DB Red /5", parallel: "Red", numbered: 5, rarity: "Legendary" },
      // Clutch Gene Geometric
      { id: "C-CG-DB-GEO-PURPLE", name: "Clutch Gene #CG-DB Purple Geometric /75", parallel: "Purple Geometric", numbered: 75, rarity: "Super Rare" },
      // Destiny
      { id: "C-DEST-DB", name: "Destiny #DEST-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "C-DEST-DB-REF", name: "Destiny #DEST-DB Refractor", parallel: "Refractor", numbered: null, rarity: "Rare" },
      { id: "C-DEST-DB-GOLD", name: "Destiny #DEST-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      // Chrome Levitation
      { id: "C-LEV-DB", name: "Chrome Levitation #L-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "C-LEV-DB-REF", name: "Chrome Levitation #L-DB Refractor", parallel: "Refractor", numbered: null, rarity: "Rare" },
      { id: "C-LEV-DB-GOLD", name: "Chrome Levitation #L-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      // Instinct
      { id: "C-INS-DB", name: "Instinct #INS-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "C-INS-DB-GOLD", name: "Instinct #INS-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      // SSP Inserts
      { id: "C-HELIX-DB", name: "Helix #HLX-DB SSP", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      { id: "C-GLASS-DB", name: "Glass Canvas #GC-DB SSP", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      { id: "C-PAT-DB", name: "Patented #PAT-DB SSP", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      { id: "C-451-DB", name: "451 #451-DB SSP", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      { id: "C-ROCK-DB", name: "Rock Stars #RS-DB SSP", parallel: "Base SSP", numbered: null, rarity: "Super Rare" },
      // Tall Tales (Comic Book Style)
      { id: "C-TT-DB", name: "Tall Tales #TT-DB", parallel: "Base", numbered: null, rarity: "Rare" },
      { id: "C-TT-DB-GOLD", name: "Tall Tales #TT-DB Gold /50", parallel: "Gold", numbered: 50, rarity: "Super Rare" },
      
      // ========== CHROME AUTOGRAPHS ==========
      { id: "C-AUTO-DB", name: "Chrome Auto #CA-DB", parallel: "Base Auto", numbered: null, rarity: "Super Rare" },
      { id: "C-AUTO-DB-REF", name: "Chrome Auto #CA-DB Refractor", parallel: "Refractor Auto", numbered: null, rarity: "Super Rare" },
      { id: "C-AUTO-DB-BLUE", name: "Chrome Auto #CA-DB Blue /150", parallel: "Blue Auto", numbered: 150, rarity: "Super Rare" },
      { id: "C-AUTO-DB-GREEN", name: "Chrome Auto #CA-DB Green /99", parallel: "Green Auto", numbered: 99, rarity: "Super Rare" },
      { id: "C-AUTO-DB-PURPLE", name: "Chrome Auto #CA-DB Purple /75", parallel: "Purple Auto", numbered: 75, rarity: "Super Rare" },
      { id: "C-AUTO-DB-GOLD", name: "Chrome Auto #CA-DB Gold /50", parallel: "Gold Auto", numbered: 50, rarity: "Ultra Rare" },
      { id: "C-AUTO-DB-ORANGE", name: "Chrome Auto #CA-DB Orange /25", parallel: "Orange Auto", numbered: 25, rarity: "Ultra Rare" },
      { id: "C-AUTO-DB-BLACK", name: "Chrome Auto #CA-DB Black /10", parallel: "Black Auto", numbered: 10, rarity: "Ultra Rare" },
      { id: "C-AUTO-DB-RED", name: "Chrome Auto #CA-DB Red /5", parallel: "Red Auto", numbered: 5, rarity: "Legendary" },
      { id: "C-AUTO-DB-SUPER", name: "Chrome Auto #CA-DB Superfractor 1/1", parallel: "Superfractor Auto", numbered: 1, rarity: "Legendary" },
    ]
  }
};

// Pre-populated owned cards from your Collection CSV (updated 01-19-2026)
const OWNED_CARDS_RAW = [
  // ============ FLAGSHIP BASE #156 ============
  "F-156-PURPLE-HOLO",    // Purple Holo Foil /250 (2 copies)
  "F-156-GOLD",           // Gold /2025
  "F-156-GREEN-R",        // Green Rainbow /99
  "F-156-AQUA-HOLO",      // Aqua Holo Foil SP
  "F-156-VICTORY",        // Victory SSP
  "F-156-TCB",            // Team Color Border SSP
  "F-156-GOLDEN",         // Golden Mirror SSP
  "F-156-GOLD-DIAMANTE",  // Gold Diamante /50
  "F-156-TIPOFF",         // Season Tip-Off
  "F-156-FOIL-PATTERN",   // Topps Foil Pattern
  "F-156-BLACK",          // Black /68
  "F-156-BLUE-HOLO",      // Blue Holo Foil /150
  "F-156-PLAYER-NUM",     // Player Number Variation SSP (Jersey #)
  "F-156-BLACK-R",        // Black Rainbow /10 (2 copies!)
  "F-156-ORANGE-HOLO",    // Orange Holofoil /25
  "F-156-PINK-HOLO",      // Pink Holo Foil SP
  "F-156-CLEAR",          // Clear Acetate 10/10!
  "F-156-GOLD-R",         // Gold /50 (Gold Foil)
  
  // ============ FLAGSHIP COMBO #294 (Suns Duo Heat Check) ============
  "F-294",                // Base
  "F-294-RAINBOW",        // Rainbow Foilboard
  "F-294-GOLD",           // Gold /2025
  "F-294-HOLO",           // Holo Foil (Pink Holo)
  "F-294-GOLDEN",         // Blue Shimmer
  "F-294-GOLD-R",         // Gold Scoreboard /50 (2 copies)
  "F-294-RED-R",          // Red Sand Glitter /5!
  
  // ============ FLAGSHIP INSERTS ============
  // Daily Dribble
  "F-DD-DB",              // Base
  "F-DD-DB-GREEN",        // Green /99
  "F-DD-DB-GOLD",         // Gold /50
  "F-DD-DB-ORANGE",       // Orange /25
  "F-DD-DB-RED",          // Red /5!
  
  // Levitation
  "F-LEV-DB",             // Base
  "F-LEV-DB-GREEN",       // Green /99
  "F-LEV-DB-GOLD",        // Gold /50
  
  // Comic Court
  "F-CC-DB",              // Base SSP Case Hit
  
  // 8-Bit Ballers
  "F-8B-DB",              // Base
  "F-8B-DB-HOLO",         // Holofoil /250
  "F-8B-DB-BLUE-HOLO",    // Blue Holofoil /150
  "F-8B-DB-GREEN-HOLO",   // Green Holofoil /99
  
  // Scan and Slam
  "F-SS-DB",              // Base
  "F-SS-DB-FLASH",        // Flash Drop /50
  "F-SS-DB-DOOR",         // Doorbuster 1/1 Jersey Match!
  
  // Limited Stock Legends
  "F-LSL-DB-FLASH",       // Flash Drop /50
  "F-LSL-DB-DOOR",        // Doorbuster 1/1!
  
  // 1980-81 Chrome
  "F-80-DB",              // Base
  "F-80-DB-MOJO",         // Mojo Refractor
  "F-80-DB-GREEN",        // Green Mojo /99
  "F-80-DB-AQUA",         // Aqua Mojo /199
  
  // Hardwood Stars
  "F-HS-DB",              // Base SSP Case Hit
  
  // Go Time (Flagship)
  "F-GO-TIME",            // Base
  "F-GO-TIME-5",          // Red /5!
  
  // Big Box Ballers (Fanatics)
  "F-BB-41",              // Gold Foil
  
  // ============ FLAGSHIP RELICS ============
  "F-FRO-DB",             // Base Relic
  "F-FRO-DB-BLACK",       // Black /10
  
  // ============ BLACKOUT (Target Black Friday) ============
  "BF-156",               // Base Blackout
  "BF-156-SURGE",         // Surge /99
  "BF-156-FLASH",         // Flash Drop /50
  "BF-294",               // Combo Blackout Base
  "BF-294-SURGE",         // Combo Surge /99
  "BF-294-CART",          // Combo Cart Load /25
  "BF-SS-DB-SURGE",       // Scan and Slam Surge /99
  "BF-SS-DB-CART",        // Scan and Slam Cart Load /25
  "BF-LSL-DB-FLASH",      // Limited Stock Legends Flash Drop /50
  
  // ============ HOLIDAY ============
  "H-DB",                 // Base (Plaid)
  "H-DB-BLUE-METAL",      // Blue Metallic Glitter
  "H-DB-PURPLE",          // Purple /99
  "H-DB-GREEN",           // Orange /25
  "H-SNOW-DB",            // Glitter Card base
  "H-DCO-DB",             // Die-Cut Ornament
  "H-EV-DB",              // Evergreen Die Cut
  "H-COOKIE-DB",          // Cookie Back SSP
  "H-ELF-DB",             // Hidden Elf SSP
  
  // ============ CHROME BASE #195 ============
  "C-195",                // Base
  "C-195-REF",            // Refractor
  "C-195-PRISM",          // Prism Refractor
  "C-195-NEG",            // Negative Refractor
  "C-195-MAGENTA",        // Magenta /399
  "C-195-TEAL",           // Teal /299
  "C-195-YELLOW",         // Yellow /275
  "C-195-AQUA",           // Aqua /199 (multiple copies)
  "C-195-BLUE",           // Blue /150
  "C-195-GREEN",          // Green /99
  "C-195-PURPLE",         // Purple /75
  "C-195-GOLD",           // Gold /50
  "C-195-ORANGE",         // Orange /25
  "C-195-BLACK",          // Black /10 (Pulsar)
  "C-195-RED",            // Red /5!
  "C-195-WAVE",           // Wave Refractor (RayWave)
  "C-195-BLUE-WAVE",      // Blue Wave /150 (multiple)
  "C-195-GREEN-WAVE",     // Green Wave /99
  "C-195-PURPLE-WAVE",    // Purple Wave /75 (multiple)
  "C-195-GOLD-WAVE",      // Gold Wave - need to verify
  "C-195-ORANGE-WAVE",    // Orange Wave /25
  "C-195-GEO",            // Geometric Refractor
  "C-195-GEO-PURPLE",     // Geometric Purple /75
  "C-195-GEO-GOLD",       // Geometric Gold /50
  "C-195-PULSAR",         // Pulsar (Hanger)
  "C-195-SKYLIGHT",       // SkyLight (Mega)
  "C-195-RWB",            // Red White Blue
  "C-195-VAR",            // Image Variation SSP (2 copies)
  
  // Chrome Border variants
  "C-195-BORDER",         // Basketball Border base
  "C-195-BORDER-AQUA",    // Aqua Border /199
  "C-195-BORDER-BLUE",    // Blue Border /150
  "C-195-BORDER-PURPLE",  // Purple Border /75
  
  // ============ CHROME INSERTS ============
  // Go Time
  "C-GT-DB",              // Base (multiple)
  "C-GT-DB-REF",          // Refractor (multiple)
  "C-GT-DB-MAGENTA",      // Magenta /399
  "C-GT-DB-TEAL",         // Teal /299
  "C-GT-DB-YELLOW",       // Yellow /275
  "C-GT-DB-AQUA",         // Aqua /199
  "C-GT-DB-GREEN",        // Green /99
  "C-GT-DB-PURPLE",       // Purple /75
  "C-GT-DB-ORANGE",       // Orange /25
  // RayWave variants
  "C-GT-DB-RAYWAVE",      // RayWave base
  "C-GT-DB-RAYWAVE-TEAL", // Teal RayWave /199
  "C-GT-DB-RAYWAVE-YELLOW", // Yellow RayWave /275
  "C-GT-DB-PULSAR",       // Pulsar
  
  // Sleek Finishers
  "C-SF-DB",              // Base (multiple)
  "C-SF-DB-REF",          // Refractor /99
  "C-SF-DB-AQUA",         // Aqua /199
  "C-SF-DB-BLUE",         // Blue /150
  "C-SF-DB-GREEN",        // Green /99
  "C-SF-DB-PURPLE",       // Purple /75
  "C-SF-DB-GOLD",         // Gold /50
  "C-SF-DB-ORANGE",       // Orange Geometric 1/25!
  "C-SF-DB-GEO-GREEN",    // Green Geometric /99
  "C-SF-DB-GEO-GOLD",     // Gold Geometric /50
  "C-SF-DB-GEO-RED",      // Red Geometric /5!
  
  // Clutch Gene
  "C-CG-DB",              // Base
  "C-CG-DB-REF",          // Refractor
  "C-CG-DB-GREEN",        // Green /99
  "C-CG-DB-GEO-PURPLE",   // Geometric Purple /75
  
  // Chrome Levitation
  "C-LEV-DB",             // Base /25
];

const RARITY_ORDER = {
  "Common": 1,
  "Uncommon": 2,
  "Rare": 3,
  "Super Rare": 4,
  "Ultra Rare": 5,
  "Legendary": 6
};

const RARITY_COLORS = {
  "Common": { bg: "rgba(128, 128, 128, 0.2)", text: "#888", glow: "transparent" },
  "Uncommon": { bg: "rgba(76, 175, 80, 0.2)", text: "#4CAF50", glow: "#4CAF50" },
  "Rare": { bg: "rgba(33, 150, 243, 0.2)", text: "#2196F3", glow: "#2196F3" },
  "Super Rare": { bg: "rgba(156, 39, 176, 0.2)", text: "#9C27B0", glow: "#9C27B0" },
  "Ultra Rare": { bg: "rgba(255, 152, 0, 0.2)", text: "#FF9800", glow: "#FF9800" },
  "Legendary": { bg: "rgba(255, 215, 0, 0.3)", text: "#FFD700", glow: "#FFD700" }
};

function App() {
  const [activeCollection, setActiveCollection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRarity, setFilterRarity] = useState('all');
  const [filterOwned, setFilterOwned] = useState('all');
  const [sortBy, setSortBy] = useState('rarity');
  const [ownedCards, setOwnedCards] = useState(new Set(OWNED_CARDS_RAW));
  const [showStats, setShowStats] = useState(true);
  const [isOnFire, setIsOnFire] = useState(false);

  // Check for hot streak
  useEffect(() => {
    const ownedCount = ownedCards.size;
    const totalCards = Object.values(BOOKER_CARDS).reduce((sum, col) => sum + col.cards.length, 0);
    const percentage = (ownedCount / totalCards) * 100;
    setIsOnFire(percentage > 50);
  }, [ownedCards]);

  const toggleOwned = (cardId) => {
    setOwnedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const filteredCards = useMemo(() => {
    let cards = [];
    
    const collections = activeCollection === 'all' 
      ? Object.entries(BOOKER_CARDS)
      : [[activeCollection, BOOKER_CARDS[activeCollection]]];

    collections.forEach(([collectionKey, collection]) => {
      if (!collection) return;
      collection.cards.forEach(card => {
        cards.push({
          ...card,
          collectionKey,
          collectionName: collection.name,
          collectionIcon: collection.icon,
          owned: ownedCards.has(card.id)
        });
      });
    });

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      cards = cards.filter(card => 
        card.name.toLowerCase().includes(query) ||
        card.parallel.toLowerCase().includes(query) ||
        card.collectionName.toLowerCase().includes(query)
      );
    }

    // Filter by rarity
    if (filterRarity !== 'all') {
      cards = cards.filter(card => card.rarity === filterRarity);
    }

    // Filter by owned status
    if (filterOwned === 'owned') {
      cards = cards.filter(card => card.owned);
    } else if (filterOwned === 'needed') {
      cards = cards.filter(card => !card.owned);
    }

    // Sort
    cards.sort((a, b) => {
      switch (sortBy) {
        case 'rarity':
          return RARITY_ORDER[b.rarity] - RARITY_ORDER[a.rarity];
        case 'rarity-asc':
          return RARITY_ORDER[a.rarity] - RARITY_ORDER[b.rarity];
        case 'name':
          return a.name.localeCompare(b.name);
        case 'numbered':
          const aNum = a.numbered || 9999;
          const bNum = b.numbered || 9999;
          return aNum - bNum;
        case 'collection':
          return a.collectionName.localeCompare(b.collectionName);
        default:
          return 0;
      }
    });

    return cards;
  }, [activeCollection, searchQuery, filterRarity, filterOwned, sortBy, ownedCards]);

  const stats = useMemo(() => {
    const result = {
      total: 0,
      owned: 0,
      byCollection: {},
      byRarity: {}
    };

    Object.entries(BOOKER_CARDS).forEach(([key, collection]) => {
      result.byCollection[key] = {
        name: collection.name,
        icon: collection.icon,
        total: collection.cards.length,
        owned: collection.cards.filter(c => ownedCards.has(c.id)).length
      };
      result.total += collection.cards.length;
      result.owned += result.byCollection[key].owned;
    });

    Object.keys(RARITY_ORDER).forEach(rarity => {
      const rarityCards = Object.values(BOOKER_CARDS).flatMap(c => c.cards).filter(c => c.rarity === rarity);
      result.byRarity[rarity] = {
        total: rarityCards.length,
        owned: rarityCards.filter(c => ownedCards.has(c.id)).length
      };
    });

    return result;
  }, [ownedCards]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1d1160 0%, #e56020 50%, #1d1160 100%)',
      fontFamily: "'Bebas Neue', 'Impact', sans-serif",
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated court lines background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 52px),
          repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 52px)
        `,
        pointerEvents: 'none'
      }} />

      {/* NBA Jam style header - FIXED: No more blur! */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(29,17,96,0.95) 100%)',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '4px solid #e56020',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 30px rgba(229, 96, 32, 0.5)'
      }}>
        <h1 style={{
          fontSize: '42px',
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '4px',
          color: '#fff',
          textShadow: isOnFire 
            ? '0 0 10px #ff6b00, 0 0 20px #ff6b00, 0 0 30px #ff3d00, 0 0 40px #ff3d00, 2px 2px 4px rgba(0,0,0,0.8)' 
            : '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(229, 96, 32, 0.5)',
          animation: isOnFire ? 'pulse 1s ease-in-out infinite' : 'none'
        }}>
          🔥 DEVIN BOOKER TRACKER 🔥
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#e56020',
          margin: '8px 0 0',
          letterSpacing: '2px',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          2025-26 TOPPS COLLECTION • PHOENIX SUNS #1
        </p>
        {isOnFire && (
          <div style={{
            fontSize: '24px',
            color: '#FFD700',
            marginTop: '10px',
            animation: 'bounce 0.5s ease-in-out infinite',
            textShadow: '0 0 10px #FFD700'
          }}>
            🏀 HE'S ON FIRE! 🏀
          </div>
        )}
      </header>

      {/* Stats Panel */}
      {showStats && (
        <div style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '20px',
          margin: '20px',
          borderRadius: '16px',
          border: '2px solid #e56020',
          boxShadow: '0 0 30px rgba(229, 96, 32, 0.3)'
        }}>
          {/* Overall Progress */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold' }}>
              {stats.owned} / {stats.total}
            </div>
            <div style={{ 
              fontSize: '16px', 
              color: '#e56020',
              letterSpacing: '2px'
            }}>
              TOTAL COLLECTION PROGRESS
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              height: '20px',
              margin: '10px 0',
              overflow: 'hidden',
              border: '2px solid #e56020'
            }}>
              <div style={{
                background: 'linear-gradient(90deg, #1d1160, #e56020)',
                height: '100%',
                width: `${(stats.owned / stats.total) * 100}%`,
                transition: 'width 0.5s ease',
                boxShadow: '0 0 20px #e56020'
              }} />
            </div>
            <div style={{ fontSize: '24px', color: '#FFD700' }}>
              {((stats.owned / stats.total) * 100).toFixed(1)}% COMPLETE
            </div>
          </div>

          {/* Collection Breakdown */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {Object.entries(stats.byCollection).map(([key, col]) => (
              <div key={key} style={{
                background: activeCollection === key ? 'rgba(229, 96, 32, 0.3)' : 'rgba(255,255,255,0.05)',
                padding: '15px',
                borderRadius: '12px',
                border: activeCollection === key ? '2px solid #e56020' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }} onClick={() => setActiveCollection(activeCollection === key ? 'all' : key)}>
                <div style={{ fontSize: '24px', marginBottom: '5px' }}>{col.icon}</div>
                <div style={{ fontSize: '14px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {col.name}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  {col.owned} / {col.total}
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '5px',
                  height: '8px',
                  marginTop: '8px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    background: '#e56020',
                    height: '100%',
                    width: `${(col.owned / col.total) * 100}%`,
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Stats Button */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <button
          onClick={() => setShowStats(!showStats)}
          style={{
            background: 'rgba(229, 96, 32, 0.3)',
            border: '2px solid #e56020',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '14px',
            letterSpacing: '1px'
          }}
        >
          {showStats ? 'HIDE STATS' : 'SHOW STATS'}
        </button>
      </div>

      {/* Filters */}
      <div style={{
        padding: '0 20px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center'
      }}>
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search cards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: '2px solid #e56020',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: '25px',
            fontSize: '16px',
            width: '200px',
            outline: 'none'
          }}
        />

        {/* Rarity Filter */}
        <select
          value={filterRarity}
          onChange={(e) => setFilterRarity(e.target.value)}
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: '2px solid #e56020',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: '25px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Rarities</option>
          {Object.keys(RARITY_ORDER).map(rarity => (
            <option key={rarity} value={rarity}>{rarity}</option>
          ))}
        </select>

        {/* Owned Filter */}
        <select
          value={filterOwned}
          onChange={(e) => setFilterOwned(e.target.value)}
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: '2px solid #e56020',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: '25px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Cards</option>
          <option value="owned">✓ Owned</option>
          <option value="needed">✗ Needed</option>
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            background: 'rgba(0,0,0,0.5)',
            border: '2px solid #e56020',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: '25px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          <option value="rarity">Rarity (High → Low)</option>
          <option value="rarity-asc">Rarity (Low → High)</option>
          <option value="numbered">Serial # (Low → High)</option>
          <option value="name">Name (A → Z)</option>
          <option value="collection">Collection</option>
        </select>
      </div>

      {/* Results Count */}
      <div style={{
        padding: '0 20px 10px',
        fontSize: '14px',
        color: '#aaa',
        letterSpacing: '1px'
      }}>
        SHOWING {filteredCards.length} CARDS • {filteredCards.filter(c => c.owned).length} OWNED
      </div>

      {/* Card List */}
      <div style={{
        padding: '0 20px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '15px'
      }}>
        {filteredCards.map(card => (
          <div
            key={card.id}
            onClick={() => toggleOwned(card.id)}
            style={{
              background: card.owned 
                ? 'linear-gradient(135deg, rgba(29,17,96,0.9), rgba(229,96,32,0.7))'
                : 'rgba(0,0,0,0.6)',
              borderRadius: '12px',
              padding: '16px',
              cursor: 'pointer',
              border: card.owned ? '3px solid #FFD700' : '2px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: card.owned 
                ? `0 0 20px ${RARITY_COLORS[card.rarity].glow}, 0 4px 15px rgba(0,0,0,0.3)`
                : '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            {/* Owned indicator - BASKETBALL EMOJI! */}
            {card.owned && (
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '32px',
                filter: 'drop-shadow(0 0 8px #FFD700)'
              }}>
                🏀
              </div>
            )}

            {/* Collection badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: '20px' }}>{card.collectionIcon}</span>
              <span style={{
                fontSize: '12px',
                color: '#aaa',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {card.collectionName}
              </span>
            </div>

            {/* Card name */}
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '8px',
              paddingRight: card.owned ? '40px' : '0'
            }}>
              {card.name}
            </div>

            {/* Parallel & details */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center'
            }}>
              {/* Rarity badge */}
              <span style={{
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold',
                background: RARITY_COLORS[card.rarity].bg,
                color: RARITY_COLORS[card.rarity].text,
                border: `1px solid ${RARITY_COLORS[card.rarity].text}`,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {card.rarity}
              </span>

              {/* Numbered badge */}
              {card.numbered && (
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}>
                  /{card.numbered}
                </span>
              )}

              {/* Parallel badge */}
              <span style={{
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '11px',
                background: 'rgba(229, 96, 32, 0.3)',
                color: '#e56020',
                border: '1px solid #e56020'
              }}>
                {card.parallel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredCards.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#aaa'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>🏀</div>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>NO CARDS FOUND</div>
          <div style={{ fontSize: '16px' }}>Try adjusting your filters</div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes fireGlow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.2); }
        }
        
        * {
          box-sizing: border-box;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: #e56020;
          border-radius: 4px;
        }
        
        select option {
          background: #1d1160;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default App;
