export const CartFragment = /* GraphQL */ `
    fragment CartFragment on Cart {
        id
        totalItems
        items {
            id
            name
            quantity
            images
            lineTotal {
                formatted
            }
        }
        subtotal {
            formatted
        }
    }
`;

export const GetCartById = /* GraphQL */ `
    query GetCartById($id: ID!) {
        cart(id: $id) {
            ...CartFragment
        }
    }
`;
