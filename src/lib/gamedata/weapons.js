export const weapons = {
    dams:[
        //name
        [`magic`],
        [`pierce`],
        [`slash`],
        [`blunt`]
    ],
    profiles:[
        //name, dam_type, stat1, stat2, acc, spd
        [`sneak`, 1, `grc`, `agl`, 1.2, 1],
        [`precise`, 1, `dex`, `agl`, 1.1, 1],
        [`light`, 2, `dex`, `grc`, 1.1, 1],
        [`standard`, 2, `str`, `grc`, 1, 1],
        [`heavy`, 2, `str`, `dex`, 0.9, 1],
        
        [`batter`, 3, `str`, `sbn`, 0.8, 1],
        [`tension`, 1, `dex`, `per`, 1, 1],
        [`torque`, 1, `str`, `per`, 1, 2],
        [`flintlock`, 1, `per`, `grc`, 1, 2],
        [`cast`, 0, `int`, `wis`, 1, 1],
        
        [`channel`, 0, `fcs`, `int`, 1, 1],
        [`aether`, 0, `fcs`, `wis`, 1, 1],
        [`tear`, 2, `str`, `agl`, 1, 1],
        [`aegis`, 3, `dex`, `sbn`, 1, 0.666]
    ],
    masters:[
        //name, level, profile, hands
        [`Iron Short Sword`, 0, 3, 1],
        [`Iron Hand Axe`, 0, 4, 1],
        [`Small Iron Hammer`, 0, 5, 1],
        [`Iron Sabre`, 0, 2, 1],
        [`Iron Rapier`, 0, 1, 1],

        [`Iron Claw`, 0, 12, 1],
        [`Iron Dagger`, 0, 0, 1],
        [`Simple Bow`, 0, 6, 2],
        [`Simple Crossbow`, 0, 7, 2],
        [`Simple Pistol`, 0, 8, 1],
        
        [`Simple Rifle`, 0, 8, 2],
        [`Iron Claymore`, 0, 3, 2],
        [`Iron Battleaxe`, 0, 4, 2],
        [`Iron Warhammer`, 0, 5, 2],
        [`Iron Spear`, 0, 1, 2],
        
        [`Chipped Wooden Shield`, 0, 13, 1],
        [`Simple Wand`, 0, 9, 1],
        [`Cracked Crystal`, 0, 10, 1],
        [`Worn Rosary`, 0, 11, 1],
        [`Simple Staff`, 0, 9, 2],

        [`Stained Grimoire`, 0, 10, 2],
        [`Basic Tarrot`, 0, 11, 2]
    ]
}