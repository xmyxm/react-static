import { createRoot } from 'react-dom/client'
import TripMenu from '../component/tripmenu'
import Weather from '../component/weather'
import Head from '../component/head'
import Foot from '../component/foot'
import '../style/index.less'

export function Index() {
	return (
		<>
			<Head title="武汉天气" />
			<Weather />
			<TripMenu />
			<Foot />
		</>
	)
}

const container = document.getElementById('main')
if (container) {
	const root = createRoot(container)
	root.render(<Index />)
}

export default container
