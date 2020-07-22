import db from "db"

export default async function loadNote({}: any): Promise<string> {
  const result = await db.notes.findOne({ where: { id: 1 }, select: { content: true } })
  return result?.content ?? ""
}
