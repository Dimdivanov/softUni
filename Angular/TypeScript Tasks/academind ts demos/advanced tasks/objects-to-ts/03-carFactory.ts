interface Engine {
    power: number;
    volume: number;
}
interface Carriage {
    type: 'hatchback' | 'coupe';
    color: string;
}

interface Order {
    model: string;
    power: number;
    color: string;
    carriage: 'hatchback' | 'coupe';
    wheelsize: number;
}

interface Car {
    model: string;
    engine: Engine;
    carriage: Carriage;
    wheels: number[];
}

function carFactory(order: Order): Car {
    let result: Car = {
        model: order.model,
        engine: { power: 0, volume: 0 },
        carriage: { type: 'hatchback', color: order.color },
        wheels: [],
    };

    if (order.power <= 90) {
        result.engine = { power: 90, volume: 1800 };
    } else if (order.power <= 120) {
        result.engine = { power: 120, volume: 2400 };
    } else {
        result.engine = { power: 200, volume: 3500 };
    }

    if (order.carriage === 'hatchback') {
        result.carriage = { type: 'hatchback', color: order.color };
    } else {
        result.carriage = { type: 'coupe', color: order.color };
    }

    let wheelsize = order.wheelsize;
    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }
    result.wheels = Array(4).fill(wheelsize);

    return result;
}

console.log(
    carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14,
    })
);
