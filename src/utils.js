function getOffset(currentPage = 1, limit) {
  return (currentPage - 1) * limit
}

function normalizeToCsvMapping(filters, mapping) {
  const norm = {}
  for (const [key, value] of Object.entries(filters)) {
    if(key in mapping) {
      norm[mapping[key]] = value
    }
  }
  // const norm = filters.map( item => {
  //   return mapping[item.key] = item.value
  // })

  return norm
}


module.exports = {
  getOffset,
  normalizeToCsvMapping
}