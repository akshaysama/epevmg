const items = [{
        id: 1,
        name: 'Mask',
        slug: 'mask',
        description: '',
        price: '6',
        quantity: 44595,
        imag: '/Gear-Face-Mask.webp.png'
    },
    {
        id: 2,
        name: 'Gloves',
        slug: 'gloves',
        description: '',
        price: '15',
        quantity: 111115,
        imag: '/sterile-hand-gloves-250x250.jpg'
    },
    {
        id: 3,
        name: 'Pills',
        slug: 'Vitamin',
        description: '',
        price: '10',
        quantity: 111115,
        imag: 'pills.jpg'
    },
    {
        id: 4,
        name: 'Sanitizer',
        slug: 'sanitizer',
        description: '',
        price: '30',
        quantity: 11004,
        imag: '/Untitled.png'
    }

]

const pendingRequests = []

module.exports = {
    items,
    pendingRequests
}
