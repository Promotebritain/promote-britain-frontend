export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.setHeader('Allow', ['GET'])
    res
      .status(405)
      .json({ massage: `Method ${req.method} is not allowed.` })
  }
}
