const db = require('../db')
const Boba = require('../models/boba')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Boba.collection.drop()
  const bobas = [
    {
      name: 'Tiger Sugar',
      description:
        'Original black sugar bubble tea with fresh cream and unique tiger stripe design.',
      rating: 'Rating: ⭐ ⭐ ⭐ ⭐ ',
      price: 'Pricing: $$',
      image:
        'https://pbs.twimg.com/profile_images/1150088858782052352/QM14STVN_400x400.jpg',
      Review: '',
      id: '62e080b83561a34cb2166df5'
    },
    {
      name: 'Ni Hao Tea',
      description: 'High-quality boba tea with the most delicious in the area',
      rating: 'Rating: ⭐ ⭐ ⭐ ⭐ ⭐ ',
      price: 'Pricing: $',
      image:
        'https://cdn.doordash.com/media/restaurant/cover_square/bf707b8d-fe7e-49fd-b919-347500f75a3b.jpg',
      id: '62e080b83561a34cb2166df6'
    },
    {
      name: 'Ding Tea',
      description: 'lol',
      rating: 'Rating: ⭐ ⭐ ⭐ ',
      price: 'lol',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MzJVlNGXXrtk02PTMbhGQ30zw1GP7NwwOM53bD8W81WEubDtBRiykZGFBho6PfO3jI0&usqp=CAU',
      id: '62e080b83561a34cb2166df7'
    },
    {
      name: 'iTea',
      description: 'lol',
      rating: 'Rating: ⭐ ⭐ ⭐ ⭐ ',
      price: 'lol',
      image:
        'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,h_300,f_auto,fl_lossy,q_100,c_fit/ghy2jgraamuvgmdatdng',
      id: '62e080b83561a34cb2166df8'
    },
    {
      name: 'Kung Fu Tea',
      description: 'lmao',
      rating: 'Rating: ⭐ ⭐ ⭐ ',
      price: 'lol',
      image:
        'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/uju1ij77jzpkunntdkky',
      id: '62e080b83561a34cb2166df9'
    }
  ]

  await Boba.insertMany(bobas)
  console.log('Drink boba!')

  const review = [
    {
      name: 'test',
      rating: 'test'
    }
  ]
  await Review.insertMany(review)
  // console.log('Created review!')
}

const run = async () => {
  await main()
  db.close()
}

run()
