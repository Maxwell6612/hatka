/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", 
              "links.papareact.com", 
              "images.unsplash.com"], 
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibWF4d2VsbDY2MTIiLCJhIjoiY2w1OGh0Z3NuMDBhNjNxano3amgyYnJnaSJ9.O3FF3ytTVEiZ9o7jYecUdA'
  }
}
