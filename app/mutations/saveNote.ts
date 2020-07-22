import db from "db"

export default async function saveNote(content: string): Promise<void> {
  await db.notes.upsert({ where: { id: 1 }, create: { content }, update: { content } })
}
