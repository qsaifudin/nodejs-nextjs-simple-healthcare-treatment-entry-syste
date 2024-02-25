export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    const res = await fetch('http://localhost:5000/api/form')
    const data = await res.json()
    console.log("🚀 ~ GET ~ data:", data)
   
    return Response.json({ data })
  }