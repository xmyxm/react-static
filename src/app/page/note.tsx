import { createRoot } from 'react-dom/client'
import useNoteStore from '../store/note'
import Head from '../component/head'
import Foot from '../component/foot'
import '../style/note.less'

export function Note() {
	const { title } = useNoteStore()

	return (
		<>
			<Head title={title} />
			<div className="note-page"></div>
			<Foot />
		</>
	)
}

const container = document.getElementById('main')
if (container) {
	const root = createRoot(container)
	root.render(<Note />)
}

export default container
