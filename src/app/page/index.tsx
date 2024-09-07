import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'
import useIndexStore from '../store/index'
import Head from '../component/head'
import Foot from '../component/foot'
import '../style/index.less'

export function Index() {
	const { time, updateTime } = useIndexStore()

	useEffect(() => {
		const interval = setInterval(() => {
			updateTime()
		}, 1000)

		return () => clearInterval(interval)
	}, [updateTime])

	return (
		<>
			<Head title="Index" />
			<div className="index-page">
				<div className="clock-box">
					<div className="clock-title">当前时间</div>
					<div className="clock-content">{time.toLocaleTimeString()}</div>
				</div>
			</div>
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
