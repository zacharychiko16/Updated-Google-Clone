export default async function WebSearchPage({searchParams}) {
  const response = await fetch (
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  )
  return (
    <div>WebSearchPage</div>
  ) 
}
