import sanitClient from '@sanity/client'

export const client = sanitClient ({
    projectId: 'menvq0id',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk9EijYYyJMNk0tv75fdfrGt1kEZkiLT96fufr83PstcD8ybAT8xppt2qGla5uBBIXoqhAUxI7H1fX6LtRhpxzyCW61sjlICXqiT0PQpbHqChpHQCbOaT0t2deJIJstM8AtYLBPmuGt6QNlIRIqRM8kxkR5ygQ4qhWlmXPndQVCFTWBSEU6r',
    useCdn: false,
})