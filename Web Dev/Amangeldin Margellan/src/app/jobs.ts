import { JobList } from './category';

export const housekeeping: JobList[] = [
    {
        id: 0,
        categoryID : 1,
        description: 'Job for housekeeping',
        like_count: 0,
        title: "Noah's Job"
    }
]
export const Driving : JobList[] = [
    {
        id: 1,
        categoryID: 2,
        description: 'Job for driving',
        like_count: 0,
        title: "Marguese's Job"
    }
]
export const Waiter : JobList[] = [
    {
        id: 2,
        categoryID : 3,
        description: 'Job for waiter',
        like_count: 0,
        title: "Iseke's Job"
    }
]
export const Secure : JobList[] = [
    {
        id: 3,
        categoryID : 4,
        description: 'Job for guarding',
        like_count: 0,
        title: "Johnny's Job"
    }
]
export const Cooker : JobList[] = [
    {
        id: 4,
        categoryID : 5,
        description: 'Job for cooking',
        like_count: 0,
        title: "Tamerlan's Job"
    }
]

export const AllJobs = [...Secure, ...Cooker, ...Waiter, ...housekeeping, ...Driving];