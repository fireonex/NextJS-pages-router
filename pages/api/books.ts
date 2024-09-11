import type {NextApiRequest, NextApiResponse} from 'next'

type Data = Book[]
type Book = {
    id: number
    title: string
}

const booksDB: Book[] = [
    {id: 1, title: 'Book 1'},
    {id: 2, title: 'name 2'},
    {id: 3, title: 'name 3'},
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        let books: Book[] = booksDB
        const term = req.query.term as string
        if (term) {
            books = books.filter((book: Book) =>
                book.title.toLowerCase().includes(term.toLowerCase()))
        }

        //await res.revalidate('/characters')

        res.status(200).json(books)
    }
}
