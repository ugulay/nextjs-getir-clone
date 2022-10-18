import { faker } from '@faker-js/faker/locale/tr';

export type Product = {
    id: string;
    slug: string;
    name: string;
    image: string;
    price: number;
    discountedPrice: number | undefined;
    currency: string;
    size: string;
}

export type Category = {
    id: string;
    slug: string;
    name: string;
    image: string;
}

export const randPrice = (): number => {
    return faker.datatype.float({ min: 2, max: 100 });
}

export const randDiscountedPrice = (): number | undefined => {
    const amt = faker.datatype.float({ min: 2, max: 100 });
    return faker.helpers.maybe(() => amt, { probability: 0.25 })
}

export const randProductId = (): string => {
    return faker.datatype.string(10);
}

export const randProductName = (): string => {
    return faker.fake('{{commerce.productName}}');
}

export const randCategoryName = (): string => {
    return faker.fake('{{commerce.department}}');
}

export const randProductImage = (): string => {
    return faker.image.imageUrl(120, 120, "product", true);
}

export const randProductSize = (): string => {
    const sizes = ["kg", "ml", "gr", "l"];
    return faker.helpers.mustache(`{{amt}} {{size}}`, {
        amt: faker.random.numeric(2),
        size: faker.helpers.arrayElement(sizes)
    });
}

export const randProduct = (): Product => {
    const pName = randProductName();
    return {
        id: randProductId(),
        slug: faker.helpers.slugify(pName),
        name: pName,
        price: randPrice(),
        discountedPrice: randDiscountedPrice(),
        currency: "₺",
        image: randProductImage(),
        size: randProductSize()
    }
}

export const randCategory = (): Category => {
    const cName = randCategoryName();
    return {
        id: randProductId(),
        slug: faker.helpers.slugify(cName),
        name: cName,
        image: randProductImage()
    }
}

export const myLoader = (props?: any) => {
    return props.src ?? null;
}