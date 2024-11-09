function ticketDestination(
    ticketsArr: string[],
    description: 'price' | 'destination' | 'status'
): { destination: string; price: number; status: string }[] {
    const result = ticketsArr.map((item) => {
        const [destination, price, status] = item.split('|');
        return { destination, price: parseFloat(price), status };
    });
    const sortedResult = result.sort((a, b) => {
        if (description === 'price') {
            return a.price - b.price;
        } else {
            return a[description].localeCompare(b[description]);
        }
    });
    return sortedResult;
}

console.log(
    ticketDestination(
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed',
        ],
        'status'
    )
);
