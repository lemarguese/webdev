import { Driving, housekeeping, Cooker, Waiter, Secure } from './jobs';

export const AllCategoriesofJobs = [
    {
        categoryId: 1,
        name: 'housekeep',
        products: housekeeping
    },
    {
        categoryId: 2,
        name: 'driving',
        products: Driving
    },
    {
        categoryId: 3,
        name: 'cooker',
        products: Cooker
    },
    {
        categoryId:4,
        name: 'waiter',
        products: Waiter
    },
    {
        categoryId: 5,
        name: 'security',
        products : Secure
    }
];