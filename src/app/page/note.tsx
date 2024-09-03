import { createRoot } from 'react-dom/client'
import TripDetail from '../component/tripdetail'
import Head from '../component/head'
import Foot from '../component/foot'
import '../style/note.less'

export function Note() {
	return (
		<>
			<Head title="武汉旅游" />
			<TripDetail />
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
