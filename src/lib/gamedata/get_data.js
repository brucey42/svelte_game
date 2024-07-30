import { base } from "./base";
import { weapons } from "./weapons";

export const dict = {
    weapon:weapons
};

class Base{
    constructor(id,name){
        this.id = id
        this.name = name
    }
}

class Weapon extends Base{
    constructor(id,name,price,level,profile,dam,hands,stat1,stat2,min,acc,spd,base){
        super(id,name)
        this.price = price
        this.level =  level
        this.profile = profile
        this.dam = dam
        this.hands = hands
        this.stat1 = stat1
        this.stat2 = stat2
        this.min - min
        this.acc = acc
        this.spd = spd
        this.base = base
    }
}

Object.keys(dict).forEach(thing => {
    dict[thing].masters.forEach(item => {
        const level = base[item[1]];
        const profile = thing.profiles[item[2]];
        switch(thing){
            case `weapon`:
                const dam = thing.dams[profile[1]];
                item = new Weapon(
                    index,
                    item[0],
                    level[1],
                    level[0],
                    profile[0],
                    dam[0],
                    item[3],
                    profile[2],
                    profile[3],
                    level[3],
                    profile[4],
                    profile[5],
                    level[2]
                )
                break;
        }
    })
})