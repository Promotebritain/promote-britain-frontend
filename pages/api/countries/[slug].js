export default (req, res) => {
  const apiCountry = countries.filter(
    apiCountry => apiCountry.slug === req.query.slug
  )

  if (req.method === 'GET') {
    res.status(200).json(apiCountry)
  } else {
    res.setHeader('Allow', ['GET'])
    res
      .status(405)
      .json({ massage: `Method ${req.method} is not allowed.` })
  }
}
