export type PharmacieJson = {
    [key: string]: any;
};

const pharmacieMapper = (data: PharmacieJson) : Pharmacie => {
    return {
        id: data.id,
        name: data.center.name,
    }
}

export { pharmacieMapper }